import 'mocha';
import {Utils, Wallet, BigNumber, Erc20, TransactionReceipt} from "@ijstech/eth-wallet";
import {CoreContract, IDeployedContracts, deploy } from "../src/index";
import {Contract as Mock} from "../packages/mock-contracts";
import { assertEqual, getProvider, expectToFail, print } from './helper';

const ETH_PRICE_IN_USD = 2000;
const UNI_PRICE_IN_USD = 5; // USD per UNI
const LINK_PRICE_IN_USD = 6;  // USD per LINK

describe('Uniswap V3', function() {
    let accounts: string[];
    let wallet: Wallet;

    let weth: Mock.WETH9;
    let usdt: Erc20;
    let uni: Erc20;

    let uniswap: IDeployedContracts;

    let deployer: string;
    let lp: string;
    let swapper: string;

    before(async ()=>{
        wallet = new Wallet(getProvider());
        accounts = await wallet.accounts;

        deployer = accounts[0];
        lp = accounts[1];
        swapper = accounts[2];
    });
    it('deploy', async function() {
        console.log('deploying weth and mock tokens');

        wallet.defaultAccount = deployer;
        weth = new Mock.WETH9(wallet);
        await weth.deploy();
        console.log(`weth: ${weth.address}`);

        usdt = new Erc20(wallet, await new Mock.MockErc20(wallet).deploy({name:"USDT", symbol:"USDT", decimals:6}));
        console.log(`usdt: ${usdt.address}`);
        uni = new Erc20(wallet, await new Mock.MockErc20(wallet).deploy({name:"UNI", symbol:"UNI", decimals:18}));
        console.log(`uni: ${uni.address}`);

        uniswap = await deploy(wallet, {weth: weth.address}, (msg: string)=>{
            console.dir(msg)
        });
    });
    let pairFee = Utils.toDecimals("0.01", 6); // 0.010000
    it('add liqudity', async function() {
        let USDT_TO_ADD = 1000000;
        let UNI_TO_ADD = USDT_TO_ADD / UNI_PRICE_IN_USD;

        wallet.defaultAccount = deployer;
        await usdt.mint({address: lp, amount: USDT_TO_ADD});
        await uni.mint({address: lp, amount: UNI_TO_ADD});

        wallet.defaultAccount = lp;
        await usdt.approve({spender: uniswap.nftPosMngr.address, amount: USDT_TO_ADD});
        await uni.approve({spender: uniswap.nftPosMngr.address, amount: UNI_TO_ADD});

        let now = await wallet.getBlockTimestamp();
        let receipt1: TransactionReceipt;
        let receipt2: TransactionReceipt;

        // FIXME: rough estimation
        function getTick(price: BigNumber, tickSpace:number) {
            /*
            log_base1.0001(X) = log(X) / log(1.0001)
            log(big_X) = log(x*(10+eY)) = Y + log(x)
            Math.round(Math.round(Math.log(Math.sqrt(price))/Math.log(1.0001))/tickSpacing)*tickSpacing,
            */
            let sqrt = price.sqrt().toFixed();
            let dp = sqrt.indexOf('.');
            if (sqrt.startsWith("0.")) { // sqrt < 1
                dp = 0;
            } else {  // sqrt > 1
                if (dp < 0)
                    dp = sqrt.length;
                sqrt = "0." + sqrt.substring(0,dp) + sqrt.substring(dp+1);
            }
            let log = dp + Math.log10(parseFloat(sqrt));
            return Math.round(Math.round(log/Math.log10(1.0001))/tickSpace)*tickSpace;
        }
        async function createAndAdd(token0: Erc20, token1: Erc20, price: BigNumber, amount0: BigNumber, amount1: BigNumber): Promise<{receipt1:TransactionReceipt, receipt2:TransactionReceipt}> {
            let _price = new BigNumber(price).shiftedBy(await token1.decimals - await token0.decimals);
/*
1 UNI = 5 USDT
1000000000000000000 = 5000000
200000000000 = 1
1 = 0.000000000005
*/
            let param1 = {
                token0: token0.address,
                token1: token1.address,
                fee: pairFee,
                sqrtPriceX96: _price.sqrt().times(new BigNumber(2).pow(96)).dp(0) // 177159557114295710296167184869
            };
            print(param1);
            receipt1 = await uniswap.nftPosMngr.createAndInitializePoolIfNecessary(param1);

            let tickSpacing = (await uniswap.factory.feeAmountTickSpacing(pairFee)).toNumber();
            let params2 = {
                token0: token0.address,
                token1: token1.address,
                fee: pairFee, 
                tickLower: getTick(_price.times("0.8"), tickSpacing),
                tickUpper: getTick(_price.times("1.2"), tickSpacing),
                // tickLower: Math.round(-887272/tickSpacing)*tickSpacing,
                // tickUpper: Math.round(887272/tickSpacing)*tickSpacing,
                amount0Desired: amount0,
                amount1Desired: amount1,
                amount0Min: 0,
                amount1Min: 0,
                recipient: lp,
                deadline: now + 1000
            };
            print(params2)
            receipt2 = await uniswap.nftPosMngr.mint(params2);

            return {receipt1, receipt2}
        }

        if (new BigNumber(uni.address.toLowerCase()).lt(usdt.address.toLowerCase())) {
            ({receipt1, receipt2} = await createAndAdd(uni, usdt, new BigNumber(UNI_PRICE_IN_USD), Utils.toDecimals(UNI_TO_ADD), Utils.toDecimals(USDT_TO_ADD, 6)));
        } else {
            ({receipt1, receipt2} = await createAndAdd(usdt, uni, new BigNumber(1 / UNI_PRICE_IN_USD), Utils.toDecimals(USDT_TO_ADD, 6), Utils.toDecimals(UNI_TO_ADD)));
        }
        print(receipt1);
        print(receipt2);
    });
    let USDT_FROM_AMOUNT = 100;
    it('swap', async function() {
        let price = UNI_PRICE_IN_USD;

        wallet.defaultAccount = deployer;
        await usdt.mint({address: swapper, amount: USDT_FROM_AMOUNT});

        wallet.defaultAccount = swapper;
        await usdt.approve({spender: uniswap.router.address, amount: USDT_FROM_AMOUNT});
       
        let poolAddress = await uniswap.factory.getPool(
            new BigNumber(uni.address.toLowerCase()).lt(usdt.address.toLowerCase()) ? 
            {param1: uni.address, param2: usdt.address, param3: pairFee}: 
            {param1: usdt.address, param2: uni.address, param3: pairFee}
        );
        console.log("pool:", poolAddress);
        let pool = new CoreContract.UniswapV3Pool(wallet, poolAddress);
        print(await pool.slot0());

        let now = await wallet.getBlockTimestamp();
        wallet.defaultAccount = swapper;
        let params = {
            tokenIn: usdt.address,
            tokenOut: uni.address,
            fee: pairFee,
            recipient: swapper,
            deadline: now + 3600,
            amountIn: Utils.toDecimals(USDT_FROM_AMOUNT, await usdt.decimals),
            amountOutMinimum: Utils.toDecimals(0),
            sqrtPriceLimitX96: 0//new BigNumber((price * 1.2).toString()).sqrt().times(new BigNumber(2).pow(96)).dp(0) //
        };
        print(params);
        let receipt = await uniswap.router.exactInputSingle(params);
        print(receipt);
    });
}); 
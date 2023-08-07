import 'mocha';
import {Utils, Wallet, BigNumber, Erc20, TransactionReceipt, Web3} from "@ijstech/eth-wallet";
import {CoreContract, IDeployedContracts, deploy, toSqrtX96, getExactAmountInRoute, getExactAmountOutRoute, convertPathFromStringToArr,
    IGetExactAmountOutRouteParam, IGetExactAmountInRouteParam, IExactAmountOutRouteObj, IExactAmountInRouteObj} from "../src/index";
import {Contract as Mock} from "../packages/mock-contracts";
import { assertEqual, getProvider, expectToFail, print } from './helper';
import assert from "assert";

const ETH_PRICE_IN_USD = 2000;
const UNI_PRICE_IN_USD = 5; // USD per UNI
const LINK_PRICE_IN_USD = 6;  // USD per LINK


// FIXME: rough estimation
function getTick(price: BigNumber, tickSpace:number): number {
    /*
    log_base1.0001(X) = log(X) / log(1.0001)
    log(big_X) = log(x*(1+eY)) = Y + log(x)
    Math.round(Math.round(Math.log(Math.sqrt(price))/Math.log(1.0001))/tickSpacing)*tickSpacing,
    */
    let sqrt = price.toFixed();
    let dp = sqrt.indexOf('.');
    if (sqrt.startsWith("0.")) { // sqrt < 1
        dp = 0;
    } else {  // sqrt > 1
        if (dp < 0) // no decimal point
            dp = sqrt.length;
        sqrt = "0." + sqrt.substring(0,dp) + sqrt.substring(dp+1);
    }
    let log = dp + Math.log10(parseFloat(sqrt));
    return Math.round(Math.round(log/Math.log10(1.0001))/tickSpace)*tickSpace;
}
async function createAndAdd(uniswap: IDeployedContracts, token0: Erc20, token1: Erc20, pairFee: BigNumber, price: BigNumber, amount0: number, amount1: number, lp: string, deadline: number, eth?:number): Promise<{receipt1:TransactionReceipt, receipt2:TransactionReceipt}> {
    let receipt1: TransactionReceipt;
    let receipt2: TransactionReceipt;
    let _price = new BigNumber(price).shiftedBy(await token1.decimals - await token0.decimals);
    let param1 = {
        token0: token0.address,
        token1: token1.address,
        fee: pairFee,
        sqrtPriceX96: toSqrtX96(_price)
    };
    // print(param1);
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
        amount0Desired: Utils.toDecimals(amount0, await token0.decimals),
        amount1Desired: Utils.toDecimals(amount1, await token1.decimals),
        amount0Min: 0,
        amount1Min: 0,
        recipient: lp,
        deadline: deadline
    };
    // print(params2);
    receipt2 = await uniswap.nftPosMngr.mint(params2, eth?Utils.toDecimals(eth):undefined); 

    return {receipt1, receipt2}
}
describe('Uniswap V3', function() {
    let accounts: string[];
    let wallet: Wallet;

    let weth: Erc20;
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
        weth = new Erc20(wallet, await new Mock.WETH9(wallet).deploy());
        console.log(`weth: ${weth.address}`);

        usdt = new Erc20(wallet, await new Mock.MockErc20(wallet).deploy({name:"USDT", symbol:"USDT", decimals:6}));
        console.log(`usdt: ${usdt.address}`);
        uni = new Erc20(wallet, await new Mock.MockErc20(wallet).deploy({name:"UNI", symbol:"UNI", decimals:18}));
        console.log(`uni: ${uni.address}`);

        uniswap = await deploy(wallet, {weth: weth.address}, (msg: string)=>{
            console.dir(msg)
        });
    });
    // if (false)
    describe('token-token', async function() {
    let pairFee = Utils.toDecimals("0.01", 6); // 0.010000
    let pool: CoreContract.UniswapV3Pool;
    it('add liqudity', async function() {
        let USDT_TO_ADD = 1000000;
        let UNI_TO_ADD = USDT_TO_ADD / UNI_PRICE_IN_USD;

        wallet.defaultAccount = deployer;
        await usdt.mint({address: lp, amount: USDT_TO_ADD});
        await uni.mint({address: lp, amount: UNI_TO_ADD});

        wallet.defaultAccount = lp;
        await usdt.approve({spender: uniswap.nftPosMngr.address, amount: USDT_TO_ADD});
        await uni.approve({spender: uniswap.nftPosMngr.address, amount: UNI_TO_ADD});

        let deadline = await wallet.getBlockTimestamp() + 1000;
        let receipt1: TransactionReceipt;
        let receipt2: TransactionReceipt;

        if (new BigNumber(uni.address.toLowerCase()).lt(usdt.address.toLowerCase())) {
            ({receipt1, receipt2} = await createAndAdd(uniswap, uni, usdt, pairFee, new BigNumber(UNI_PRICE_IN_USD), UNI_TO_ADD, USDT_TO_ADD, lp, deadline));
        } else {
            ({receipt1, receipt2} = await createAndAdd(uniswap, usdt, uni, pairFee, new BigNumber(1 / UNI_PRICE_IN_USD), USDT_TO_ADD, UNI_TO_ADD, lp, deadline));
        }
        // print(receipt1);
        // print(receipt2);

        let poolAddress = await uniswap.factory.getPool(
            new BigNumber(uni.address.toLowerCase()).lt(usdt.address.toLowerCase()) ? 
            {param1: uni.address, param2: usdt.address, param3: pairFee}: 
            {param1: usdt.address, param2: uni.address, param3: pairFee}
        );
        console.log("pool:", poolAddress);
        pool = new CoreContract.UniswapV3Pool(wallet, poolAddress);
        // print(await pool.slot0());
        /*
        {
        sqrtPriceX96: 177159557114295734349045 // =5e-12   (5*e6 usdt = 1e18 uni) (1 usdt = 0.2e12 uni) (5e-12 usdt = 1 uni)
        tick: -260229
        observationIndex: 0
        observationCardinality: 1
        observationCardinalityNext: 1
        feeProtocol: 0
        unlocked: true
        }
        */
    });
    describe('swap', async function() {
    let USDT_FROM_AMOUNT = 100;
    let price: BigNumber;
    let uniIsToken0: boolean;
    before(async function() {
        price = new BigNumber(UNI_PRICE_IN_USD).shiftedBy(await usdt.decimals - await uni.decimals);
        uniIsToken0 = (await pool.token0()) == uni.address;
        // price are relative to uni, inverse it if usdt has a smaller address, i.e., token0 is usdt
        if (!uniIsToken0) {
            console.log('inv price 1')
            price = price.pow(-1);
        }
    })
    it('swap 1', async function() {
        wallet.defaultAccount = deployer;
        await usdt.mint({address: swapper, amount: USDT_FROM_AMOUNT});

        wallet.defaultAccount = swapper;
        await usdt.approve({spender: uniswap.router.address, amount: USDT_FROM_AMOUNT});

        let now = await wallet.getBlockTimestamp();
        let _price = price.times(!uniIsToken0 ? "0.99" : "1.01");
        wallet.defaultAccount = swapper;
        let params = {
            tokenIn: usdt.address,
            tokenOut: uni.address,
            fee: pairFee,
            recipient: swapper,
            deadline: now + 3600,
            amountIn: Utils.toDecimals(USDT_FROM_AMOUNT, await usdt.decimals),
            amountOutMinimum: Utils.toDecimals(0),
            sqrtPriceLimitX96: toSqrtX96(_price) //0
        };
        // print(params);
        print(await usdt.balanceOf(swapper), await uni.balanceOf(swapper));
        let receipt = await uniswap.router.exactInputSingle(params);
        // print(receipt);
        print(await usdt.balanceOf(swapper), await uni.balanceOf(swapper));
    });
    it('swap 2', async function() {
        let UNI_FROM_AMOUNT = USDT_FROM_AMOUNT / UNI_PRICE_IN_USD;

        wallet.defaultAccount = deployer;
        await uni.mint({address: swapper, amount: UNI_FROM_AMOUNT});

        wallet.defaultAccount = swapper;
        await uni.approve({spender: uniswap.router.address, amount: UNI_FROM_AMOUNT});

        let now = await wallet.getBlockTimestamp();
        let _price = price.times(uniIsToken0 ? "0.99" : "1.01");
        wallet.defaultAccount = swapper;
        let params = {
            tokenIn: uni.address,
            tokenOut: usdt.address,
            fee: pairFee,
            recipient: swapper,
            deadline: now + 3600,
            amountIn: Utils.toDecimals(UNI_FROM_AMOUNT, await uni.decimals),
            amountOutMinimum: Utils.toDecimals(0),
            sqrtPriceLimitX96: toSqrtX96(_price) //0
        };
        // print(params);
        print(await usdt.balanceOf(swapper), await uni.balanceOf(swapper));
        let receipt = await uniswap.router.exactInputSingle(params);
        // print(receipt);
        print(await usdt.balanceOf(swapper), await uni.balanceOf(swapper));
    });
    it('swap 3', async function() {
        let UNI_TO_AMOUNT = USDT_FROM_AMOUNT / UNI_PRICE_IN_USD;

        wallet.defaultAccount = deployer;
        await usdt.mint({address: swapper, amount: USDT_FROM_AMOUNT*2});

        wallet.defaultAccount = swapper;
        await usdt.approve({spender: uniswap.router.address, amount: USDT_FROM_AMOUNT*2});

        let now = await wallet.getBlockTimestamp();
        let _price = price.times(!uniIsToken0 ? "0.99" : "1.01");
        wallet.defaultAccount = swapper;
        let params = {
            tokenIn: usdt.address,
            tokenOut: uni.address,
            fee: pairFee,
            recipient: swapper,
            deadline: now + 3600,
            amountOut: Utils.toDecimals(UNI_TO_AMOUNT, await uni.decimals),
            amountInMaximum: Utils.toDecimals(USDT_FROM_AMOUNT*2, 6),
            sqrtPriceLimitX96: toSqrtX96(_price) //0
        };
        // print(params);
        print(await usdt.balanceOf(swapper), await uni.balanceOf(swapper));
        let receipt = await uniswap.router.exactOutputSingle(params);
        // print(receipt);
        print(await usdt.balanceOf(swapper), await uni.balanceOf(swapper));
    });
    it('swap 4', async function() {
        let USDT_TO_AMOUNT = USDT_FROM_AMOUNT;
        let UNI_FROM_AMOUNT = USDT_TO_AMOUNT / UNI_PRICE_IN_USD;

        wallet.defaultAccount = deployer;
        await uni.mint({address: swapper, amount: UNI_FROM_AMOUNT*2});

        wallet.defaultAccount = swapper;
        await uni.approve({spender: uniswap.router.address, amount: UNI_FROM_AMOUNT*2});

        let now = await wallet.getBlockTimestamp();
        let _price = price.times(uniIsToken0 ? "0.99" : "1.01");
        wallet.defaultAccount = swapper;
        let params = {
            tokenIn: uni.address,
            tokenOut: usdt.address,
            fee: pairFee,
            recipient: swapper,
            deadline: now + 3600,
            amountOut: Utils.toDecimals(USDT_TO_AMOUNT, await usdt.decimals),
            amountInMaximum: Utils.toDecimals(UNI_FROM_AMOUNT*2),
            sqrtPriceLimitX96: toSqrtX96(_price) //0
        };
        // print(params);
        print(await usdt.balanceOf(swapper), await uni.balanceOf(swapper));
        let receipt = await uniswap.router.exactOutputSingle(params);
        // print(receipt);
        print(await usdt.balanceOf(swapper), await uni.balanceOf(swapper));
    });
    });
    });
    // if (false)
    describe('eth-token', async function() {
    let pairFee = Utils.toDecimals("0.01", 6); // 0.010000
    let pool: CoreContract.UniswapV3Pool;
    it('add liqudity', async function() {
        let USDT_TO_ADD = 1000000;
        let ETH_TO_ADD = USDT_TO_ADD / ETH_PRICE_IN_USD;

        wallet.defaultAccount = deployer;
        await usdt.mint({address: lp, amount: USDT_TO_ADD});

        wallet.defaultAccount = lp;
        await usdt.approve({spender: uniswap.nftPosMngr.address, amount: USDT_TO_ADD});

        let deadline = await wallet.getBlockTimestamp() + 1000;
        let receipt1: TransactionReceipt;
        let receipt2: TransactionReceipt;

        // print(await wallet.balanceOf(lp));
        // print(await weth.balanceOf(lp));
        if (new BigNumber(weth.address.toLowerCase()).lt(usdt.address.toLowerCase())) {
            ({receipt1, receipt2} = await createAndAdd(uniswap, weth, usdt, pairFee, new BigNumber(ETH_PRICE_IN_USD), ETH_TO_ADD, USDT_TO_ADD, lp, deadline, ETH_TO_ADD));
        } else {
            ({receipt1, receipt2} = await createAndAdd(uniswap, usdt, weth, pairFee, new BigNumber(1 / ETH_PRICE_IN_USD), USDT_TO_ADD, ETH_TO_ADD, lp, deadline, ETH_TO_ADD));
        }
        // print(receipt1);
        // print(receipt2);
        // print(await wallet.balanceOf(lp));
        // print(await weth.balanceOf(lp));

        let poolAddress = await uniswap.factory.getPool(
            new BigNumber(uni.address.toLowerCase()).lt(usdt.address.toLowerCase()) ? 
            {param1: weth.address, param2: usdt.address, param3: pairFee}: 
            {param1: usdt.address, param2: weth.address, param3: pairFee}
        );
        console.log("pool:", poolAddress);
        pool = new CoreContract.UniswapV3Pool(wallet, poolAddress);
        // print(await pool.slot0());
        /*
        {
        sqrtPriceX96: 3543191142285913894699275 // =2e-9 ( 1e18 weth = 2000e6 usdt ) ( 1 weth = 2000e-12 usdt ) ( 0.0005e12 weth = 1 usdt )
        tick: -200312
        observationIndex: 0
        observationCardinality: 1
        observationCardinalityNext: 1
        feeProtocol: 0
        unlocked: true
        }
        */
    });
    describe('swap', async function() {
    let USDT_FROM_AMOUNT = 100;
    let price: BigNumber;
    let wethIsToken0: boolean;
    before('swap', async function() {
        price = new BigNumber(ETH_PRICE_IN_USD).shiftedBy(await usdt.decimals - await weth.decimals);
        wethIsToken0 = (await pool.token0()) == weth.address;
        if (!wethIsToken0) {
            console.log('inv price 2')
            price = price.pow(-1);
        }
    });
    it('swap exact-in', async function() {
        wallet.defaultAccount = deployer;
        await usdt.mint({address: swapper, amount: USDT_FROM_AMOUNT});

        wallet.defaultAccount = swapper;
        await usdt.approve({spender: uniswap.router.address, amount: USDT_FROM_AMOUNT});

        let now = await wallet.getBlockTimestamp();
        let _price = price.times(!wethIsToken0 ? "0.99" : "1.01");
        wallet.defaultAccount = swapper;
        let params = {
            tokenIn: usdt.address,
            tokenOut: weth.address,
            fee: pairFee,
            recipient: uniswap.router.address, // *** set to router to unwrap weth
            deadline: now + 3600,
            amountIn: Utils.toDecimals(USDT_FROM_AMOUNT, await usdt.decimals),
            amountOutMinimum: Utils.toDecimals(0),
            sqrtPriceLimitX96: toSqrtX96(_price) //0
        };
        // print(params);
        print(await usdt.balanceOf(swapper), await wallet.balanceOf(swapper), await weth.balanceOf(swapper));
        let callData1 = await uniswap.router.exactInputSingle.txData(params);
        let callData2 = await uniswap.router.unwrapWETH9.txData({amountMinimum: 0, recipient: swapper});
        let receipt = await uniswap.router.multicall([callData1, callData2]);
        // print(receipt);
        print(await usdt.balanceOf(swapper), await wallet.balanceOf(swapper), await weth.balanceOf(swapper));
    });
    it('swap exact-out', async function() {
        let now = await wallet.getBlockTimestamp();
        let _price = price.times(wethIsToken0 ? "0.99" : "1.01");
        wallet.defaultAccount = swapper;
        let params = {
            tokenIn: weth.address,
            tokenOut: usdt.address,
            fee: pairFee,
            recipient: swapper,
            deadline: now + 3600,
            amountOut: Utils.toDecimals(USDT_FROM_AMOUNT, await usdt.decimals),
            amountInMaximum: Utils.toDecimals(1),
            sqrtPriceLimitX96: toSqrtX96(_price) //0
        };
        // print(params);
        print(await usdt.balanceOf(swapper), await wallet.balanceOf(swapper), await weth.balanceOf(swapper));
        let callData1 = await uniswap.router.exactOutputSingle.txData(params);
        let callData2 = await uniswap.router.refundETH.txData();
        let receipt = await uniswap.router.multicall([callData1, callData2], Utils.toDecimals(1));
        // print(receipt);
        print(await usdt.balanceOf(swapper), await wallet.balanceOf(swapper), await weth.balanceOf(swapper), await wallet.balanceOf(uniswap.router.address));
    });
    it('swap exact-out 2', async function() {
        print(await usdt.balanceOf(swapper));
        wallet.defaultAccount = deployer;
        await usdt.mint({address: swapper, amount: USDT_FROM_AMOUNT*2});

        wallet.defaultAccount = swapper;
        await usdt.approve({spender: uniswap.router.address, amount: USDT_FROM_AMOUNT*2});

        let now = await wallet.getBlockTimestamp();
        let _price = price.times(!wethIsToken0 ? "0.99" : "1.01");     
        wallet.defaultAccount = swapper;
        let params = {
            tokenIn: usdt.address,
            tokenOut: weth.address,
            fee: pairFee,
            recipient: uniswap.router.address,
            deadline: now + 3600,
            amountOut: Utils.toDecimals(USDT_FROM_AMOUNT/ETH_PRICE_IN_USD),
            amountInMaximum: Utils.toDecimals(USDT_FROM_AMOUNT*2, await usdt.decimals),
            sqrtPriceLimitX96: toSqrtX96(_price) //0
        };
        // print(params);
        print(await usdt.balanceOf(swapper), await wallet.balanceOf(swapper), await weth.balanceOf(swapper));
        let callData1 = await uniswap.router.exactOutputSingle.txData(params);
        let callData2 = await uniswap.router.unwrapWETH9.txData({amountMinimum: 0, recipient: swapper});
        let receipt = await uniswap.router.multicall([callData1, callData2]);
        // print(receipt);
        print(await usdt.balanceOf(swapper), await wallet.balanceOf(swapper), await weth.balanceOf(swapper), await wallet.balanceOf(uniswap.router.address), await usdt.balanceOf(uniswap.router.address));
        print(await usdt.allowance({owner: swapper, spender: uniswap.router.address}))
    });
    });
    });
    describe('multi-hop', async function() {
    it('swap exact-in', async function() {
        // eth -> usdt -> uni;
        //   1 -> 2000 -> 400
        let path = "0x" + 
                    weth.address.toLowerCase().replace("0x","") + 
                    Utils.numberToBytes32(Utils.toDecimals("0.01", 6)).substring(58,64) +
                    usdt.address.toLowerCase().replace("0x","") + 
                    Utils.numberToBytes32(Utils.toDecimals("0.01", 6)).substring(58,64) +
                    uni.address.toLowerCase().replace("0x","");

        let now = await wallet.getBlockTimestamp();
        let param = {
            path: path,
            recipient: swapper,
            deadline: now + 1000,
            amountIn: Utils.toDecimals(1, await weth.decimals),
            amountOutMinimum: 0
        }
        print(await uni.balanceOf(swapper), await wallet.balanceOf(swapper), await weth.balanceOf(swapper));
        let receipt = await uniswap.router.exactInput(
            param,
            Utils.toDecimals(1)
        );
        
        print(await uni.balanceOf(swapper), await wallet.balanceOf(swapper), await weth.balanceOf(swapper), await wallet.balanceOf(uniswap.router.address));
    });
    it('swap exact-Out', async function() {
        // eth -> usdt -> uni;
        //   1 -> 2000 -> 400
        let path = "0x" + 
                    uni.address.toLowerCase().replace("0x","") +
                    Utils.numberToBytes32(Utils.toDecimals("0.01", 6)).substring(58,64) +
                    usdt.address.toLowerCase().replace("0x","") + 
                    Utils.numberToBytes32(Utils.toDecimals("0.01", 6)).substring(58,64) +
                    weth.address.toLowerCase().replace("0x","");

        let now = await wallet.getBlockTimestamp();
        let param = {
            path: path,
            recipient: swapper,
            deadline: now + 1000,
            amountOut: Utils.toDecimals(400, await uni.decimals),
            amountInMaximum: Utils.toDecimals(2)
        }
        print(await uni.balanceOf(swapper), await wallet.balanceOf(swapper), await weth.balanceOf(swapper));
        let callData1 = await uniswap.router.exactOutput.txData(
            param
        );
        let callData2 = await uniswap.router.refundETH.txData();
        let receipt = await uniswap.router.multicall([callData1, callData2], Utils.toDecimals(2));
        // print(receipt);
        print(await uni.balanceOf(swapper), await wallet.balanceOf(swapper), await weth.balanceOf(swapper),await wallet.balanceOf(uniswap.router.address));
    });
    });
    describe('test sdk functions', async function() {
        before('deploy pairs with different fee', async function() {
            let pairFee = Utils.toDecimals("0.0005", 6); // 0.00050000
            let USDT_TO_ADD = 1000000;
            let ETH_TO_ADD = USDT_TO_ADD / ETH_PRICE_IN_USD;
            let UNI_TO_ADD = USDT_TO_ADD / UNI_PRICE_IN_USD;
            let deadline = await wallet.getBlockTimestamp() + 1000;
    
            // Add weth & usdt pair
            wallet.defaultAccount = deployer;
            await usdt.mint({address: lp, amount: USDT_TO_ADD});
    
            wallet.defaultAccount = lp;
            await usdt.approve({spender: uniswap.nftPosMngr.address, amount: USDT_TO_ADD});
    
            if (new BigNumber(weth.address.toLowerCase()).lt(usdt.address.toLowerCase())) {
                await createAndAdd(uniswap, weth, usdt, pairFee, new BigNumber(ETH_PRICE_IN_USD), ETH_TO_ADD, USDT_TO_ADD, lp, deadline, ETH_TO_ADD);
            } else {
                await createAndAdd(uniswap, usdt, weth, pairFee, new BigNumber(1 / ETH_PRICE_IN_USD), USDT_TO_ADD, ETH_TO_ADD, lp, deadline, ETH_TO_ADD);
            }
            
            // Add uni & usdt pair
            wallet.defaultAccount = deployer;
            await usdt.mint({address: lp, amount: USDT_TO_ADD});
            await uni.mint({address: lp, amount: UNI_TO_ADD});
    
            wallet.defaultAccount = lp;
            await usdt.approve({spender: uniswap.nftPosMngr.address, amount: USDT_TO_ADD});
            await uni.approve({spender: uniswap.nftPosMngr.address, amount: UNI_TO_ADD});

            if (new BigNumber(uni.address.toLowerCase()).lt(usdt.address.toLowerCase())) {
                await createAndAdd(uniswap, uni, usdt, pairFee, new BigNumber(UNI_PRICE_IN_USD), UNI_TO_ADD, USDT_TO_ADD, lp, deadline);
            } else {
                await createAndAdd(uniswap, usdt, uni, pairFee, new BigNumber(1 / UNI_PRICE_IN_USD), USDT_TO_ADD, UNI_TO_ADD, lp, deadline);
            }

            // Add uni & weth pair
            const UNI_PRICE_IN_ETH = 0.05;
            UNI_TO_ADD = 100;
            ETH_TO_ADD = UNI_TO_ADD * UNI_PRICE_IN_ETH;

            wallet.defaultAccount = deployer;
            await uni.mint({address: lp, amount: UNI_TO_ADD});
    
            wallet.defaultAccount = lp;
            await uni.approve({spender: uniswap.nftPosMngr.address, amount: UNI_TO_ADD});
    
            if (new BigNumber(weth.address.toLowerCase()).lt(usdt.address.toLowerCase())) {
                await createAndAdd(uniswap, weth, uni, pairFee, new BigNumber(UNI_PRICE_IN_ETH), ETH_TO_ADD, UNI_TO_ADD, lp, deadline, ETH_TO_ADD);
            } else {
                await createAndAdd(uniswap, uni, weth, pairFee, new BigNumber(1 / UNI_PRICE_IN_ETH), UNI_TO_ADD, ETH_TO_ADD, lp, deadline, ETH_TO_ADD);
            }
        });
        it('quote exact amount in - no hop', async function() {
            let effectiveGasPrice = new BigNumber(2000000000);
            // weth -> usdt

            let exactAmountIn = new BigNumber(1).shiftedBy(await weth.decimals)
            // Quote
            let quoteParam: IGetExactAmountInRouteParam = {
                wallet, 
                quoterAddress: uniswap.quoter.address, 
                tokenIn: weth.address, 
                tokenOut: usdt.address, 
                exactAmountIn
            }
            
            let quote: IExactAmountInRouteObj = (await getExactAmountInRoute(quoteParam))[0];
            let fee = convertPathFromStringToArr(quote.path)[1];

            // Swap
            let now = await wallet.getBlockTimestamp();
            wallet.defaultAccount = swapper;
            let params = {
                tokenIn: quote.tokenIn,
                tokenOut: quote.tokenOut,
                fee,
                recipient: swapper,
                deadline: now + 3600,
                amountIn: quote.exactAmountIn,
                amountOutMinimum: quote.amountOut,
                sqrtPriceLimitX96: 0
            };

            let ethBalanceBeforeTrx = await wallet.balanceOf(swapper);
            let usdtBalanceBeforeTrx = await usdt.balanceOf(swapper);
            let callData1 = await uniswap.router.exactInputSingle.txData(params);
            let callData2 = await uniswap.router.refundETH.txData();
            let receipt = await uniswap.router.multicall([callData1, callData2], Utils.toDecimals(1));
            let ethBalanceAfterTrx = await wallet.balanceOf(swapper);
            let usdtBalanceAfterTrx = await usdt.balanceOf(swapper);

            // Calculate token give and get
            let ethUsedActual = ethBalanceBeforeTrx.minus(ethBalanceAfterTrx).shiftedBy(await weth.decimals).toFixed();
            let ethUsedEstimated = quote.exactAmountIn.plus(effectiveGasPrice.times(receipt.gasUsed)).toFixed()
            let usdtGetActual = usdtBalanceAfterTrx.minus(usdtBalanceBeforeTrx).shiftedBy(await usdt.decimals).toFixed();
            let usdtGetEstimated = quote.amountOut.toFixed()

            // Test the calculation
            assert.equal(ethUsedActual, ethUsedEstimated)
            assert.equal(usdtGetActual, usdtGetEstimated)
        });
        it('quote exact amount out - no hop', async function() {
            let effectiveGasPrice = new BigNumber(2000000000);
            // weth -> usdt

            let exactAmountOut = new BigNumber(100).shiftedBy(await usdt.decimals)
            // Quote
            let quoteParam: IGetExactAmountOutRouteParam = {
                wallet, 
                quoterAddress: uniswap.quoter.address, 
                tokenIn: weth.address, 
                tokenOut: usdt.address, 
                exactAmountOut
            }
            let quote: IExactAmountOutRouteObj = (await getExactAmountOutRoute(quoteParam))[0];
            let fee = convertPathFromStringToArr(quote.path)[1];

            // Swap
            let now = await wallet.getBlockTimestamp();
            wallet.defaultAccount = swapper;
            let params = {
                tokenIn: quote.tokenIn,
                tokenOut: quote.tokenOut,
                fee: fee,
                recipient: swapper,
                deadline: now + 3600,
                amountOut: exactAmountOut,
                amountInMaximum: quote.amountIn,
                sqrtPriceLimitX96: 0
            };

            let ethBalanceBeforeTrx = await wallet.balanceOf(swapper);
            let usdtBalanceBeforeTrx = await usdt.balanceOf(swapper);
            let callData1 = await uniswap.router.exactOutputSingle.txData(params);
            let callData2 = await uniswap.router.refundETH.txData();
            let receipt = await uniswap.router.multicall([callData1, callData2], Utils.toDecimals(1));
            let ethBalanceAfterTrx = await wallet.balanceOf(swapper);
            let usdtBalanceAfterTrx = await usdt.balanceOf(swapper);

            // Calculate token give and get
            let ethUsedActual = ethBalanceBeforeTrx.minus(ethBalanceAfterTrx).shiftedBy(await weth.decimals).toFixed();
            let ethUsedEstimated = quote.amountIn.plus(effectiveGasPrice.times(receipt.gasUsed)).toFixed()
            let usdtGetActual = usdtBalanceAfterTrx.minus(usdtBalanceBeforeTrx).shiftedBy(await usdt.decimals).toFixed();
            let usdtGetEstimated = quote.exactAmountOut.toFixed()

            // Test the calculation
            assert.equal(ethUsedActual, ethUsedEstimated)
            assert.equal(usdtGetActual, usdtGetEstimated)
        });
        it('quote exact amount out - 1 hop', async function() {
            let effectiveGasPrice = new BigNumber(2000000000);

            // eth -> usdt -> uni;
            //   1 -> 2000 -> 400
            let path = "0x" +
                uni.address.toLowerCase().replace("0x","") +
                Utils.numberToBytes32(Utils.toDecimals("0.01", 6)).substring(58,64) +
                usdt.address.toLowerCase().replace("0x","") + 
                Utils.numberToBytes32(Utils.toDecimals("0.01", 6)).substring(58,64) +
                weth.address.toLowerCase().replace("0x","");

            let exactAmountOut = new BigNumber(100).shiftedBy(await uni.decimals)
            // Quote
            let quoteParam: IGetExactAmountOutRouteParam = {
                wallet, 
                quoterAddress: uniswap.quoter.address, 
                tokenIn: weth.address, 
                tokenOut: uni.address, 
                exactAmountOut,
                path
            }
            let quote: IExactAmountOutRouteObj = (await getExactAmountOutRoute(quoteParam))[0];

            // Swap
            let now = await wallet.getBlockTimestamp();
            let param = {
                path: path,
                recipient: swapper,
                deadline: now + 1000,
                amountOut: exactAmountOut,
                amountInMaximum: quote.amountIn
            }

            let ethBalanceBeforeTrx = await wallet.balanceOf(swapper);
            let uniBalanceBeforeTrx = await uni.balanceOf(swapper);
            let callData1 = await uniswap.router.exactOutput.txData(
                param
            );
            let callData2 = await uniswap.router.refundETH.txData();
            let receipt = await uniswap.router.multicall([callData1, callData2], Utils.toDecimals(2));
            let ethBalanceAfterTrx = await wallet.balanceOf(swapper);
            let uniBalanceAfterTrx = await uni.balanceOf(swapper);

            // Calculate token give and get
            let ethUsedActual = ethBalanceBeforeTrx.minus(ethBalanceAfterTrx).shiftedBy(await weth.decimals).toFixed();
            let ethUsedEstimated = quote.amountIn.plus(effectiveGasPrice.times(receipt.gasUsed)).toFixed()
            let uniGetActual = uniBalanceAfterTrx.minus(uniBalanceBeforeTrx).shiftedBy(await uni.decimals).toFixed();
            let uniGetEstimated = quote.exactAmountOut.toFixed()

            // Test the calculation
            assert.equal(ethUsedActual, ethUsedEstimated)
            assert.equal(uniGetActual, uniGetEstimated)
        });
        it('quote exact amount in - 1 hop', async function() {
            let effectiveGasPrice = new BigNumber(2000000000);

            // uni -> usdt -> eth;
            //   400 -> 2000 -> 1
            let path = "0x" +
                weth.address.toLowerCase().replace("0x","") +
                Utils.numberToBytes32(Utils.toDecimals("0.01", 6)).substring(58,64) +
                usdt.address.toLowerCase().replace("0x","") + 
                Utils.numberToBytes32(Utils.toDecimals("0.01", 6)).substring(58,64) +
                uni.address.toLowerCase().replace("0x","");

            let exactAmountIn = new BigNumber(1).shiftedBy(await weth.decimals)
            // Quote
            let quoteParam: IGetExactAmountInRouteParam = {
                wallet, 
                quoterAddress: uniswap.quoter.address, 
                tokenIn: weth.address, 
                tokenOut: uni.address, 
                exactAmountIn,
                path
            }
            let quote: IExactAmountInRouteObj = (await getExactAmountInRoute(quoteParam))[0];

            // Swap
            let now = await wallet.getBlockTimestamp();
            let param = {
                path: path,
                recipient: swapper,
                deadline: now + 1000,
                amountIn: exactAmountIn,
                amountOutMinimum: quote.amountOut
            }

            let ethBalanceBeforeTrx = await wallet.balanceOf(swapper);
            let uniBalanceBeforeTrx = await uni.balanceOf(swapper);
            let callData1 = await uniswap.router.exactInput.txData(
                param
            );
            let callData2 = await uniswap.router.refundETH.txData();
            let receipt = await uniswap.router.multicall([callData1, callData2], Utils.toDecimals(2));
            let ethBalanceAfterTrx = await wallet.balanceOf(swapper);
            let uniBalanceAfterTrx = await uni.balanceOf(swapper);

            // Calculate token give and get
            let ethUsedActual = ethBalanceBeforeTrx.minus(ethBalanceAfterTrx).shiftedBy(await weth.decimals).toFixed();
            let ethUsedEstimated = quote.exactAmountIn.plus(effectiveGasPrice.times(receipt.gasUsed)).toFixed()
            let uniGetActual = uniBalanceAfterTrx.minus(uniBalanceBeforeTrx).shiftedBy(await uni.decimals).toFixed();
            let uniGetEstimated = quote.amountOut.toFixed()

            // Test the calculation
            assert.equal(ethUsedActual, ethUsedEstimated)
            assert.equal(uniGetActual, uniGetEstimated)
        });
    });
}); 
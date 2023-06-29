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

    let contracts: IDeployedContracts;

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

        contracts = await deploy(wallet, {weth: weth.address}, (msg: string)=>{
            console.dir(msg)
        });
    });
    it('add liqudity', async function() {
        wallet.defaultAccount = deployer;
        usdt.mint({address: lp, amount: 1000000});

        wallet.defaultAccount = lp;
        usdt.approve({spender: contracts.nftPosMngr.address, amount: 1000000});

        let USD_TO_ADD = 1000000;

        let now = await wallet.getBlockTimestamp();
        let receipt = await contracts.nftPosMngr.mint({
            token0: uni.address,
            token1: usdt.address,
            fee: Utils.toDecimals("0.001", 6), //1=0.000001
            tickLower: Math.round(Math.log(UNI_PRICE_IN_USD * 1.05)/Math.log(1.0001)),
            tickUpper: Math.round(Math.log(UNI_PRICE_IN_USD * 0.95)/Math.log(1.0001)),
            amount0Desired: Utils.toDecimals(USD_TO_ADD / UNI_PRICE_IN_USD),
            amount1Desired: Utils.toDecimals(USD_TO_ADD),
            amount0Min: 0,
            amount1Min: 0,
            recipient: lp,
            deadline: now + 1000
        });
        print(receipt);
    });
});
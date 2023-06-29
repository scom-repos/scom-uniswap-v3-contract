import {Contract as CoreContract} from 'v3-core';
import {Contract as PeripheryContract} from 'v3-periphery';
import {Contract as SwapRouterContract} from 'swap-router-contracts';

export {Contract as CoreContract} from 'v3-core';
export {Contract as PeripheryContract} from 'v3-periphery';
export {Contract as SwapRouterContract} from 'swap-router-contracts';

import {IWallet, BigNumber, Utils, Erc20} from '@ijstech/eth-wallet';
import {Contract} from '@ijstech/eth-contract';


/*
https://docs.uniswap.org/contracts/v3/reference/deployments
UniswapV3Factory	0x1F98431c8aD98523631AE4a59f267346ea31F984
Multicall2	0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696
ProxyAdmin	0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2
TickLens	0xbfd8137f7d1516D3ea5cA83523914859ec47F573
Quoter	0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6
SwapRouter	0xE592427A0AEce92De3Edee1F18E0157C05861564
NFTDescriptor	0x42B24A95702b9986e82d421cC3568932790A48Ec
NonfungibleTokenPositionDescriptor	0x91ae842A5Ffd8d12023116943e72A606179294f3
NonfungiblePositionManager	0xC36442b4a4522E871399CD717aBDD847Ab11FE88
TransparentUpgradeableProxy	0xEe6A57eC80ea46401049E92587E52f5Ec1c24785
V3Migrator	0xA5644E29708357803b5A882D272c41cC0dF92B34
QuoterV2	0x61fFE014bA17989E743c5F6cB21bF9697530B21e
SwapRouter02	0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45
Permit2	0x000000000022d473030f116ddee9f6b43ac78ba3

deployer:
https://etherscan.io/address/0x6c9fc64a53c1b71fb3f9af64d1ae3a4931a5f4e9
*/
export interface IDeployOptions {
    weth: string;
};
export interface IDeployResult {
    factory: string;
    tickLens: string;
    quoter: string;
    router: string;
    nftDesc: string;
    nftPosDesc: string;
    nftPosMngr: string;
    quoterV2: string;
    router02: string;
};
export interface IDeployedContracts {
    factory: CoreContract.UniswapV3Factory;
    tickLens: PeripheryContract.TickLens
    quoter: PeripheryContract.Quoter;
    router: PeripheryContract.SwapRouter;
    nftDesc: PeripheryContract.NFTDescriptor;
    nftPosDesc: PeripheryContract.NonfungibleTokenPositionDescriptor;
    nftPosMngr: PeripheryContract.NonfungiblePositionManager;
    quoterV2: PeripheryContract.QuoterV2;
    router02: SwapRouterContract.SwapRouter02;
}
var progressHandler: any;
export var DefaultDeployOptions: IDeployOptions = {
    weth: ''
};
export async function deploy(wallet: IWallet, options: IDeployOptions, onProgress:(msg:string)=>void): Promise<IDeployedContracts>{
    onProgress('1/9 Deploy UniswapV3Factory contract');
    let factory = new CoreContract.UniswapV3Factory(wallet);
    await factory.deploy();
    onProgress(`factory: ${factory.address}`);

    onProgress('2/9 Deploy TickLens contract');
    let tickLens = new PeripheryContract.TickLens(wallet);
    await tickLens.deploy();
    onProgress(`tickLens: ${tickLens.address}`);

    onProgress('3/9 Deploy Quoter contract');
    let quoter = new PeripheryContract.Quoter(wallet);
    await quoter.deploy({ factory: factory.address, WETH9: options.weth});
    onProgress(`quoter: ${quoter.address}`);

    onProgress('4/9 Deploy SwapRouter contract');
    let router = new PeripheryContract.SwapRouter(wallet);
    await router.deploy({ factory: factory.address, WETH9: options.weth});
    onProgress(`router: ${router.address}`);

    onProgress('5/9 Deploy NFTDescriptor contract');
    let nftDesc = new PeripheryContract.NFTDescriptor(wallet);
    await nftDesc.deploy();
    onProgress(`nftDesc: ${nftDesc.address}`);

    onProgress('6/9 Deploy NonfungibleTokenPositionDescriptor contract');
    let nftPosDesc = new PeripheryContract.NonfungibleTokenPositionDescriptor(wallet);
    let label = await (new Erc20(wallet, options.weth).symbol);
    label = label.substring(0,31);
    label = Utils.stringToBytes32(label) as string;
    
    await nftPosDesc.deploy({ WETH9: options.weth, nativeCurrencyLabelBytes: label }, 
                            { "contracts/libraries/NFTDescriptor.sol": { "NFTDescriptor": nftDesc.address } });
    onProgress(`nftPosDesc: ${nftPosDesc.address}`);

    onProgress('7/9 Deploy NonfungiblePositionManager contract');
    let nftPosMngr = new PeripheryContract.NonfungiblePositionManager(wallet);
    await nftPosMngr.deploy({ factory: factory.address, WETH9: options.weth, tokenDescriptor: nftDesc.address});
    onProgress(`nftPosMngr: ${nftPosMngr.address}`);

    onProgress('8/9 Deploy QuoterV2 contract');
    let quoterV2 = new PeripheryContract.QuoterV2(wallet);
    await quoterV2.deploy({ factory: factory.address, WETH9: options.weth });
    onProgress(`quoter2: ${quoterV2.address}`);

    onProgress('9/9 Deploy SwapRouter02 contract');
    let router02 = new SwapRouterContract.SwapRouter02(wallet);
    await router02.deploy({ factoryV2: Utils.nullAddress, factoryV3: factory.address, positionManager: nftPosMngr.address, WETH9: options.weth});
    onProgress(`router2: ${router02.address}`);

    return {
        factory: factory,
        tickLens: tickLens,
        quoter: quoter,
        router: router,
        nftDesc: nftDesc,
        nftPosDesc: nftPosDesc,
        nftPosMngr: nftPosMngr,
        quoterV2: quoterV2,
        router02: router02
    }
};
function fromDeployResult(wallet: IWallet, result: IDeployResult): IDeployedContracts {
    return {
        factory: new CoreContract.UniswapV3Factory(wallet, result.factory),
        tickLens: new PeripheryContract.TickLens(wallet, result.tickLens),
        quoter: new PeripheryContract.Quoter(wallet, result.quoter),
        router: new PeripheryContract.SwapRouter(wallet, result.router),
        nftDesc: new PeripheryContract.NFTDescriptor(wallet, result.nftDesc),
        nftPosDesc: new PeripheryContract.NonfungibleTokenPositionDescriptor(wallet, result.nftPosDesc),
        nftPosMngr: new PeripheryContract.NonfungiblePositionManager(wallet, result.nftPosMngr),
        quoterV2: new PeripheryContract.QuoterV2(wallet, result.quoterV2),
        router02: new SwapRouterContract.SwapRouter02(wallet, result.router02)
    }
}
export default {
    CoreContract,
    PeripheryContract,
    SwapRouterContract,
    DefaultDeployOptions,
    deploy,
    fromDeployResult
};;
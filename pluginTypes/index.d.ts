/// <amd-module name="@scom/demo-contract" />
declare module "@scom/demo-contract" {
    import { Contract as CoreContract } from 'v3-core';
    import { Contract as PeripheryContract } from 'v3-periphery';
    import { Contract as SwapRouterContract } from 'swap-router-contracts';
    export { Contract as CoreContract } from 'v3-core';
    export { Contract as PeripheryContract } from 'v3-periphery';
    export { Contract as SwapRouterContract } from 'swap-router-contracts';
    import { IWallet, BigNumber } from '@ijstech/eth-wallet';
    export interface IDeployOptions {
        weth: string;
    }
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
    }
    export interface IDeployedContracts {
        factory: CoreContract.UniswapV3Factory;
        tickLens: PeripheryContract.TickLens;
        quoter: PeripheryContract.Quoter;
        router: PeripheryContract.SwapRouter;
        nftDesc: PeripheryContract.NFTDescriptor;
        nftPosDesc: PeripheryContract.NonfungibleTokenPositionDescriptor;
        nftPosMngr: PeripheryContract.NonfungiblePositionManager;
        quoterV2: PeripheryContract.QuoterV2;
        router02: SwapRouterContract.SwapRouter02;
    }
    export var DefaultDeployOptions: IDeployOptions;
    export function deploy(wallet: IWallet, options: IDeployOptions, onProgress: (msg: string) => void): Promise<IDeployedContracts>;
    export function fromDeployResult(wallet: IWallet, result: IDeployResult): IDeployedContracts;
    export function toSqrtX96(n: BigNumber): BigNumber;
    const _default: {
        CoreContract: typeof CoreContract;
        PeripheryContract: typeof PeripheryContract;
        SwapRouterContract: typeof SwapRouterContract;
        DefaultDeployOptions: IDeployOptions;
        deploy: typeof deploy;
        fromDeployResult: typeof fromDeployResult;
        toSqrtX96: typeof toSqrtX96;
    };
    export default _default;
}

/// <amd-module name="@scom/demo-contract" />
declare module "@scom/demo-contract" {
    import { Contracts as CoreContracts } from 'v3-core';
    import { Contracts as PeripheryContracts } from 'v3-periphery';
    import { Contracts as SwapRouterContracts } from 'swap-router-contracts';
    export { Contracts as CoreContracts } from 'v3-core';
    export { Contracts as PeripheryContracts } from 'v3-periphery';
    export { Contracts as SwapRouterContracts } from 'swap-router-contracts';
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
        factory: CoreContracts.UniswapV3Factory;
        tickLens: PeripheryContracts.TickLens;
        quoter: PeripheryContracts.Quoter;
        router: PeripheryContracts.SwapRouter;
        nftDesc: PeripheryContracts.NFTDescriptor;
        nftPosDesc: PeripheryContracts.NonfungibleTokenPositionDescriptor;
        nftPosMngr: PeripheryContracts.NonfungiblePositionManager;
        quoterV2: PeripheryContracts.QuoterV2;
        router02: SwapRouterContracts.SwapRouter02;
    }
    export var DefaultDeployOptions: IDeployOptions;
    export function deploy(wallet: IWallet, options: IDeployOptions, onProgress: (msg: string) => void): Promise<IDeployedContracts>;
    export function fromDeployResult(wallet: IWallet, result: IDeployResult): IDeployedContracts;
    export function toSqrtX96(n: BigNumber): BigNumber;
    interface IGetExactRoutesParam {
        wallet: IWallet;
        quoterAddress: string;
        tokenIn: string;
        tokenOut: string;
        path?: string;
    }
    export interface IGetExactAmountOutRoutesParam extends IGetExactRoutesParam {
        exactAmountOut: BigNumber;
    }
    export interface IGetExactAmountInRoutesParam extends IGetExactRoutesParam {
        exactAmountIn: BigNumber;
    }
    interface IRouteObj {
        tokenIn: string;
        tokenOut: string;
        path: string;
    }
    export interface IExactAmountOutRouteObj extends IRouteObj {
        amountIn: BigNumber;
        exactAmountOut: BigNumber;
    }
    export interface IExactAmountInRouteObj extends IRouteObj {
        amountOut: BigNumber;
        exactAmountIn: BigNumber;
    }
    export const getExactAmountOutRoutes: (param: IGetExactAmountOutRoutesParam) => Promise<IExactAmountOutRouteObj[]>;
    export const getExactAmountInRoutes: (param: IGetExactAmountInRoutesParam) => Promise<IExactAmountInRouteObj[]>;
    export const convertPathFromStringToArr: (path: string) => (string | number)[];
    const _default: {
        CoreContracts: typeof CoreContracts;
        PeripheryContracts: typeof PeripheryContracts;
        SwapRouterContracts: typeof SwapRouterContracts;
        DefaultDeployOptions: IDeployOptions;
        deploy: typeof deploy;
        fromDeployResult: typeof fromDeployResult;
        toSqrtX96: typeof toSqrtX96;
        getExactAmountInRoutes: (param: IGetExactAmountInRoutesParam) => Promise<IExactAmountInRouteObj[]>;
        getExactAmountOutRoutes: (param: IGetExactAmountOutRoutesParam) => Promise<IExactAmountOutRouteObj[]>;
        convertPathFromStringToArr: (path: string) => (string | number)[];
    };
    export default _default;
}

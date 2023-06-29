import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    swapRouter: string;
    factory: string;
    WETH9: string;
}
export interface ISweepTokenParams {
    token: string;
    amountMinimum: number | BigNumber;
    recipient: string;
}
export interface IUniswapV3FlashCallbackParams {
    fee0: number | BigNumber;
    fee1: number | BigNumber;
    data: string;
}
export interface IUnwrapWETH9Params {
    amountMinimum: number | BigNumber;
    recipient: string;
}
export declare class PairFlash extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    WETH9: {
        (options?: TransactionOptions): Promise<string>;
    };
    factory: {
        (options?: TransactionOptions): Promise<string>;
    };
    initFlash: {
        (params: {
            token0: string;
            token1: string;
            fee1: number | BigNumber;
            amount0: number | BigNumber;
            amount1: number | BigNumber;
            fee2: number | BigNumber;
            fee3: number | BigNumber;
        }, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: {
            token0: string;
            token1: string;
            fee1: number | BigNumber;
            amount0: number | BigNumber;
            amount1: number | BigNumber;
            fee2: number | BigNumber;
            fee3: number | BigNumber;
        }, options?: TransactionOptions) => Promise<void>;
    };
    refundETH: {
        (options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: number | BigNumber | TransactionOptions) => Promise<void>;
    };
    swapRouter: {
        (options?: TransactionOptions): Promise<string>;
    };
    sweepToken: {
        (params: ISweepTokenParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISweepTokenParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
    };
    uniswapV3FlashCallback: {
        (params: IUniswapV3FlashCallbackParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUniswapV3FlashCallbackParams, options?: TransactionOptions) => Promise<void>;
    };
    unwrapWETH9: {
        (params: IUnwrapWETH9Params, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnwrapWETH9Params, options?: number | BigNumber | TransactionOptions) => Promise<void>;
    };
    private assign;
}

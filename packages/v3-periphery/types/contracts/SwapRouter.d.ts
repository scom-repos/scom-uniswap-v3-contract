import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    factory: string;
    WETH9: string;
}
export interface ISelfPermitParams {
    token: string;
    value: number | BigNumber;
    deadline: number | BigNumber;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface ISelfPermitAllowedParams {
    token: string;
    nonce: number | BigNumber;
    expiry: number | BigNumber;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface ISelfPermitAllowedIfNecessaryParams {
    token: string;
    nonce: number | BigNumber;
    expiry: number | BigNumber;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface ISelfPermitIfNecessaryParams {
    token: string;
    value: number | BigNumber;
    deadline: number | BigNumber;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface ISweepTokenParams {
    token: string;
    amountMinimum: number | BigNumber;
    recipient: string;
}
export interface ISweepTokenWithFeeParams {
    token: string;
    amountMinimum: number | BigNumber;
    recipient: string;
    feeBips: number | BigNumber;
    feeRecipient: string;
}
export interface IUniswapV3SwapCallbackParams {
    amount0Delta: number | BigNumber;
    amount1Delta: number | BigNumber;
    data: string;
}
export interface IUnwrapWETH9Params {
    amountMinimum: number | BigNumber;
    recipient: string;
}
export interface IUnwrapWETH9WithFeeParams {
    amountMinimum: number | BigNumber;
    recipient: string;
    feeBips: number | BigNumber;
    feeRecipient: string;
}
export declare class SwapRouter extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    WETH9: {
        (options?: TransactionOptions): Promise<string>;
    };
    exactInput: {
        (params: {
            path: string;
            recipient: string;
            deadline: number | BigNumber;
            amountIn: number | BigNumber;
            amountOutMinimum: number | BigNumber;
        }, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: {
            path: string;
            recipient: string;
            deadline: number | BigNumber;
            amountIn: number | BigNumber;
            amountOutMinimum: number | BigNumber;
        }, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
    };
    exactInputSingle: {
        (params: {
            tokenIn: string;
            tokenOut: string;
            fee: number | BigNumber;
            recipient: string;
            deadline: number | BigNumber;
            amountIn: number | BigNumber;
            amountOutMinimum: number | BigNumber;
            sqrtPriceLimitX96: number | BigNumber;
        }, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: {
            tokenIn: string;
            tokenOut: string;
            fee: number | BigNumber;
            recipient: string;
            deadline: number | BigNumber;
            amountIn: number | BigNumber;
            amountOutMinimum: number | BigNumber;
            sqrtPriceLimitX96: number | BigNumber;
        }, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
    };
    exactOutput: {
        (params: {
            path: string;
            recipient: string;
            deadline: number | BigNumber;
            amountOut: number | BigNumber;
            amountInMaximum: number | BigNumber;
        }, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: {
            path: string;
            recipient: string;
            deadline: number | BigNumber;
            amountOut: number | BigNumber;
            amountInMaximum: number | BigNumber;
        }, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
    };
    exactOutputSingle: {
        (params: {
            tokenIn: string;
            tokenOut: string;
            fee: number | BigNumber;
            recipient: string;
            deadline: number | BigNumber;
            amountOut: number | BigNumber;
            amountInMaximum: number | BigNumber;
            sqrtPriceLimitX96: number | BigNumber;
        }, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: {
            tokenIn: string;
            tokenOut: string;
            fee: number | BigNumber;
            recipient: string;
            deadline: number | BigNumber;
            amountOut: number | BigNumber;
            amountInMaximum: number | BigNumber;
            sqrtPriceLimitX96: number | BigNumber;
        }, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
    };
    factory: {
        (options?: TransactionOptions): Promise<string>;
    };
    multicall: {
        (data: string[], options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (data: string[], options?: number | BigNumber | TransactionOptions) => Promise<string[]>;
    };
    refundETH: {
        (options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: number | BigNumber | TransactionOptions) => Promise<void>;
    };
    selfPermit: {
        (params: ISelfPermitParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISelfPermitParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
    };
    selfPermitAllowed: {
        (params: ISelfPermitAllowedParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISelfPermitAllowedParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
    };
    selfPermitAllowedIfNecessary: {
        (params: ISelfPermitAllowedIfNecessaryParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISelfPermitAllowedIfNecessaryParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
    };
    selfPermitIfNecessary: {
        (params: ISelfPermitIfNecessaryParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISelfPermitIfNecessaryParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
    };
    sweepToken: {
        (params: ISweepTokenParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISweepTokenParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
    };
    sweepTokenWithFee: {
        (params: ISweepTokenWithFeeParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISweepTokenWithFeeParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
    };
    uniswapV3SwapCallback: {
        (params: IUniswapV3SwapCallbackParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUniswapV3SwapCallbackParams, options?: TransactionOptions) => Promise<void>;
    };
    unwrapWETH9: {
        (params: IUnwrapWETH9Params, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnwrapWETH9Params, options?: number | BigNumber | TransactionOptions) => Promise<void>;
    };
    unwrapWETH9WithFee: {
        (params: IUnwrapWETH9WithFeeParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnwrapWETH9WithFeeParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
    };
    private assign;
}

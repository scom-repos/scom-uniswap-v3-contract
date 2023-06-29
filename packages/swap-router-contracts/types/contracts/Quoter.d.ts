import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    factory: string;
    WETH9: string;
}
export interface IQuoteExactInputParams {
    path: string;
    amountIn: number | BigNumber;
}
export interface IQuoteExactInputSingleParams {
    tokenIn: string;
    tokenOut: string;
    fee: number | BigNumber;
    amountIn: number | BigNumber;
    sqrtPriceLimitX96: number | BigNumber;
}
export interface IQuoteExactOutputParams {
    path: string;
    amountOut: number | BigNumber;
}
export interface IQuoteExactOutputSingleParams {
    tokenIn: string;
    tokenOut: string;
    fee: number | BigNumber;
    amountOut: number | BigNumber;
    sqrtPriceLimitX96: number | BigNumber;
}
export interface IUniswapV3SwapCallbackParams {
    amount0Delta: number | BigNumber;
    amount1Delta: number | BigNumber;
    path: string;
}
export declare class Quoter extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    WETH9: {
        (options?: TransactionOptions): Promise<string>;
    };
    factory: {
        (options?: TransactionOptions): Promise<string>;
    };
    quoteExactInput: {
        (params: IQuoteExactInputParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IQuoteExactInputParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    quoteExactInputSingle: {
        (params: IQuoteExactInputSingleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IQuoteExactInputSingleParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    quoteExactOutput: {
        (params: IQuoteExactOutputParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IQuoteExactOutputParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    quoteExactOutputSingle: {
        (params: IQuoteExactOutputSingleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IQuoteExactOutputSingleParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    uniswapV3SwapCallback: {
        (params: IUniswapV3SwapCallbackParams, options?: TransactionOptions): Promise<void>;
    };
    private assign;
}

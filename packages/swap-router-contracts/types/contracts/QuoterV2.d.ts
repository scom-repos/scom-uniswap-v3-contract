import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    factory: string;
    WETH9: string;
}
export interface IQuoteExactInputParams {
    path: string;
    amountIn: number | BigNumber;
}
export interface IQuoteExactOutputParams {
    path: string;
    amountOut: number | BigNumber;
}
export interface IUniswapV3SwapCallbackParams {
    amount0Delta: number | BigNumber;
    amount1Delta: number | BigNumber;
    path: string;
}
export declare class QuoterV2 extends _Contract {
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
        call: (params: IQuoteExactInputParams, options?: TransactionOptions) => Promise<{
            amountOut: BigNumber;
            sqrtPriceX96AfterList: BigNumber[];
            initializedTicksCrossedList: BigNumber[];
            gasEstimate: BigNumber;
        }>;
        txData: (params: IQuoteExactInputParams, options?: TransactionOptions) => Promise<string>;
    };
    quoteExactInputSingle: {
        (params: {
            tokenIn: string;
            tokenOut: string;
            amountIn: number | BigNumber;
            fee: number | BigNumber;
            sqrtPriceLimitX96: number | BigNumber;
        }, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: {
            tokenIn: string;
            tokenOut: string;
            amountIn: number | BigNumber;
            fee: number | BigNumber;
            sqrtPriceLimitX96: number | BigNumber;
        }, options?: TransactionOptions) => Promise<{
            amountOut: BigNumber;
            sqrtPriceX96After: BigNumber;
            initializedTicksCrossed: BigNumber;
            gasEstimate: BigNumber;
        }>;
        txData: (params: {
            tokenIn: string;
            tokenOut: string;
            amountIn: number | BigNumber;
            fee: number | BigNumber;
            sqrtPriceLimitX96: number | BigNumber;
        }, options?: TransactionOptions) => Promise<string>;
    };
    quoteExactOutput: {
        (params: IQuoteExactOutputParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IQuoteExactOutputParams, options?: TransactionOptions) => Promise<{
            amountIn: BigNumber;
            sqrtPriceX96AfterList: BigNumber[];
            initializedTicksCrossedList: BigNumber[];
            gasEstimate: BigNumber;
        }>;
        txData: (params: IQuoteExactOutputParams, options?: TransactionOptions) => Promise<string>;
    };
    quoteExactOutputSingle: {
        (params: {
            tokenIn: string;
            tokenOut: string;
            amount: number | BigNumber;
            fee: number | BigNumber;
            sqrtPriceLimitX96: number | BigNumber;
        }, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: {
            tokenIn: string;
            tokenOut: string;
            amount: number | BigNumber;
            fee: number | BigNumber;
            sqrtPriceLimitX96: number | BigNumber;
        }, options?: TransactionOptions) => Promise<{
            amountIn: BigNumber;
            sqrtPriceX96After: BigNumber;
            initializedTicksCrossed: BigNumber;
            gasEstimate: BigNumber;
        }>;
        txData: (params: {
            tokenIn: string;
            tokenOut: string;
            amount: number | BigNumber;
            fee: number | BigNumber;
            sqrtPriceLimitX96: number | BigNumber;
        }, options?: TransactionOptions) => Promise<string>;
    };
    uniswapV3SwapCallback: {
        (params: IUniswapV3SwapCallbackParams, options?: TransactionOptions): Promise<void>;
    };
    private assign;
}

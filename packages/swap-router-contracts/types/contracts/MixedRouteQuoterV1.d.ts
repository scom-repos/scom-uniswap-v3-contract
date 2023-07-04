import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    factory: string;
    factoryV2: string;
    WETH9: string;
}
export interface IQuoteExactInputParams {
    path: string;
    amountIn: number | BigNumber;
}
export interface IUniswapV3SwapCallbackParams {
    amount0Delta: number | BigNumber;
    amount1Delta: number | BigNumber;
    path: string;
}
export declare class MixedRouteQuoterV1 extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    WETH9: {
        (options?: TransactionOptions): Promise<string>;
    };
    factory: {
        (options?: TransactionOptions): Promise<string>;
    };
    factoryV2: {
        (options?: TransactionOptions): Promise<string>;
    };
    quoteExactInput: {
        (params: IQuoteExactInputParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IQuoteExactInputParams, options?: TransactionOptions) => Promise<{
            amountOut: BigNumber;
            v3SqrtPriceX96AfterList: BigNumber[];
            v3InitializedTicksCrossedList: BigNumber[];
            v3SwapGasEstimate: BigNumber;
        }>;
        txData: (params: IQuoteExactInputParams, options?: TransactionOptions) => Promise<string>;
    };
    quoteExactInputSingleV2: {
        (params: {
            tokenIn: string;
            tokenOut: string;
            amountIn: number | BigNumber;
        }, options?: TransactionOptions): Promise<BigNumber>;
    };
    quoteExactInputSingleV3: {
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
    uniswapV3SwapCallback: {
        (params: IUniswapV3SwapCallbackParams, options?: TransactionOptions): Promise<void>;
    };
    private assign;
}

/// <amd-module name="swap-router-contracts/contracts/SwapRouter02.json.ts" />
declare module "swap-router-contracts/contracts/SwapRouter02.json.ts" {
    const _default: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="swap-router-contracts/contracts/SwapRouter02.ts" />
declare module "swap-router-contracts/contracts/SwapRouter02.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        factoryV2: string;
        factoryV3: string;
        positionManager: string;
        WETH9: string;
    }
    export interface ICheckOracleSlippageParams {
        paths: string[];
        amounts: (number | BigNumber)[];
        maximumTickDivergence: number | BigNumber;
        secondsAgo: number | BigNumber;
    }
    export interface ICheckOracleSlippage_1Params {
        path: string;
        maximumTickDivergence: number | BigNumber;
        secondsAgo: number | BigNumber;
    }
    export interface IGetApprovalTypeParams {
        token: string;
        amount: number | BigNumber;
    }
    export interface IMulticallParams {
        previousBlockhash: string;
        data: string[];
    }
    export interface IMulticall_1Params {
        deadline: number | BigNumber;
        data: string[];
    }
    export interface IPullParams {
        token: string;
        value: number | BigNumber;
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
    export interface ISwapExactTokensForTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
    }
    export interface ISwapTokensForExactTokensParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
    }
    export interface ISweepTokenParams {
        token: string;
        amountMinimum: number | BigNumber;
        recipient: string;
    }
    export interface ISweepToken_1Params {
        token: string;
        amountMinimum: number | BigNumber;
    }
    export interface ISweepTokenWithFeeParams {
        token: string;
        amountMinimum: number | BigNumber;
        feeBips: number | BigNumber;
        feeRecipient: string;
    }
    export interface ISweepTokenWithFee_1Params {
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
    export interface IUnwrapWETH9WithFee_1Params {
        amountMinimum: number | BigNumber;
        feeBips: number | BigNumber;
        feeRecipient: string;
    }
    export class SwapRouter02 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        WETH9: {
            (options?: TransactionOptions): Promise<string>;
        };
        approveMax: {
            (token: string, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (token: string, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (token: string, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        approveMaxMinusOne: {
            (token: string, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (token: string, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (token: string, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        approveZeroThenMax: {
            (token: string, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (token: string, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (token: string, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        approveZeroThenMaxMinusOne: {
            (token: string, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (token: string, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (token: string, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        callPositionManager: {
            (data: string, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (data: string, options?: number | BigNumber | TransactionOptions) => Promise<string>;
            txData: (data: string, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        checkOracleSlippage: {
            (params: ICheckOracleSlippageParams, options?: TransactionOptions): Promise<void>;
        };
        checkOracleSlippage_1: {
            (params: ICheckOracleSlippage_1Params, options?: TransactionOptions): Promise<void>;
        };
        exactInput: {
            (params: {
                path: string;
                recipient: string;
                amountIn: number | BigNumber;
                amountOutMinimum: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: {
                path: string;
                recipient: string;
                amountIn: number | BigNumber;
                amountOutMinimum: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
            txData: (params: {
                path: string;
                recipient: string;
                amountIn: number | BigNumber;
                amountOutMinimum: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        exactInputSingle: {
            (params: {
                tokenIn: string;
                tokenOut: string;
                fee: number | BigNumber;
                recipient: string;
                amountIn: number | BigNumber;
                amountOutMinimum: number | BigNumber;
                sqrtPriceLimitX96: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: {
                tokenIn: string;
                tokenOut: string;
                fee: number | BigNumber;
                recipient: string;
                amountIn: number | BigNumber;
                amountOutMinimum: number | BigNumber;
                sqrtPriceLimitX96: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
            txData: (params: {
                tokenIn: string;
                tokenOut: string;
                fee: number | BigNumber;
                recipient: string;
                amountIn: number | BigNumber;
                amountOutMinimum: number | BigNumber;
                sqrtPriceLimitX96: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        exactOutput: {
            (params: {
                path: string;
                recipient: string;
                amountOut: number | BigNumber;
                amountInMaximum: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: {
                path: string;
                recipient: string;
                amountOut: number | BigNumber;
                amountInMaximum: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
            txData: (params: {
                path: string;
                recipient: string;
                amountOut: number | BigNumber;
                amountInMaximum: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        exactOutputSingle: {
            (params: {
                tokenIn: string;
                tokenOut: string;
                fee: number | BigNumber;
                recipient: string;
                amountOut: number | BigNumber;
                amountInMaximum: number | BigNumber;
                sqrtPriceLimitX96: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: {
                tokenIn: string;
                tokenOut: string;
                fee: number | BigNumber;
                recipient: string;
                amountOut: number | BigNumber;
                amountInMaximum: number | BigNumber;
                sqrtPriceLimitX96: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
            txData: (params: {
                tokenIn: string;
                tokenOut: string;
                fee: number | BigNumber;
                recipient: string;
                amountOut: number | BigNumber;
                amountInMaximum: number | BigNumber;
                sqrtPriceLimitX96: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        factoryV2: {
            (options?: TransactionOptions): Promise<string>;
        };
        getApprovalType: {
            (params: IGetApprovalTypeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IGetApprovalTypeParams, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (params: IGetApprovalTypeParams, options?: TransactionOptions) => Promise<string>;
        };
        increaseLiquidity: {
            (params: {
                token0: string;
                token1: string;
                tokenId: number | BigNumber;
                amount0Min: number | BigNumber;
                amount1Min: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: {
                token0: string;
                token1: string;
                tokenId: number | BigNumber;
                amount0Min: number | BigNumber;
                amount1Min: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<string>;
            txData: (params: {
                token0: string;
                token1: string;
                tokenId: number | BigNumber;
                amount0Min: number | BigNumber;
                amount1Min: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        mint: {
            (params: {
                token0: string;
                token1: string;
                fee: number | BigNumber;
                tickLower: number | BigNumber;
                tickUpper: number | BigNumber;
                amount0Min: number | BigNumber;
                amount1Min: number | BigNumber;
                recipient: string;
            }, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: {
                token0: string;
                token1: string;
                fee: number | BigNumber;
                tickLower: number | BigNumber;
                tickUpper: number | BigNumber;
                amount0Min: number | BigNumber;
                amount1Min: number | BigNumber;
                recipient: string;
            }, options?: number | BigNumber | TransactionOptions) => Promise<string>;
            txData: (params: {
                token0: string;
                token1: string;
                fee: number | BigNumber;
                tickLower: number | BigNumber;
                tickUpper: number | BigNumber;
                amount0Min: number | BigNumber;
                amount1Min: number | BigNumber;
                recipient: string;
            }, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        multicall: {
            (params: IMulticallParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IMulticallParams, options?: number | BigNumber | TransactionOptions) => Promise<string[]>;
            txData: (params: IMulticallParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        multicall_1: {
            (params: IMulticall_1Params, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IMulticall_1Params, options?: number | BigNumber | TransactionOptions) => Promise<string[]>;
            txData: (params: IMulticall_1Params, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        multicall_2: {
            (data: string[], options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (data: string[], options?: number | BigNumber | TransactionOptions) => Promise<string[]>;
            txData: (data: string[], options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        positionManager: {
            (options?: TransactionOptions): Promise<string>;
        };
        pull: {
            (params: IPullParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IPullParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: IPullParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        refundETH: {
            (options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        selfPermit: {
            (params: ISelfPermitParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISelfPermitParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: ISelfPermitParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        selfPermitAllowed: {
            (params: ISelfPermitAllowedParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISelfPermitAllowedParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: ISelfPermitAllowedParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        selfPermitAllowedIfNecessary: {
            (params: ISelfPermitAllowedIfNecessaryParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISelfPermitAllowedIfNecessaryParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: ISelfPermitAllowedIfNecessaryParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        selfPermitIfNecessary: {
            (params: ISelfPermitIfNecessaryParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISelfPermitIfNecessaryParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: ISelfPermitIfNecessaryParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        swapExactTokensForTokens: {
            (params: ISwapExactTokensForTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
            txData: (params: ISwapExactTokensForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        swapTokensForExactTokens: {
            (params: ISwapTokensForExactTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
            txData: (params: ISwapTokensForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        sweepToken: {
            (params: ISweepTokenParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISweepTokenParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: ISweepTokenParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        sweepToken_1: {
            (params: ISweepToken_1Params, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISweepToken_1Params, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: ISweepToken_1Params, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        sweepTokenWithFee: {
            (params: ISweepTokenWithFeeParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISweepTokenWithFeeParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: ISweepTokenWithFeeParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        sweepTokenWithFee_1: {
            (params: ISweepTokenWithFee_1Params, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISweepTokenWithFee_1Params, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: ISweepTokenWithFee_1Params, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        uniswapV3SwapCallback: {
            (params: IUniswapV3SwapCallbackParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUniswapV3SwapCallbackParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IUniswapV3SwapCallbackParams, options?: TransactionOptions) => Promise<string>;
        };
        unwrapWETH9: {
            (params: IUnwrapWETH9Params, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUnwrapWETH9Params, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: IUnwrapWETH9Params, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        unwrapWETH9_1: {
            (amountMinimum: number | BigNumber, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (amountMinimum: number | BigNumber, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (amountMinimum: number | BigNumber, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        unwrapWETH9WithFee: {
            (params: IUnwrapWETH9WithFeeParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUnwrapWETH9WithFeeParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: IUnwrapWETH9WithFeeParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        unwrapWETH9WithFee_1: {
            (params: IUnwrapWETH9WithFee_1Params, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUnwrapWETH9WithFee_1Params, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: IUnwrapWETH9WithFee_1Params, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        wrapETH: {
            (value: number | BigNumber, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (value: number | BigNumber, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (value: number | BigNumber, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="swap-router-contracts/contracts/MixedRouteQuoterV1.json.ts" />
declare module "swap-router-contracts/contracts/MixedRouteQuoterV1.json.ts" {
    const _default_1: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="swap-router-contracts/contracts/MixedRouteQuoterV1.ts" />
declare module "swap-router-contracts/contracts/MixedRouteQuoterV1.ts" {
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
    export class MixedRouteQuoterV1 extends _Contract {
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
}
/// <amd-module name="swap-router-contracts/contracts/Quoter.json.ts" />
declare module "swap-router-contracts/contracts/Quoter.json.ts" {
    const _default_2: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_2;
}
/// <amd-module name="swap-router-contracts/contracts/Quoter.ts" />
declare module "swap-router-contracts/contracts/Quoter.ts" {
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
    export class Quoter extends _Contract {
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
            txData: (params: IQuoteExactInputParams, options?: TransactionOptions) => Promise<string>;
        };
        quoteExactInputSingle: {
            (params: IQuoteExactInputSingleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IQuoteExactInputSingleParams, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (params: IQuoteExactInputSingleParams, options?: TransactionOptions) => Promise<string>;
        };
        quoteExactOutput: {
            (params: IQuoteExactOutputParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IQuoteExactOutputParams, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (params: IQuoteExactOutputParams, options?: TransactionOptions) => Promise<string>;
        };
        quoteExactOutputSingle: {
            (params: IQuoteExactOutputSingleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IQuoteExactOutputSingleParams, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (params: IQuoteExactOutputSingleParams, options?: TransactionOptions) => Promise<string>;
        };
        uniswapV3SwapCallback: {
            (params: IUniswapV3SwapCallbackParams, options?: TransactionOptions): Promise<void>;
        };
        private assign;
    }
}
/// <amd-module name="swap-router-contracts/contracts/QuoterV2.json.ts" />
declare module "swap-router-contracts/contracts/QuoterV2.json.ts" {
    const _default_3: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_3;
}
/// <amd-module name="swap-router-contracts/contracts/QuoterV2.ts" />
declare module "swap-router-contracts/contracts/QuoterV2.ts" {
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
    export class QuoterV2 extends _Contract {
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
}
/// <amd-module name="swap-router-contracts/contracts/TokenValidator.json.ts" />
declare module "swap-router-contracts/contracts/TokenValidator.json.ts" {
    const _default_4: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_4;
}
/// <amd-module name="swap-router-contracts/contracts/TokenValidator.ts" />
declare module "swap-router-contracts/contracts/TokenValidator.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        factoryV2: string;
        positionManager: string;
    }
    export interface IBatchValidateParams {
        tokens: string[];
        baseTokens: string[];
        amountToBorrow: number | BigNumber;
    }
    export interface IUniswapV2CallParams {
        param1: string;
        amount0: number | BigNumber;
        param3: number | BigNumber;
        data: string;
    }
    export interface IValidateParams {
        token: string;
        baseTokens: string[];
        amountToBorrow: number | BigNumber;
    }
    export class TokenValidator extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        batchValidate: {
            (params: IBatchValidateParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IBatchValidateParams, options?: TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: IBatchValidateParams, options?: TransactionOptions) => Promise<string>;
        };
        factoryV2: {
            (options?: TransactionOptions): Promise<string>;
        };
        positionManager: {
            (options?: TransactionOptions): Promise<string>;
        };
        uniswapV2Call: {
            (params: IUniswapV2CallParams, options?: TransactionOptions): Promise<void>;
        };
        validate: {
            (params: IValidateParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IValidateParams, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (params: IValidateParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="swap-router-contracts/contracts/index.ts" />
declare module "swap-router-contracts/contracts/index.ts" {
    export { SwapRouter02 } from "swap-router-contracts/contracts/SwapRouter02.ts";
    export { MixedRouteQuoterV1 } from "swap-router-contracts/contracts/MixedRouteQuoterV1.ts";
    export { Quoter } from "swap-router-contracts/contracts/Quoter.ts";
    export { QuoterV2 } from "swap-router-contracts/contracts/QuoterV2.ts";
    export { TokenValidator } from "swap-router-contracts/contracts/TokenValidator.ts";
}
/// <amd-module name="swap-router-contracts" />
declare module "swap-router-contracts" {
    import * as Contracts from "swap-router-contracts/contracts/index.ts";
    export { Contracts };
}

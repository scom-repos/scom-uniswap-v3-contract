/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/NonfungiblePositionManager.json.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/NonfungiblePositionManager.json.ts" {
    const _default: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
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
            anonymous?: undefined;
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
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/NonfungiblePositionManager.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/NonfungiblePositionManager.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        factory: string;
        WETH9: string;
        tokenDescriptor: string;
    }
    export interface IApproveParams {
        to: string;
        tokenId: number | BigNumber;
    }
    export interface ICreateAndInitializePoolIfNecessaryParams {
        token0: string;
        token1: string;
        fee: number | BigNumber;
        sqrtPriceX96: number | BigNumber;
    }
    export interface IIsApprovedForAllParams {
        owner: string;
        operator: string;
    }
    export interface IPermitParams {
        spender: string;
        tokenId: number | BigNumber;
        deadline: number | BigNumber;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface ISafeTransferFromParams {
        from: string;
        to: string;
        tokenId: number | BigNumber;
    }
    export interface ISafeTransferFrom_1Params {
        from: string;
        to: string;
        tokenId: number | BigNumber;
        data: string;
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
    export interface ISetApprovalForAllParams {
        operator: string;
        approved: boolean;
    }
    export interface ISweepTokenParams {
        token: string;
        amountMinimum: number | BigNumber;
        recipient: string;
    }
    export interface ITokenOfOwnerByIndexParams {
        owner: string;
        index: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        tokenId: number | BigNumber;
    }
    export interface IUniswapV3MintCallbackParams {
        amount0Owed: number | BigNumber;
        amount1Owed: number | BigNumber;
        data: string;
    }
    export interface IUnwrapWETH9Params {
        amountMinimum: number | BigNumber;
        recipient: string;
    }
    export class NonfungiblePositionManager extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): NonfungiblePositionManager.ApprovalEvent[];
        decodeApprovalEvent(event: Event): NonfungiblePositionManager.ApprovalEvent;
        parseApprovalForAllEvent(receipt: TransactionReceipt): NonfungiblePositionManager.ApprovalForAllEvent[];
        decodeApprovalForAllEvent(event: Event): NonfungiblePositionManager.ApprovalForAllEvent;
        parseCollectEvent(receipt: TransactionReceipt): NonfungiblePositionManager.CollectEvent[];
        decodeCollectEvent(event: Event): NonfungiblePositionManager.CollectEvent;
        parseDecreaseLiquidityEvent(receipt: TransactionReceipt): NonfungiblePositionManager.DecreaseLiquidityEvent[];
        decodeDecreaseLiquidityEvent(event: Event): NonfungiblePositionManager.DecreaseLiquidityEvent;
        parseIncreaseLiquidityEvent(receipt: TransactionReceipt): NonfungiblePositionManager.IncreaseLiquidityEvent[];
        decodeIncreaseLiquidityEvent(event: Event): NonfungiblePositionManager.IncreaseLiquidityEvent;
        parseTransferEvent(receipt: TransactionReceipt): NonfungiblePositionManager.TransferEvent[];
        decodeTransferEvent(event: Event): NonfungiblePositionManager.TransferEvent;
        DOMAIN_SEPARATOR: {
            (options?: TransactionOptions): Promise<string>;
        };
        PERMIT_TYPEHASH: {
            (options?: TransactionOptions): Promise<string>;
        };
        WETH9: {
            (options?: TransactionOptions): Promise<string>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IApproveParams, options?: TransactionOptions) => Promise<string>;
        };
        balanceOf: {
            (owner: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        baseURI: {
            (options?: TransactionOptions): Promise<string>;
        };
        burn: {
            (tokenId: number | BigNumber, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (tokenId: number | BigNumber, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (tokenId: number | BigNumber, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        collect: {
            (params: {
                tokenId: number | BigNumber;
                recipient: string;
                amount0Max: number | BigNumber;
                amount1Max: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: {
                tokenId: number | BigNumber;
                recipient: string;
                amount0Max: number | BigNumber;
                amount1Max: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<{
                amount0: BigNumber;
                amount1: BigNumber;
            }>;
            txData: (params: {
                tokenId: number | BigNumber;
                recipient: string;
                amount0Max: number | BigNumber;
                amount1Max: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        createAndInitializePoolIfNecessary: {
            (params: ICreateAndInitializePoolIfNecessaryParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ICreateAndInitializePoolIfNecessaryParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
            txData: (params: ICreateAndInitializePoolIfNecessaryParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        decreaseLiquidity: {
            (params: {
                tokenId: number | BigNumber;
                liquidity: number | BigNumber;
                amount0Min: number | BigNumber;
                amount1Min: number | BigNumber;
                deadline: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: {
                tokenId: number | BigNumber;
                liquidity: number | BigNumber;
                amount0Min: number | BigNumber;
                amount1Min: number | BigNumber;
                deadline: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<{
                amount0: BigNumber;
                amount1: BigNumber;
            }>;
            txData: (params: {
                tokenId: number | BigNumber;
                liquidity: number | BigNumber;
                amount0Min: number | BigNumber;
                amount1Min: number | BigNumber;
                deadline: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        getApproved: {
            (tokenId: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        increaseLiquidity: {
            (params: {
                tokenId: number | BigNumber;
                amount0Desired: number | BigNumber;
                amount1Desired: number | BigNumber;
                amount0Min: number | BigNumber;
                amount1Min: number | BigNumber;
                deadline: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: {
                tokenId: number | BigNumber;
                amount0Desired: number | BigNumber;
                amount1Desired: number | BigNumber;
                amount0Min: number | BigNumber;
                amount1Min: number | BigNumber;
                deadline: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<{
                liquidity: BigNumber;
                amount0: BigNumber;
                amount1: BigNumber;
            }>;
            txData: (params: {
                tokenId: number | BigNumber;
                amount0Desired: number | BigNumber;
                amount1Desired: number | BigNumber;
                amount0Min: number | BigNumber;
                amount1Min: number | BigNumber;
                deadline: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        isApprovedForAll: {
            (params: IIsApprovedForAllParams, options?: TransactionOptions): Promise<boolean>;
        };
        mint: {
            (params: {
                token0: string;
                token1: string;
                fee: number | BigNumber;
                tickLower: number | BigNumber;
                tickUpper: number | BigNumber;
                amount0Desired: number | BigNumber;
                amount1Desired: number | BigNumber;
                amount0Min: number | BigNumber;
                amount1Min: number | BigNumber;
                recipient: string;
                deadline: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: {
                token0: string;
                token1: string;
                fee: number | BigNumber;
                tickLower: number | BigNumber;
                tickUpper: number | BigNumber;
                amount0Desired: number | BigNumber;
                amount1Desired: number | BigNumber;
                amount0Min: number | BigNumber;
                amount1Min: number | BigNumber;
                recipient: string;
                deadline: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<{
                tokenId: BigNumber;
                liquidity: BigNumber;
                amount0: BigNumber;
                amount1: BigNumber;
            }>;
            txData: (params: {
                token0: string;
                token1: string;
                fee: number | BigNumber;
                tickLower: number | BigNumber;
                tickUpper: number | BigNumber;
                amount0Desired: number | BigNumber;
                amount1Desired: number | BigNumber;
                amount0Min: number | BigNumber;
                amount1Min: number | BigNumber;
                recipient: string;
                deadline: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        multicall: {
            (data: string[], options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (data: string[], options?: number | BigNumber | TransactionOptions) => Promise<string[]>;
            txData: (data: string[], options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        ownerOf: {
            (tokenId: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        permit: {
            (params: IPermitParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IPermitParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: IPermitParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        positions: {
            (tokenId: number | BigNumber, options?: TransactionOptions): Promise<{
                nonce: BigNumber;
                operator: string;
                token0: string;
                token1: string;
                fee: BigNumber;
                tickLower: BigNumber;
                tickUpper: BigNumber;
                liquidity: BigNumber;
                feeGrowthInside0LastX128: BigNumber;
                feeGrowthInside1LastX128: BigNumber;
                tokensOwed0: BigNumber;
                tokensOwed1: BigNumber;
            }>;
        };
        refundETH: {
            (options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        safeTransferFrom: {
            (params: ISafeTransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISafeTransferFromParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISafeTransferFromParams, options?: TransactionOptions) => Promise<string>;
        };
        safeTransferFrom_1: {
            (params: ISafeTransferFrom_1Params, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISafeTransferFrom_1Params, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISafeTransferFrom_1Params, options?: TransactionOptions) => Promise<string>;
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
        setApprovalForAll: {
            (params: ISetApprovalForAllParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetApprovalForAllParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISetApprovalForAllParams, options?: TransactionOptions) => Promise<string>;
        };
        supportsInterface: {
            (interfaceId: string, options?: TransactionOptions): Promise<boolean>;
        };
        sweepToken: {
            (params: ISweepTokenParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISweepTokenParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: ISweepTokenParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        tokenByIndex: {
            (index: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        tokenOfOwnerByIndex: {
            (params: ITokenOfOwnerByIndexParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        tokenURI: {
            (tokenId: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ITransferFromParams, options?: TransactionOptions) => Promise<string>;
        };
        uniswapV3MintCallback: {
            (params: IUniswapV3MintCallbackParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUniswapV3MintCallbackParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IUniswapV3MintCallbackParams, options?: TransactionOptions) => Promise<string>;
        };
        unwrapWETH9: {
            (params: IUnwrapWETH9Params, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUnwrapWETH9Params, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: IUnwrapWETH9Params, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        private assign;
    }
    export module NonfungiblePositionManager {
        interface ApprovalEvent {
            owner: string;
            approved: string;
            tokenId: BigNumber;
            _event: Event;
        }
        interface ApprovalForAllEvent {
            owner: string;
            operator: string;
            approved: boolean;
            _event: Event;
        }
        interface CollectEvent {
            tokenId: BigNumber;
            recipient: string;
            amount0: BigNumber;
            amount1: BigNumber;
            _event: Event;
        }
        interface DecreaseLiquidityEvent {
            tokenId: BigNumber;
            liquidity: BigNumber;
            amount0: BigNumber;
            amount1: BigNumber;
            _event: Event;
        }
        interface IncreaseLiquidityEvent {
            tokenId: BigNumber;
            liquidity: BigNumber;
            amount0: BigNumber;
            amount1: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            tokenId: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/NonfungibleTokenPositionDescriptor.json.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/NonfungibleTokenPositionDescriptor.json.ts" {
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
        })[];
        bytecode: string;
        linkReferences: {
            "contracts/libraries/NFTDescriptor.sol": {
                NFTDescriptor: {
                    length: number;
                    start: number;
                }[];
            };
        };
    };
    export default _default_1;
}
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/NonfungibleTokenPositionDescriptor.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/NonfungibleTokenPositionDescriptor.ts" {
    import { IWallet, Contract as _Contract, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        WETH9: string;
        nativeCurrencyLabelBytes: string;
    }
    export interface IFlipRatioParams {
        token0: string;
        token1: string;
        chainId: number | BigNumber;
    }
    export interface ITokenRatioPriorityParams {
        token: string;
        chainId: number | BigNumber;
    }
    export interface ITokenURIParams {
        positionManager: string;
        tokenId: number | BigNumber;
    }
    export type ILibraries = {
        "contracts/libraries/NFTDescriptor.sol": {
            "NFTDescriptor": string;
        };
    };
    export class NonfungibleTokenPositionDescriptor extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, libraries: ILibraries, options?: TransactionOptions): Promise<string>;
        WETH9: {
            (options?: TransactionOptions): Promise<string>;
        };
        flipRatio: {
            (params: IFlipRatioParams, options?: TransactionOptions): Promise<boolean>;
        };
        nativeCurrencyLabel: {
            (options?: TransactionOptions): Promise<string>;
        };
        nativeCurrencyLabelBytes: {
            (options?: TransactionOptions): Promise<string>;
        };
        tokenRatioPriority: {
            (params: ITokenRatioPriorityParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        tokenURI: {
            (params: ITokenURIParams, options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/SwapRouter.json.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/SwapRouter.json.ts" {
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
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_2;
}
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/SwapRouter.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/SwapRouter.ts" {
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
    export class SwapRouter extends _Contract {
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
            txData: (params: {
                path: string;
                recipient: string;
                deadline: number | BigNumber;
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
            txData: (params: {
                tokenIn: string;
                tokenOut: string;
                fee: number | BigNumber;
                recipient: string;
                deadline: number | BigNumber;
                amountIn: number | BigNumber;
                amountOutMinimum: number | BigNumber;
                sqrtPriceLimitX96: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<string>;
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
            txData: (params: {
                path: string;
                recipient: string;
                deadline: number | BigNumber;
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
            txData: (params: {
                tokenIn: string;
                tokenOut: string;
                fee: number | BigNumber;
                recipient: string;
                deadline: number | BigNumber;
                amountOut: number | BigNumber;
                amountInMaximum: number | BigNumber;
                sqrtPriceLimitX96: number | BigNumber;
            }, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        multicall: {
            (data: string[], options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (data: string[], options?: number | BigNumber | TransactionOptions) => Promise<string[]>;
            txData: (data: string[], options?: number | BigNumber | TransactionOptions) => Promise<string>;
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
        sweepToken: {
            (params: ISweepTokenParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISweepTokenParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: ISweepTokenParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        sweepTokenWithFee: {
            (params: ISweepTokenWithFeeParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISweepTokenWithFeeParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: ISweepTokenWithFeeParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
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
        unwrapWETH9WithFee: {
            (params: IUnwrapWETH9WithFeeParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUnwrapWETH9WithFeeParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: IUnwrapWETH9WithFeeParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/V3Migrator.json.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/V3Migrator.json.ts" {
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
            outputs: any[];
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
    export default _default_3;
}
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/V3Migrator.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/V3Migrator.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        factory: string;
        WETH9: string;
        nonfungiblePositionManager: string;
    }
    export interface ICreateAndInitializePoolIfNecessaryParams {
        token0: string;
        token1: string;
        fee: number | BigNumber;
        sqrtPriceX96: number | BigNumber;
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
    export class V3Migrator extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        WETH9: {
            (options?: TransactionOptions): Promise<string>;
        };
        createAndInitializePoolIfNecessary: {
            (params: ICreateAndInitializePoolIfNecessaryParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ICreateAndInitializePoolIfNecessaryParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
            txData: (params: ICreateAndInitializePoolIfNecessaryParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        migrate: {
            (params: {
                pair: string;
                liquidityToMigrate: number | BigNumber;
                percentageToMigrate: number | BigNumber;
                token0: string;
                token1: string;
                fee: number | BigNumber;
                tickLower: number | BigNumber;
                tickUpper: number | BigNumber;
                amount0Min: number | BigNumber;
                amount1Min: number | BigNumber;
                recipient: string;
                deadline: number | BigNumber;
                refundAsETH: boolean;
            }, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: {
                pair: string;
                liquidityToMigrate: number | BigNumber;
                percentageToMigrate: number | BigNumber;
                token0: string;
                token1: string;
                fee: number | BigNumber;
                tickLower: number | BigNumber;
                tickUpper: number | BigNumber;
                amount0Min: number | BigNumber;
                amount1Min: number | BigNumber;
                recipient: string;
                deadline: number | BigNumber;
                refundAsETH: boolean;
            }, options?: TransactionOptions) => Promise<void>;
            txData: (params: {
                pair: string;
                liquidityToMigrate: number | BigNumber;
                percentageToMigrate: number | BigNumber;
                token0: string;
                token1: string;
                fee: number | BigNumber;
                tickLower: number | BigNumber;
                tickUpper: number | BigNumber;
                amount0Min: number | BigNumber;
                amount1Min: number | BigNumber;
                recipient: string;
                deadline: number | BigNumber;
                refundAsETH: boolean;
            }, options?: TransactionOptions) => Promise<string>;
        };
        multicall: {
            (data: string[], options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (data: string[], options?: number | BigNumber | TransactionOptions) => Promise<string[]>;
            txData: (data: string[], options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        nonfungiblePositionManager: {
            (options?: TransactionOptions): Promise<string>;
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
        private assign;
    }
}
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/PairFlash.json.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/PairFlash.json.ts" {
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
            inputs: any[];
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
            outputs: any[];
            stateMutability: string;
            type: string;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
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
    export default _default_4;
}
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/PairFlash.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/PairFlash.ts" {
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
    export class PairFlash extends _Contract {
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
            txData: (params: {
                token0: string;
                token1: string;
                fee1: number | BigNumber;
                amount0: number | BigNumber;
                amount1: number | BigNumber;
                fee2: number | BigNumber;
                fee3: number | BigNumber;
            }, options?: TransactionOptions) => Promise<string>;
        };
        refundETH: {
            (options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        swapRouter: {
            (options?: TransactionOptions): Promise<string>;
        };
        sweepToken: {
            (params: ISweepTokenParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISweepTokenParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: ISweepTokenParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        uniswapV3FlashCallback: {
            (params: IUniswapV3FlashCallbackParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUniswapV3FlashCallbackParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IUniswapV3FlashCallbackParams, options?: TransactionOptions) => Promise<string>;
        };
        unwrapWETH9: {
            (params: IUnwrapWETH9Params, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUnwrapWETH9Params, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: IUnwrapWETH9Params, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/Quoter.json.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/Quoter.json.ts" {
    const _default_5: {
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
    export default _default_5;
}
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/Quoter.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/Quoter.ts" {
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
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/QuoterV2.json.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/QuoterV2.json.ts" {
    const _default_6: {
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
    export default _default_6;
}
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/QuoterV2.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/QuoterV2.ts" {
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
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/TickLens.json.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/TickLens.json.ts" {
    const _default_7: {
        abi: {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        }[];
        bytecode: string;
    };
    export default _default_7;
}
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/TickLens.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/TickLens.ts" {
    import { IWallet, Contract as _Contract, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IGetPopulatedTicksInWordParams {
        pool: string;
        tickBitmapIndex: number | BigNumber;
    }
    export class TickLens extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        getPopulatedTicksInWord: {
            (params: IGetPopulatedTicksInWordParams, options?: TransactionOptions): Promise<{
                tick: BigNumber;
                liquidityNet: BigNumber;
                liquidityGross: BigNumber;
            }[]>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/UniswapInterfaceMulticall.json.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/UniswapInterfaceMulticall.json.ts" {
    const _default_8: {
        abi: ({
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
            outputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_8;
}
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/UniswapInterfaceMulticall.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/UniswapInterfaceMulticall.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export class UniswapInterfaceMulticall extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        getCurrentBlockTimestamp: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        getEthBalance: {
            (addr: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        multicall: {
            (calls: {
                target: string;
                gasLimit: number | BigNumber;
                callData: string;
            }[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (calls: {
                target: string;
                gasLimit: number | BigNumber;
                callData: string;
            }[], options?: TransactionOptions) => Promise<{
                blockNumber: BigNumber;
                returnData: {
                    success: boolean;
                    gasUsed: BigNumber;
                    returnData: string;
                }[];
            }>;
            txData: (calls: {
                target: string;
                gasLimit: number | BigNumber;
                callData: string;
            }[], options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/NFTDescriptor.json.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/NFTDescriptor.json.ts" {
    const _default_9: {
        abi: {
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
        }[];
        bytecode: string;
    };
    export default _default_9;
}
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/NFTDescriptor.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/NFTDescriptor.ts" {
    import { IWallet, Contract as _Contract, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export class NFTDescriptor extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        constructTokenURI: {
            (params: {
                tokenId: number | BigNumber;
                quoteTokenAddress: string;
                baseTokenAddress: string;
                quoteTokenSymbol: string;
                baseTokenSymbol: string;
                quoteTokenDecimals: number | BigNumber;
                baseTokenDecimals: number | BigNumber;
                flipRatio: boolean;
                tickLower: number | BigNumber;
                tickUpper: number | BigNumber;
                tickCurrent: number | BigNumber;
                tickSpacing: number | BigNumber;
                fee: number | BigNumber;
                poolAddress: string;
            }, options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/scom-uniswap-v3-periphery/contracts/index.ts" />
declare module "@scom/scom-uniswap-v3-periphery/contracts/index.ts" {
    export { NonfungiblePositionManager } from "@scom/scom-uniswap-v3-periphery/contracts/NonfungiblePositionManager.ts";
    export { NonfungibleTokenPositionDescriptor } from "@scom/scom-uniswap-v3-periphery/contracts/NonfungibleTokenPositionDescriptor.ts";
    export { SwapRouter } from "@scom/scom-uniswap-v3-periphery/contracts/SwapRouter.ts";
    export { V3Migrator } from "@scom/scom-uniswap-v3-periphery/contracts/V3Migrator.ts";
    export { PairFlash } from "@scom/scom-uniswap-v3-periphery/contracts/PairFlash.ts";
    export { Quoter } from "@scom/scom-uniswap-v3-periphery/contracts/Quoter.ts";
    export { QuoterV2 } from "@scom/scom-uniswap-v3-periphery/contracts/QuoterV2.ts";
    export { TickLens } from "@scom/scom-uniswap-v3-periphery/contracts/TickLens.ts";
    export { UniswapInterfaceMulticall } from "@scom/scom-uniswap-v3-periphery/contracts/UniswapInterfaceMulticall.ts";
    export { NFTDescriptor } from "@scom/scom-uniswap-v3-periphery/contracts/NFTDescriptor.ts";
}
/// <amd-module name="@scom/scom-uniswap-v3-periphery" />
declare module "@scom/scom-uniswap-v3-periphery" {
    import * as Contracts from "@scom/scom-uniswap-v3-periphery/contracts/index.ts";
    export { Contracts };
}

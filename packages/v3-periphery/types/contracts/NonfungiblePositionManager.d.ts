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
export declare class NonfungiblePositionManager extends _Contract {
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
    };
    createAndInitializePoolIfNecessary: {
        (params: ICreateAndInitializePoolIfNecessaryParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICreateAndInitializePoolIfNecessaryParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
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
    };
    multicall: {
        (data: string[], options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (data: string[], options?: number | BigNumber | TransactionOptions) => Promise<string[]>;
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
    };
    safeTransferFrom: {
        (params: ISafeTransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISafeTransferFromParams, options?: TransactionOptions) => Promise<void>;
    };
    safeTransferFrom_1: {
        (params: ISafeTransferFrom_1Params, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISafeTransferFrom_1Params, options?: TransactionOptions) => Promise<void>;
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
    setApprovalForAll: {
        (params: ISetApprovalForAllParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetApprovalForAllParams, options?: TransactionOptions) => Promise<void>;
    };
    supportsInterface: {
        (interfaceId: string, options?: TransactionOptions): Promise<boolean>;
    };
    sweepToken: {
        (params: ISweepTokenParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISweepTokenParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
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
    };
    uniswapV3MintCallback: {
        (params: IUniswapV3MintCallbackParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUniswapV3MintCallbackParams, options?: TransactionOptions) => Promise<void>;
    };
    unwrapWETH9: {
        (params: IUnwrapWETH9Params, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnwrapWETH9Params, options?: number | BigNumber | TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module NonfungiblePositionManager {
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

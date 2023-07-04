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
export declare class V3Migrator extends _Contract {
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

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
export declare class TokenValidator extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    batchValidate: {
        (params: IBatchValidateParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IBatchValidateParams, options?: TransactionOptions) => Promise<BigNumber[]>;
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
    };
    private assign;
}

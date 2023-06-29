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
export declare class NonfungibleTokenPositionDescriptor extends _Contract {
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

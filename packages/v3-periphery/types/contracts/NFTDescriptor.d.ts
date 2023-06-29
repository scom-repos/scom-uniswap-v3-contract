import { IWallet, Contract as _Contract, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export declare class NFTDescriptor extends _Contract {
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

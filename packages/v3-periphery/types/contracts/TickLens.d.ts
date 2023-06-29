import { IWallet, Contract as _Contract, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export interface IGetPopulatedTicksInWordParams {
    pool: string;
    tickBitmapIndex: number | BigNumber;
}
export declare class TickLens extends _Contract {
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

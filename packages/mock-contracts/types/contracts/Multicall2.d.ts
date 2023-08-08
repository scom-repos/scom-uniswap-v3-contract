import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export interface ITryAggregateParams {
    requireSuccess: boolean;
    calls: {
        target: string;
        callData: string;
    }[];
}
export interface ITryBlockAndAggregateParams {
    requireSuccess: boolean;
    calls: {
        target: string;
        callData: string;
    }[];
}
export declare class Multicall2 extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(options?: TransactionOptions): Promise<string>;
    aggregate: {
        (calls: {
            target: string;
            callData: string;
        }[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (calls: {
            target: string;
            callData: string;
        }[], options?: TransactionOptions) => Promise<{
            blockNumber: BigNumber;
            returnData: string[];
        }>;
    };
    blockAndAggregate: {
        (calls: {
            target: string;
            callData: string;
        }[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (calls: {
            target: string;
            callData: string;
        }[], options?: TransactionOptions) => Promise<{
            blockNumber: BigNumber;
            blockHash: string;
            returnData: {
                success: boolean;
                returnData: string;
            }[];
        }>;
    };
    getBlockHash: {
        (blockNumber: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    getBlockNumber: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    getCurrentBlockCoinbase: {
        (options?: TransactionOptions): Promise<string>;
    };
    getCurrentBlockDifficulty: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    getCurrentBlockGasLimit: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    getCurrentBlockTimestamp: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    getEthBalance: {
        (addr: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    getLastBlockHash: {
        (options?: TransactionOptions): Promise<string>;
    };
    tryAggregate: {
        (params: ITryAggregateParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITryAggregateParams, options?: TransactionOptions) => Promise<{
            success: boolean;
            returnData: string;
        }[]>;
    };
    tryBlockAndAggregate: {
        (params: ITryBlockAndAggregateParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITryBlockAndAggregateParams, options?: TransactionOptions) => Promise<{
            blockNumber: BigNumber;
            blockHash: string;
            returnData: {
                success: boolean;
                returnData: string;
            }[];
        }>;
    };
    private assign;
}

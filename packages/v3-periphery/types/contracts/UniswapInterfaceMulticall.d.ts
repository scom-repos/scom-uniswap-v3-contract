import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export declare class UniswapInterfaceMulticall extends _Contract {
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

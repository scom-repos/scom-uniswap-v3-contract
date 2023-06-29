import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface ICreatePoolParams {
    tokenA: string;
    tokenB: string;
    fee: number | BigNumber;
}
export interface IEnableFeeAmountParams {
    fee: number | BigNumber;
    tickSpacing: number | BigNumber;
}
export interface IGetPoolParams {
    param1: string;
    param2: string;
    param3: number | BigNumber;
}
export declare class UniswapV3Factory extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(options?: TransactionOptions): Promise<string>;
    parseFeeAmountEnabledEvent(receipt: TransactionReceipt): UniswapV3Factory.FeeAmountEnabledEvent[];
    decodeFeeAmountEnabledEvent(event: Event): UniswapV3Factory.FeeAmountEnabledEvent;
    parseOwnerChangedEvent(receipt: TransactionReceipt): UniswapV3Factory.OwnerChangedEvent[];
    decodeOwnerChangedEvent(event: Event): UniswapV3Factory.OwnerChangedEvent;
    parsePoolCreatedEvent(receipt: TransactionReceipt): UniswapV3Factory.PoolCreatedEvent[];
    decodePoolCreatedEvent(event: Event): UniswapV3Factory.PoolCreatedEvent;
    createPool: {
        (params: ICreatePoolParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICreatePoolParams, options?: TransactionOptions) => Promise<string>;
    };
    enableFeeAmount: {
        (params: IEnableFeeAmountParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IEnableFeeAmountParams, options?: TransactionOptions) => Promise<void>;
    };
    feeAmountTickSpacing: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    getPool: {
        (params: IGetPoolParams, options?: TransactionOptions): Promise<string>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    parameters: {
        (options?: TransactionOptions): Promise<{
            factory: string;
            token0: string;
            token1: string;
            fee: BigNumber;
            tickSpacing: BigNumber;
        }>;
    };
    setOwner: {
        (owner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (owner: string, options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module UniswapV3Factory {
    interface FeeAmountEnabledEvent {
        fee: BigNumber;
        tickSpacing: BigNumber;
        _event: Event;
    }
    interface OwnerChangedEvent {
        oldOwner: string;
        newOwner: string;
        _event: Event;
    }
    interface PoolCreatedEvent {
        token0: string;
        token1: string;
        fee: BigNumber;
        tickSpacing: BigNumber;
        pool: string;
        _event: Event;
    }
}

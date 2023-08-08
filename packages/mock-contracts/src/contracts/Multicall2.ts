import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./Multicall2.json";
export interface ITryAggregateParams {requireSuccess:boolean;calls:{target:string,callData:string}[]}
export interface ITryBlockAndAggregateParams {requireSuccess:boolean;calls:{target:string,callData:string}[]}
export class Multicall2 extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(options?: TransactionOptions): Promise<string>{
        return this.__deploy([], options);
    }
    aggregate: {
        (calls:{target:string,callData:string}[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (calls:{target:string,callData:string}[], options?: TransactionOptions) => Promise<{blockNumber:BigNumber,returnData:string[]}>;
    }
    blockAndAggregate: {
        (calls:{target:string,callData:string}[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (calls:{target:string,callData:string}[], options?: TransactionOptions) => Promise<{blockNumber:BigNumber,blockHash:string,returnData:{success:boolean,returnData:string}[]}>;
    }
    getBlockHash: {
        (blockNumber:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    getBlockNumber: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    getCurrentBlockCoinbase: {
        (options?: TransactionOptions): Promise<string>;
    }
    getCurrentBlockDifficulty: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    getCurrentBlockGasLimit: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    getCurrentBlockTimestamp: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    getEthBalance: {
        (addr:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    getLastBlockHash: {
        (options?: TransactionOptions): Promise<string>;
    }
    tryAggregate: {
        (params: ITryAggregateParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITryAggregateParams, options?: TransactionOptions) => Promise<{success:boolean,returnData:string}[]>;
    }
    tryBlockAndAggregate: {
        (params: ITryBlockAndAggregateParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITryBlockAndAggregateParams, options?: TransactionOptions) => Promise<{blockNumber:BigNumber,blockHash:string,returnData:{success:boolean,returnData:string}[]}>;
    }
    private assign(){
        let getBlockHash_call = async (blockNumber:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('getBlockHash',[this.wallet.utils.toString(blockNumber)],options);
            return result;
        }
        this.getBlockHash = getBlockHash_call
        let getBlockNumber_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getBlockNumber',[],options);
            return new BigNumber(result);
        }
        this.getBlockNumber = getBlockNumber_call
        let getCurrentBlockCoinbase_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('getCurrentBlockCoinbase',[],options);
            return result;
        }
        this.getCurrentBlockCoinbase = getCurrentBlockCoinbase_call
        let getCurrentBlockDifficulty_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getCurrentBlockDifficulty',[],options);
            return new BigNumber(result);
        }
        this.getCurrentBlockDifficulty = getCurrentBlockDifficulty_call
        let getCurrentBlockGasLimit_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getCurrentBlockGasLimit',[],options);
            return new BigNumber(result);
        }
        this.getCurrentBlockGasLimit = getCurrentBlockGasLimit_call
        let getCurrentBlockTimestamp_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getCurrentBlockTimestamp',[],options);
            return new BigNumber(result);
        }
        this.getCurrentBlockTimestamp = getCurrentBlockTimestamp_call
        let getEthBalance_call = async (addr:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getEthBalance',[addr],options);
            return new BigNumber(result);
        }
        this.getEthBalance = getEthBalance_call
        let getLastBlockHash_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('getLastBlockHash',[],options);
            return result;
        }
        this.getLastBlockHash = getLastBlockHash_call
        let aggregate_send = async (calls:{target:string,callData:string}[], options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('aggregate',[calls.map(e=>([e.target,this.wallet.utils.stringToBytes(e.callData)]))],options);
            return result;
        }
        let aggregate_call = async (calls:{target:string,callData:string}[], options?: TransactionOptions): Promise<{blockNumber:BigNumber,returnData:string[]}> => {
            let result = await this.call('aggregate',[calls.map(e=>([e.target,this.wallet.utils.stringToBytes(e.callData)]))],options);
            return {
                blockNumber: new BigNumber(result.blockNumber),
                returnData: result.returnData
            };
        }
        this.aggregate = Object.assign(aggregate_send, {
            call:aggregate_call
        });
        let blockAndAggregate_send = async (calls:{target:string,callData:string}[], options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('blockAndAggregate',[calls.map(e=>([e.target,this.wallet.utils.stringToBytes(e.callData)]))],options);
            return result;
        }
        let blockAndAggregate_call = async (calls:{target:string,callData:string}[], options?: TransactionOptions): Promise<{blockNumber:BigNumber,blockHash:string,returnData:{success:boolean,returnData:string}[]}> => {
            let result = await this.call('blockAndAggregate',[calls.map(e=>([e.target,this.wallet.utils.stringToBytes(e.callData)]))],options);
            return {
                blockNumber: new BigNumber(result.blockNumber),
                blockHash: result.blockHash,
                returnData: result.returnData.map(e=>(
                    {
                        success: e.success,
                        returnData: e.returnData
                    }
                ))
            };
        }
        this.blockAndAggregate = Object.assign(blockAndAggregate_send, {
            call:blockAndAggregate_call
        });
        let tryAggregateParams = (params: ITryAggregateParams) => [params.requireSuccess,params.calls.map(e=>([e.target,this.wallet.utils.stringToBytes(e.callData)]))];
        let tryAggregate_send = async (params: ITryAggregateParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('tryAggregate',tryAggregateParams(params),options);
            return result;
        }
        let tryAggregate_call = async (params: ITryAggregateParams, options?: TransactionOptions): Promise<{success:boolean,returnData:string}[]> => {
            let result = await this.call('tryAggregate',tryAggregateParams(params),options);
            return (result.map(e=>(
                {
                    success: e.success,
                    returnData: e.returnData
                }
            )));
        }
        this.tryAggregate = Object.assign(tryAggregate_send, {
            call:tryAggregate_call
        });
        let tryBlockAndAggregateParams = (params: ITryBlockAndAggregateParams) => [params.requireSuccess,params.calls.map(e=>([e.target,this.wallet.utils.stringToBytes(e.callData)]))];
        let tryBlockAndAggregate_send = async (params: ITryBlockAndAggregateParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('tryBlockAndAggregate',tryBlockAndAggregateParams(params),options);
            return result;
        }
        let tryBlockAndAggregate_call = async (params: ITryBlockAndAggregateParams, options?: TransactionOptions): Promise<{blockNumber:BigNumber,blockHash:string,returnData:{success:boolean,returnData:string}[]}> => {
            let result = await this.call('tryBlockAndAggregate',tryBlockAndAggregateParams(params),options);
            return {
                blockNumber: new BigNumber(result.blockNumber),
                blockHash: result.blockHash,
                returnData: result.returnData.map(e=>(
                    {
                        success: e.success,
                        returnData: e.returnData
                    }
                ))
            };
        }
        this.tryBlockAndAggregate = Object.assign(tryBlockAndAggregate_send, {
            call:tryBlockAndAggregate_call
        });
    }
}
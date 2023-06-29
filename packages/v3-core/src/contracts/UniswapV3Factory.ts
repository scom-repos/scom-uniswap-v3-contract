import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./UniswapV3Factory.json";
export interface ICreatePoolParams {tokenA:string;tokenB:string;fee:number|BigNumber}
export interface IEnableFeeAmountParams {fee:number|BigNumber;tickSpacing:number|BigNumber}
export interface IGetPoolParams {param1:string;param2:string;param3:number|BigNumber}
export class UniswapV3Factory extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(options?: TransactionOptions): Promise<string>{
        return this.__deploy([], options);
    }
    parseFeeAmountEnabledEvent(receipt: TransactionReceipt): UniswapV3Factory.FeeAmountEnabledEvent[]{
        return this.parseEvents(receipt, "FeeAmountEnabled").map(e=>this.decodeFeeAmountEnabledEvent(e));
    }
    decodeFeeAmountEnabledEvent(event: Event): UniswapV3Factory.FeeAmountEnabledEvent{
        let result = event.data;
        return {
            fee: new BigNumber(result.fee),
            tickSpacing: new BigNumber(result.tickSpacing),
            _event: event
        };
    }
    parseOwnerChangedEvent(receipt: TransactionReceipt): UniswapV3Factory.OwnerChangedEvent[]{
        return this.parseEvents(receipt, "OwnerChanged").map(e=>this.decodeOwnerChangedEvent(e));
    }
    decodeOwnerChangedEvent(event: Event): UniswapV3Factory.OwnerChangedEvent{
        let result = event.data;
        return {
            oldOwner: result.oldOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parsePoolCreatedEvent(receipt: TransactionReceipt): UniswapV3Factory.PoolCreatedEvent[]{
        return this.parseEvents(receipt, "PoolCreated").map(e=>this.decodePoolCreatedEvent(e));
    }
    decodePoolCreatedEvent(event: Event): UniswapV3Factory.PoolCreatedEvent{
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            fee: new BigNumber(result.fee),
            tickSpacing: new BigNumber(result.tickSpacing),
            pool: result.pool,
            _event: event
        };
    }
    createPool: {
        (params: ICreatePoolParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICreatePoolParams, options?: TransactionOptions) => Promise<string>;
    }
    enableFeeAmount: {
        (params: IEnableFeeAmountParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IEnableFeeAmountParams, options?: TransactionOptions) => Promise<void>;
    }
    feeAmountTickSpacing: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    getPool: {
        (params: IGetPoolParams, options?: TransactionOptions): Promise<string>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    parameters: {
        (options?: TransactionOptions): Promise<{factory:string,token0:string,token1:string,fee:BigNumber,tickSpacing:BigNumber}>;
    }
    setOwner: {
        (owner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (owner:string, options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let feeAmountTickSpacing_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('feeAmountTickSpacing',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this.feeAmountTickSpacing = feeAmountTickSpacing_call
        let getPoolParams = (params: IGetPoolParams) => [params.param1,params.param2,this.wallet.utils.toString(params.param3)];
        let getPool_call = async (params: IGetPoolParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('getPool',getPoolParams(params),options);
            return result;
        }
        this.getPool = getPool_call
        let owner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('owner',[],options);
            return result;
        }
        this.owner = owner_call
        let parameters_call = async (options?: TransactionOptions): Promise<{factory:string,token0:string,token1:string,fee:BigNumber,tickSpacing:BigNumber}> => {
            let result = await this.call('parameters',[],options);
            return {
                factory: result.factory,
                token0: result.token0,
                token1: result.token1,
                fee: new BigNumber(result.fee),
                tickSpacing: new BigNumber(result.tickSpacing)
            };
        }
        this.parameters = parameters_call
        let createPoolParams = (params: ICreatePoolParams) => [params.tokenA,params.tokenB,this.wallet.utils.toString(params.fee)];
        let createPool_send = async (params: ICreatePoolParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('createPool',createPoolParams(params),options);
            return result;
        }
        let createPool_call = async (params: ICreatePoolParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('createPool',createPoolParams(params),options);
            return result;
        }
        this.createPool = Object.assign(createPool_send, {
            call:createPool_call
        });
        let enableFeeAmountParams = (params: IEnableFeeAmountParams) => [this.wallet.utils.toString(params.fee),this.wallet.utils.toString(params.tickSpacing)];
        let enableFeeAmount_send = async (params: IEnableFeeAmountParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('enableFeeAmount',enableFeeAmountParams(params),options);
            return result;
        }
        let enableFeeAmount_call = async (params: IEnableFeeAmountParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('enableFeeAmount',enableFeeAmountParams(params),options);
            return;
        }
        this.enableFeeAmount = Object.assign(enableFeeAmount_send, {
            call:enableFeeAmount_call
        });
        let setOwner_send = async (owner:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setOwner',[owner],options);
            return result;
        }
        let setOwner_call = async (owner:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setOwner',[owner],options);
            return;
        }
        this.setOwner = Object.assign(setOwner_send, {
            call:setOwner_call
        });
    }
}
export module UniswapV3Factory{
    export interface FeeAmountEnabledEvent {fee:BigNumber,tickSpacing:BigNumber,_event:Event}
    export interface OwnerChangedEvent {oldOwner:string,newOwner:string,_event:Event}
    export interface PoolCreatedEvent {token0:string,token1:string,fee:BigNumber,tickSpacing:BigNumber,pool:string,_event:Event}
}
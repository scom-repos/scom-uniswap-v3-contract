import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./V3Migrator.json";
export interface IDeployParams {factory:string;WETH9:string;nonfungiblePositionManager:string}
export interface ICreateAndInitializePoolIfNecessaryParams {token0:string;token1:string;fee:number|BigNumber;sqrtPriceX96:number|BigNumber}
export interface ISelfPermitParams {token:string;value:number|BigNumber;deadline:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ISelfPermitAllowedParams {token:string;nonce:number|BigNumber;expiry:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ISelfPermitAllowedIfNecessaryParams {token:string;nonce:number|BigNumber;expiry:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ISelfPermitIfNecessaryParams {token:string;value:number|BigNumber;deadline:number|BigNumber;v:number|BigNumber;r:string;s:string}
export class V3Migrator extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.factory,params.WETH9,params.nonfungiblePositionManager], options);
    }
    WETH9: {
        (options?: TransactionOptions): Promise<string>;
    }
    createAndInitializePoolIfNecessary: {
        (params: ICreateAndInitializePoolIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICreateAndInitializePoolIfNecessaryParams, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    factory: {
        (options?: TransactionOptions): Promise<string>;
    }
    migrate: {
        (params:{pair:string,liquidityToMigrate:number|BigNumber,percentageToMigrate:number|BigNumber,token0:string,token1:string,fee:number|BigNumber,tickLower:number|BigNumber,tickUpper:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,recipient:string,deadline:number|BigNumber,refundAsETH:boolean}, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params:{pair:string,liquidityToMigrate:number|BigNumber,percentageToMigrate:number|BigNumber,token0:string,token1:string,fee:number|BigNumber,tickLower:number|BigNumber,tickUpper:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,recipient:string,deadline:number|BigNumber,refundAsETH:boolean}, options?: TransactionOptions) => Promise<void>;
    }
    multicall: {
        (data:string[], options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (data:string[], options?: number|BigNumber|TransactionOptions) => Promise<string[]>;
    }
    nonfungiblePositionManager: {
        (options?: TransactionOptions): Promise<string>;
    }
    selfPermit: {
        (params: ISelfPermitParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISelfPermitParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
    }
    selfPermitAllowed: {
        (params: ISelfPermitAllowedParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISelfPermitAllowedParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
    }
    selfPermitAllowedIfNecessary: {
        (params: ISelfPermitAllowedIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISelfPermitAllowedIfNecessaryParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
    }
    selfPermitIfNecessary: {
        (params: ISelfPermitIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISelfPermitIfNecessaryParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
    }
    private assign(){
        let WETH9_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('WETH9',[],options);
            return result;
        }
        this.WETH9 = WETH9_call
        let factory_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('factory',[],options);
            return result;
        }
        this.factory = factory_call
        let nonfungiblePositionManager_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('nonfungiblePositionManager',[],options);
            return result;
        }
        this.nonfungiblePositionManager = nonfungiblePositionManager_call
        let createAndInitializePoolIfNecessaryParams = (params: ICreateAndInitializePoolIfNecessaryParams) => [params.token0,params.token1,this.wallet.utils.toString(params.fee),this.wallet.utils.toString(params.sqrtPriceX96)];
        let createAndInitializePoolIfNecessary_send = async (params: ICreateAndInitializePoolIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('createAndInitializePoolIfNecessary',createAndInitializePoolIfNecessaryParams(params),options);
            return result;
        }
        let createAndInitializePoolIfNecessary_call = async (params: ICreateAndInitializePoolIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.call('createAndInitializePoolIfNecessary',createAndInitializePoolIfNecessaryParams(params),options);
            return result;
        }
        this.createAndInitializePoolIfNecessary = Object.assign(createAndInitializePoolIfNecessary_send, {
            call:createAndInitializePoolIfNecessary_call
        });
        let migrate_send = async (params:{pair:string,liquidityToMigrate:number|BigNumber,percentageToMigrate:number|BigNumber,token0:string,token1:string,fee:number|BigNumber,tickLower:number|BigNumber,tickUpper:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,recipient:string,deadline:number|BigNumber,refundAsETH:boolean}, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('migrate',[[params.pair,this.wallet.utils.toString(params.liquidityToMigrate),this.wallet.utils.toString(params.percentageToMigrate),params.token0,params.token1,this.wallet.utils.toString(params.fee),this.wallet.utils.toString(params.tickLower),this.wallet.utils.toString(params.tickUpper),this.wallet.utils.toString(params.amount0Min),this.wallet.utils.toString(params.amount1Min),params.recipient,this.wallet.utils.toString(params.deadline),params.refundAsETH]],options);
            return result;
        }
        let migrate_call = async (params:{pair:string,liquidityToMigrate:number|BigNumber,percentageToMigrate:number|BigNumber,token0:string,token1:string,fee:number|BigNumber,tickLower:number|BigNumber,tickUpper:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,recipient:string,deadline:number|BigNumber,refundAsETH:boolean}, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('migrate',[[params.pair,this.wallet.utils.toString(params.liquidityToMigrate),this.wallet.utils.toString(params.percentageToMigrate),params.token0,params.token1,this.wallet.utils.toString(params.fee),this.wallet.utils.toString(params.tickLower),this.wallet.utils.toString(params.tickUpper),this.wallet.utils.toString(params.amount0Min),this.wallet.utils.toString(params.amount1Min),params.recipient,this.wallet.utils.toString(params.deadline),params.refundAsETH]],options);
            return;
        }
        this.migrate = Object.assign(migrate_send, {
            call:migrate_call
        });
        let multicall_send = async (data:string[], options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('multicall',[this.wallet.utils.stringToBytes(data)],options);
            return result;
        }
        let multicall_call = async (data:string[], options?: number|BigNumber|TransactionOptions): Promise<string[]> => {
            let result = await this.call('multicall',[this.wallet.utils.stringToBytes(data)],options);
            return result;
        }
        this.multicall = Object.assign(multicall_send, {
            call:multicall_call
        });
        let selfPermitParams = (params: ISelfPermitParams) => [params.token,this.wallet.utils.toString(params.value),this.wallet.utils.toString(params.deadline),this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let selfPermit_send = async (params: ISelfPermitParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('selfPermit',selfPermitParams(params),options);
            return result;
        }
        let selfPermit_call = async (params: ISelfPermitParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('selfPermit',selfPermitParams(params),options);
            return;
        }
        this.selfPermit = Object.assign(selfPermit_send, {
            call:selfPermit_call
        });
        let selfPermitAllowedParams = (params: ISelfPermitAllowedParams) => [params.token,this.wallet.utils.toString(params.nonce),this.wallet.utils.toString(params.expiry),this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let selfPermitAllowed_send = async (params: ISelfPermitAllowedParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('selfPermitAllowed',selfPermitAllowedParams(params),options);
            return result;
        }
        let selfPermitAllowed_call = async (params: ISelfPermitAllowedParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('selfPermitAllowed',selfPermitAllowedParams(params),options);
            return;
        }
        this.selfPermitAllowed = Object.assign(selfPermitAllowed_send, {
            call:selfPermitAllowed_call
        });
        let selfPermitAllowedIfNecessaryParams = (params: ISelfPermitAllowedIfNecessaryParams) => [params.token,this.wallet.utils.toString(params.nonce),this.wallet.utils.toString(params.expiry),this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let selfPermitAllowedIfNecessary_send = async (params: ISelfPermitAllowedIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('selfPermitAllowedIfNecessary',selfPermitAllowedIfNecessaryParams(params),options);
            return result;
        }
        let selfPermitAllowedIfNecessary_call = async (params: ISelfPermitAllowedIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('selfPermitAllowedIfNecessary',selfPermitAllowedIfNecessaryParams(params),options);
            return;
        }
        this.selfPermitAllowedIfNecessary = Object.assign(selfPermitAllowedIfNecessary_send, {
            call:selfPermitAllowedIfNecessary_call
        });
        let selfPermitIfNecessaryParams = (params: ISelfPermitIfNecessaryParams) => [params.token,this.wallet.utils.toString(params.value),this.wallet.utils.toString(params.deadline),this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let selfPermitIfNecessary_send = async (params: ISelfPermitIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('selfPermitIfNecessary',selfPermitIfNecessaryParams(params),options);
            return result;
        }
        let selfPermitIfNecessary_call = async (params: ISelfPermitIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('selfPermitIfNecessary',selfPermitIfNecessaryParams(params),options);
            return;
        }
        this.selfPermitIfNecessary = Object.assign(selfPermitIfNecessary_send, {
            call:selfPermitIfNecessary_call
        });
    }
}
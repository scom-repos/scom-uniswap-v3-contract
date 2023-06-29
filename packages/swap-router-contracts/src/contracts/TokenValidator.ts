import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./TokenValidator.json";
export interface IDeployParams {factoryV2:string;positionManager:string}
export interface IBatchValidateParams {tokens:string[];baseTokens:string[];amountToBorrow:number|BigNumber}
export interface IUniswapV2CallParams {param1:string;amount0:number|BigNumber;param3:number|BigNumber;data:string}
export interface IValidateParams {token:string;baseTokens:string[];amountToBorrow:number|BigNumber}
export class TokenValidator extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.factoryV2,params.positionManager], options);
    }
    batchValidate: {
        (params: IBatchValidateParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IBatchValidateParams, options?: TransactionOptions) => Promise<BigNumber[]>;
    }
    factoryV2: {
        (options?: TransactionOptions): Promise<string>;
    }
    positionManager: {
        (options?: TransactionOptions): Promise<string>;
    }
    uniswapV2Call: {
        (params: IUniswapV2CallParams, options?: TransactionOptions): Promise<void>;
    }
    validate: {
        (params: IValidateParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IValidateParams, options?: TransactionOptions) => Promise<BigNumber>;
    }
    private assign(){
        let factoryV2_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('factoryV2',[],options);
            return result;
        }
        this.factoryV2 = factoryV2_call
        let positionManager_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('positionManager',[],options);
            return result;
        }
        this.positionManager = positionManager_call
        let uniswapV2CallParams = (params: IUniswapV2CallParams) => [params.param1,this.wallet.utils.toString(params.amount0),this.wallet.utils.toString(params.param3),this.wallet.utils.stringToBytes(params.data)];
        let uniswapV2Call_call = async (params: IUniswapV2CallParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('uniswapV2Call',uniswapV2CallParams(params),options);
            return;
        }
        this.uniswapV2Call = uniswapV2Call_call
        let batchValidateParams = (params: IBatchValidateParams) => [params.tokens,params.baseTokens,this.wallet.utils.toString(params.amountToBorrow)];
        let batchValidate_send = async (params: IBatchValidateParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('batchValidate',batchValidateParams(params),options);
            return result;
        }
        let batchValidate_call = async (params: IBatchValidateParams, options?: TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('batchValidate',batchValidateParams(params),options);
            return result.map(e=>new BigNumber(e));
        }
        this.batchValidate = Object.assign(batchValidate_send, {
            call:batchValidate_call
        });
        let validateParams = (params: IValidateParams) => [params.token,params.baseTokens,this.wallet.utils.toString(params.amountToBorrow)];
        let validate_send = async (params: IValidateParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('validate',validateParams(params),options);
            return result;
        }
        let validate_call = async (params: IValidateParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('validate',validateParams(params),options);
            return new BigNumber(result);
        }
        this.validate = Object.assign(validate_send, {
            call:validate_call
        });
    }
}
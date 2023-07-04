import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./PairFlash.json";
export interface IDeployParams {swapRouter:string;factory:string;WETH9:string}
export interface ISweepTokenParams {token:string;amountMinimum:number|BigNumber;recipient:string}
export interface IUniswapV3FlashCallbackParams {fee0:number|BigNumber;fee1:number|BigNumber;data:string}
export interface IUnwrapWETH9Params {amountMinimum:number|BigNumber;recipient:string}
export class PairFlash extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.swapRouter,params.factory,params.WETH9], options);
    }
    WETH9: {
        (options?: TransactionOptions): Promise<string>;
    }
    factory: {
        (options?: TransactionOptions): Promise<string>;
    }
    initFlash: {
        (params:{token0:string,token1:string,fee1:number|BigNumber,amount0:number|BigNumber,amount1:number|BigNumber,fee2:number|BigNumber,fee3:number|BigNumber}, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params:{token0:string,token1:string,fee1:number|BigNumber,amount0:number|BigNumber,amount1:number|BigNumber,fee2:number|BigNumber,fee3:number|BigNumber}, options?: TransactionOptions) => Promise<void>;
        txData: (params:{token0:string,token1:string,fee1:number|BigNumber,amount0:number|BigNumber,amount1:number|BigNumber,fee2:number|BigNumber,fee3:number|BigNumber}, options?: TransactionOptions) => Promise<string>;
    }
    refundETH: {
        (options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    swapRouter: {
        (options?: TransactionOptions): Promise<string>;
    }
    sweepToken: {
        (params: ISweepTokenParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISweepTokenParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (params: ISweepTokenParams, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    uniswapV3FlashCallback: {
        (params: IUniswapV3FlashCallbackParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUniswapV3FlashCallbackParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IUniswapV3FlashCallbackParams, options?: TransactionOptions) => Promise<string>;
    }
    unwrapWETH9: {
        (params: IUnwrapWETH9Params, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnwrapWETH9Params, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (params: IUnwrapWETH9Params, options?: number|BigNumber|TransactionOptions) => Promise<string>;
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
        let swapRouter_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('swapRouter',[],options);
            return result;
        }
        this.swapRouter = swapRouter_call
        let initFlash_send = async (params:{token0:string,token1:string,fee1:number|BigNumber,amount0:number|BigNumber,amount1:number|BigNumber,fee2:number|BigNumber,fee3:number|BigNumber}, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('initFlash',[[params.token0,params.token1,this.wallet.utils.toString(params.fee1),this.wallet.utils.toString(params.amount0),this.wallet.utils.toString(params.amount1),this.wallet.utils.toString(params.fee2),this.wallet.utils.toString(params.fee3)]],options);
            return result;
        }
        let initFlash_call = async (params:{token0:string,token1:string,fee1:number|BigNumber,amount0:number|BigNumber,amount1:number|BigNumber,fee2:number|BigNumber,fee3:number|BigNumber}, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('initFlash',[[params.token0,params.token1,this.wallet.utils.toString(params.fee1),this.wallet.utils.toString(params.amount0),this.wallet.utils.toString(params.amount1),this.wallet.utils.toString(params.fee2),this.wallet.utils.toString(params.fee3)]],options);
            return;
        }
        let initFlash_txData = async (params:{token0:string,token1:string,fee1:number|BigNumber,amount0:number|BigNumber,amount1:number|BigNumber,fee2:number|BigNumber,fee3:number|BigNumber}, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('initFlash',[[params.token0,params.token1,this.wallet.utils.toString(params.fee1),this.wallet.utils.toString(params.amount0),this.wallet.utils.toString(params.amount1),this.wallet.utils.toString(params.fee2),this.wallet.utils.toString(params.fee3)]],options);
            return result;
        }
        this.initFlash = Object.assign(initFlash_send, {
            call:initFlash_call
            , txData:initFlash_txData
        });
        let refundETH_send = async (options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('refundETH',[],options);
            return result;
        }
        let refundETH_call = async (options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('refundETH',[],options);
            return;
        }
        let refundETH_txData = async (options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('refundETH',[],options);
            return result;
        }
        this.refundETH = Object.assign(refundETH_send, {
            call:refundETH_call
            , txData:refundETH_txData
        });
        let sweepTokenParams = (params: ISweepTokenParams) => [params.token,this.wallet.utils.toString(params.amountMinimum),params.recipient];
        let sweepToken_send = async (params: ISweepTokenParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('sweepToken',sweepTokenParams(params),options);
            return result;
        }
        let sweepToken_call = async (params: ISweepTokenParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('sweepToken',sweepTokenParams(params),options);
            return;
        }
        let sweepToken_txData = async (params: ISweepTokenParams, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('sweepToken',sweepTokenParams(params),options);
            return result;
        }
        this.sweepToken = Object.assign(sweepToken_send, {
            call:sweepToken_call
            , txData:sweepToken_txData
        });
        let uniswapV3FlashCallbackParams = (params: IUniswapV3FlashCallbackParams) => [this.wallet.utils.toString(params.fee0),this.wallet.utils.toString(params.fee1),this.wallet.utils.stringToBytes(params.data)];
        let uniswapV3FlashCallback_send = async (params: IUniswapV3FlashCallbackParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('uniswapV3FlashCallback',uniswapV3FlashCallbackParams(params),options);
            return result;
        }
        let uniswapV3FlashCallback_call = async (params: IUniswapV3FlashCallbackParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('uniswapV3FlashCallback',uniswapV3FlashCallbackParams(params),options);
            return;
        }
        let uniswapV3FlashCallback_txData = async (params: IUniswapV3FlashCallbackParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('uniswapV3FlashCallback',uniswapV3FlashCallbackParams(params),options);
            return result;
        }
        this.uniswapV3FlashCallback = Object.assign(uniswapV3FlashCallback_send, {
            call:uniswapV3FlashCallback_call
            , txData:uniswapV3FlashCallback_txData
        });
        let unwrapWETH9Params = (params: IUnwrapWETH9Params) => [this.wallet.utils.toString(params.amountMinimum),params.recipient];
        let unwrapWETH9_send = async (params: IUnwrapWETH9Params, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('unwrapWETH9',unwrapWETH9Params(params),options);
            return result;
        }
        let unwrapWETH9_call = async (params: IUnwrapWETH9Params, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('unwrapWETH9',unwrapWETH9Params(params),options);
            return;
        }
        let unwrapWETH9_txData = async (params: IUnwrapWETH9Params, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('unwrapWETH9',unwrapWETH9Params(params),options);
            return result;
        }
        this.unwrapWETH9 = Object.assign(unwrapWETH9_send, {
            call:unwrapWETH9_call
            , txData:unwrapWETH9_txData
        });
    }
}
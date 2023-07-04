import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./Quoter.json";
export interface IDeployParams {factory:string;WETH9:string}
export interface IQuoteExactInputParams {path:string;amountIn:number|BigNumber}
export interface IQuoteExactInputSingleParams {tokenIn:string;tokenOut:string;fee:number|BigNumber;amountIn:number|BigNumber;sqrtPriceLimitX96:number|BigNumber}
export interface IQuoteExactOutputParams {path:string;amountOut:number|BigNumber}
export interface IQuoteExactOutputSingleParams {tokenIn:string;tokenOut:string;fee:number|BigNumber;amountOut:number|BigNumber;sqrtPriceLimitX96:number|BigNumber}
export interface IUniswapV3SwapCallbackParams {amount0Delta:number|BigNumber;amount1Delta:number|BigNumber;path:string}
export class Quoter extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.factory,params.WETH9], options);
    }
    WETH9: {
        (options?: TransactionOptions): Promise<string>;
    }
    factory: {
        (options?: TransactionOptions): Promise<string>;
    }
    quoteExactInput: {
        (params: IQuoteExactInputParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IQuoteExactInputParams, options?: TransactionOptions) => Promise<BigNumber>;
        txData: (params: IQuoteExactInputParams, options?: TransactionOptions) => Promise<string>;
    }
    quoteExactInputSingle: {
        (params: IQuoteExactInputSingleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IQuoteExactInputSingleParams, options?: TransactionOptions) => Promise<BigNumber>;
        txData: (params: IQuoteExactInputSingleParams, options?: TransactionOptions) => Promise<string>;
    }
    quoteExactOutput: {
        (params: IQuoteExactOutputParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IQuoteExactOutputParams, options?: TransactionOptions) => Promise<BigNumber>;
        txData: (params: IQuoteExactOutputParams, options?: TransactionOptions) => Promise<string>;
    }
    quoteExactOutputSingle: {
        (params: IQuoteExactOutputSingleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IQuoteExactOutputSingleParams, options?: TransactionOptions) => Promise<BigNumber>;
        txData: (params: IQuoteExactOutputSingleParams, options?: TransactionOptions) => Promise<string>;
    }
    uniswapV3SwapCallback: {
        (params: IUniswapV3SwapCallbackParams, options?: TransactionOptions): Promise<void>;
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
        let uniswapV3SwapCallbackParams = (params: IUniswapV3SwapCallbackParams) => [this.wallet.utils.toString(params.amount0Delta),this.wallet.utils.toString(params.amount1Delta),this.wallet.utils.stringToBytes(params.path)];
        let uniswapV3SwapCallback_call = async (params: IUniswapV3SwapCallbackParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('uniswapV3SwapCallback',uniswapV3SwapCallbackParams(params),options);
            return;
        }
        this.uniswapV3SwapCallback = uniswapV3SwapCallback_call
        let quoteExactInputParams = (params: IQuoteExactInputParams) => [this.wallet.utils.stringToBytes(params.path),this.wallet.utils.toString(params.amountIn)];
        let quoteExactInput_send = async (params: IQuoteExactInputParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('quoteExactInput',quoteExactInputParams(params),options);
            return result;
        }
        let quoteExactInput_call = async (params: IQuoteExactInputParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('quoteExactInput',quoteExactInputParams(params),options);
            return new BigNumber(result);
        }
        let quoteExactInput_txData = async (params: IQuoteExactInputParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('quoteExactInput',quoteExactInputParams(params),options);
            return result;
        }
        this.quoteExactInput = Object.assign(quoteExactInput_send, {
            call:quoteExactInput_call
            , txData:quoteExactInput_txData
        });
        let quoteExactInputSingleParams = (params: IQuoteExactInputSingleParams) => [params.tokenIn,params.tokenOut,this.wallet.utils.toString(params.fee),this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.sqrtPriceLimitX96)];
        let quoteExactInputSingle_send = async (params: IQuoteExactInputSingleParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('quoteExactInputSingle',quoteExactInputSingleParams(params),options);
            return result;
        }
        let quoteExactInputSingle_call = async (params: IQuoteExactInputSingleParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('quoteExactInputSingle',quoteExactInputSingleParams(params),options);
            return new BigNumber(result);
        }
        let quoteExactInputSingle_txData = async (params: IQuoteExactInputSingleParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('quoteExactInputSingle',quoteExactInputSingleParams(params),options);
            return result;
        }
        this.quoteExactInputSingle = Object.assign(quoteExactInputSingle_send, {
            call:quoteExactInputSingle_call
            , txData:quoteExactInputSingle_txData
        });
        let quoteExactOutputParams = (params: IQuoteExactOutputParams) => [this.wallet.utils.stringToBytes(params.path),this.wallet.utils.toString(params.amountOut)];
        let quoteExactOutput_send = async (params: IQuoteExactOutputParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('quoteExactOutput',quoteExactOutputParams(params),options);
            return result;
        }
        let quoteExactOutput_call = async (params: IQuoteExactOutputParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('quoteExactOutput',quoteExactOutputParams(params),options);
            return new BigNumber(result);
        }
        let quoteExactOutput_txData = async (params: IQuoteExactOutputParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('quoteExactOutput',quoteExactOutputParams(params),options);
            return result;
        }
        this.quoteExactOutput = Object.assign(quoteExactOutput_send, {
            call:quoteExactOutput_call
            , txData:quoteExactOutput_txData
        });
        let quoteExactOutputSingleParams = (params: IQuoteExactOutputSingleParams) => [params.tokenIn,params.tokenOut,this.wallet.utils.toString(params.fee),this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.sqrtPriceLimitX96)];
        let quoteExactOutputSingle_send = async (params: IQuoteExactOutputSingleParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('quoteExactOutputSingle',quoteExactOutputSingleParams(params),options);
            return result;
        }
        let quoteExactOutputSingle_call = async (params: IQuoteExactOutputSingleParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('quoteExactOutputSingle',quoteExactOutputSingleParams(params),options);
            return new BigNumber(result);
        }
        let quoteExactOutputSingle_txData = async (params: IQuoteExactOutputSingleParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('quoteExactOutputSingle',quoteExactOutputSingleParams(params),options);
            return result;
        }
        this.quoteExactOutputSingle = Object.assign(quoteExactOutputSingle_send, {
            call:quoteExactOutputSingle_call
            , txData:quoteExactOutputSingle_txData
        });
    }
}
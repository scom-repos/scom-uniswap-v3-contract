import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./MixedRouteQuoterV1.json";
export interface IDeployParams {factory:string;factoryV2:string;WETH9:string}
export interface IQuoteExactInputParams {path:string;amountIn:number|BigNumber}
export interface IUniswapV3SwapCallbackParams {amount0Delta:number|BigNumber;amount1Delta:number|BigNumber;path:string}
export class MixedRouteQuoterV1 extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.factory,params.factoryV2,params.WETH9], options);
    }
    WETH9: {
        (options?: TransactionOptions): Promise<string>;
    }
    factory: {
        (options?: TransactionOptions): Promise<string>;
    }
    factoryV2: {
        (options?: TransactionOptions): Promise<string>;
    }
    quoteExactInput: {
        (params: IQuoteExactInputParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IQuoteExactInputParams, options?: TransactionOptions) => Promise<{amountOut:BigNumber,v3SqrtPriceX96AfterList:BigNumber[],v3InitializedTicksCrossedList:BigNumber[],v3SwapGasEstimate:BigNumber}>;
    }
    quoteExactInputSingleV2: {
        (params:{tokenIn:string,tokenOut:string,amountIn:number|BigNumber}, options?: TransactionOptions): Promise<BigNumber>;
    }
    quoteExactInputSingleV3: {
        (params:{tokenIn:string,tokenOut:string,amountIn:number|BigNumber,fee:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params:{tokenIn:string,tokenOut:string,amountIn:number|BigNumber,fee:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: TransactionOptions) => Promise<{amountOut:BigNumber,sqrtPriceX96After:BigNumber,initializedTicksCrossed:BigNumber,gasEstimate:BigNumber}>;
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
        let factoryV2_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('factoryV2',[],options);
            return result;
        }
        this.factoryV2 = factoryV2_call
        let quoteExactInputSingleV2_call = async (params:{tokenIn:string,tokenOut:string,amountIn:number|BigNumber}, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('quoteExactInputSingleV2',[[params.tokenIn,params.tokenOut,this.wallet.utils.toString(params.amountIn)]],options);
            return new BigNumber(result);
        }
        this.quoteExactInputSingleV2 = quoteExactInputSingleV2_call
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
        let quoteExactInput_call = async (params: IQuoteExactInputParams, options?: TransactionOptions): Promise<{amountOut:BigNumber,v3SqrtPriceX96AfterList:BigNumber[],v3InitializedTicksCrossedList:BigNumber[],v3SwapGasEstimate:BigNumber}> => {
            let result = await this.call('quoteExactInput',quoteExactInputParams(params),options);
            return {
                amountOut: new BigNumber(result.amountOut),
                v3SqrtPriceX96AfterList: result.v3SqrtPriceX96AfterList.map(e=>new BigNumber(e)),
                v3InitializedTicksCrossedList: result.v3InitializedTicksCrossedList.map(e=>new BigNumber(e)),
                v3SwapGasEstimate: new BigNumber(result.v3SwapGasEstimate)
            };
        }
        this.quoteExactInput = Object.assign(quoteExactInput_send, {
            call:quoteExactInput_call
        });
        let quoteExactInputSingleV3_send = async (params:{tokenIn:string,tokenOut:string,amountIn:number|BigNumber,fee:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('quoteExactInputSingleV3',[[params.tokenIn,params.tokenOut,this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.fee),this.wallet.utils.toString(params.sqrtPriceLimitX96)]],options);
            return result;
        }
        let quoteExactInputSingleV3_call = async (params:{tokenIn:string,tokenOut:string,amountIn:number|BigNumber,fee:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: TransactionOptions): Promise<{amountOut:BigNumber,sqrtPriceX96After:BigNumber,initializedTicksCrossed:BigNumber,gasEstimate:BigNumber}> => {
            let result = await this.call('quoteExactInputSingleV3',[[params.tokenIn,params.tokenOut,this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.fee),this.wallet.utils.toString(params.sqrtPriceLimitX96)]],options);
            return {
                amountOut: new BigNumber(result.amountOut),
                sqrtPriceX96After: new BigNumber(result.sqrtPriceX96After),
                initializedTicksCrossed: new BigNumber(result.initializedTicksCrossed),
                gasEstimate: new BigNumber(result.gasEstimate)
            };
        }
        this.quoteExactInputSingleV3 = Object.assign(quoteExactInputSingleV3_send, {
            call:quoteExactInputSingleV3_call
        });
    }
}
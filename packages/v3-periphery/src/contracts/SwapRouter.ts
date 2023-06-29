import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./SwapRouter.json";
export interface IDeployParams {factory:string;WETH9:string}
export interface ISelfPermitParams {token:string;value:number|BigNumber;deadline:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ISelfPermitAllowedParams {token:string;nonce:number|BigNumber;expiry:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ISelfPermitAllowedIfNecessaryParams {token:string;nonce:number|BigNumber;expiry:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ISelfPermitIfNecessaryParams {token:string;value:number|BigNumber;deadline:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ISweepTokenParams {token:string;amountMinimum:number|BigNumber;recipient:string}
export interface ISweepTokenWithFeeParams {token:string;amountMinimum:number|BigNumber;recipient:string;feeBips:number|BigNumber;feeRecipient:string}
export interface IUniswapV3SwapCallbackParams {amount0Delta:number|BigNumber;amount1Delta:number|BigNumber;data:string}
export interface IUnwrapWETH9Params {amountMinimum:number|BigNumber;recipient:string}
export interface IUnwrapWETH9WithFeeParams {amountMinimum:number|BigNumber;recipient:string;feeBips:number|BigNumber;feeRecipient:string}
export class SwapRouter extends _Contract{
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
    exactInput: {
        (params:{path:string,recipient:string,deadline:number|BigNumber,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params:{path:string,recipient:string,deadline:number|BigNumber,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber}, options?: number|BigNumber|TransactionOptions) => Promise<BigNumber>;
    }
    exactInputSingle: {
        (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,deadline:number|BigNumber,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,deadline:number|BigNumber,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions) => Promise<BigNumber>;
    }
    exactOutput: {
        (params:{path:string,recipient:string,deadline:number|BigNumber,amountOut:number|BigNumber,amountInMaximum:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params:{path:string,recipient:string,deadline:number|BigNumber,amountOut:number|BigNumber,amountInMaximum:number|BigNumber}, options?: number|BigNumber|TransactionOptions) => Promise<BigNumber>;
    }
    exactOutputSingle: {
        (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,deadline:number|BigNumber,amountOut:number|BigNumber,amountInMaximum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,deadline:number|BigNumber,amountOut:number|BigNumber,amountInMaximum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions) => Promise<BigNumber>;
    }
    factory: {
        (options?: TransactionOptions): Promise<string>;
    }
    multicall: {
        (data:string[], options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (data:string[], options?: number|BigNumber|TransactionOptions) => Promise<string[]>;
    }
    refundETH: {
        (options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: number|BigNumber|TransactionOptions) => Promise<void>;
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
    sweepToken: {
        (params: ISweepTokenParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISweepTokenParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
    }
    sweepTokenWithFee: {
        (params: ISweepTokenWithFeeParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISweepTokenWithFeeParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
    }
    uniswapV3SwapCallback: {
        (params: IUniswapV3SwapCallbackParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUniswapV3SwapCallbackParams, options?: TransactionOptions) => Promise<void>;
    }
    unwrapWETH9: {
        (params: IUnwrapWETH9Params, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnwrapWETH9Params, options?: number|BigNumber|TransactionOptions) => Promise<void>;
    }
    unwrapWETH9WithFee: {
        (params: IUnwrapWETH9WithFeeParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnwrapWETH9WithFeeParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
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
        let exactInput_send = async (params:{path:string,recipient:string,deadline:number|BigNumber,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('exactInput',[[this.wallet.utils.stringToBytes(params.path),params.recipient,this.wallet.utils.toString(params.deadline),this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMinimum)]],options);
            return result;
        }
        let exactInput_call = async (params:{path:string,recipient:string,deadline:number|BigNumber,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('exactInput',[[this.wallet.utils.stringToBytes(params.path),params.recipient,this.wallet.utils.toString(params.deadline),this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMinimum)]],options);
            return new BigNumber(result);
        }
        this.exactInput = Object.assign(exactInput_send, {
            call:exactInput_call
        });
        let exactInputSingle_send = async (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,deadline:number|BigNumber,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('exactInputSingle',[[params.tokenIn,params.tokenOut,this.wallet.utils.toString(params.fee),params.recipient,this.wallet.utils.toString(params.deadline),this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMinimum),this.wallet.utils.toString(params.sqrtPriceLimitX96)]],options);
            return result;
        }
        let exactInputSingle_call = async (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,deadline:number|BigNumber,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('exactInputSingle',[[params.tokenIn,params.tokenOut,this.wallet.utils.toString(params.fee),params.recipient,this.wallet.utils.toString(params.deadline),this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMinimum),this.wallet.utils.toString(params.sqrtPriceLimitX96)]],options);
            return new BigNumber(result);
        }
        this.exactInputSingle = Object.assign(exactInputSingle_send, {
            call:exactInputSingle_call
        });
        let exactOutput_send = async (params:{path:string,recipient:string,deadline:number|BigNumber,amountOut:number|BigNumber,amountInMaximum:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('exactOutput',[[this.wallet.utils.stringToBytes(params.path),params.recipient,this.wallet.utils.toString(params.deadline),this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMaximum)]],options);
            return result;
        }
        let exactOutput_call = async (params:{path:string,recipient:string,deadline:number|BigNumber,amountOut:number|BigNumber,amountInMaximum:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('exactOutput',[[this.wallet.utils.stringToBytes(params.path),params.recipient,this.wallet.utils.toString(params.deadline),this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMaximum)]],options);
            return new BigNumber(result);
        }
        this.exactOutput = Object.assign(exactOutput_send, {
            call:exactOutput_call
        });
        let exactOutputSingle_send = async (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,deadline:number|BigNumber,amountOut:number|BigNumber,amountInMaximum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('exactOutputSingle',[[params.tokenIn,params.tokenOut,this.wallet.utils.toString(params.fee),params.recipient,this.wallet.utils.toString(params.deadline),this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMaximum),this.wallet.utils.toString(params.sqrtPriceLimitX96)]],options);
            return result;
        }
        let exactOutputSingle_call = async (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,deadline:number|BigNumber,amountOut:number|BigNumber,amountInMaximum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('exactOutputSingle',[[params.tokenIn,params.tokenOut,this.wallet.utils.toString(params.fee),params.recipient,this.wallet.utils.toString(params.deadline),this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMaximum),this.wallet.utils.toString(params.sqrtPriceLimitX96)]],options);
            return new BigNumber(result);
        }
        this.exactOutputSingle = Object.assign(exactOutputSingle_send, {
            call:exactOutputSingle_call
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
        let refundETH_send = async (options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('refundETH',[],options);
            return result;
        }
        let refundETH_call = async (options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('refundETH',[],options);
            return;
        }
        this.refundETH = Object.assign(refundETH_send, {
            call:refundETH_call
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
        let sweepTokenParams = (params: ISweepTokenParams) => [params.token,this.wallet.utils.toString(params.amountMinimum),params.recipient];
        let sweepToken_send = async (params: ISweepTokenParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('sweepToken',sweepTokenParams(params),options);
            return result;
        }
        let sweepToken_call = async (params: ISweepTokenParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('sweepToken',sweepTokenParams(params),options);
            return;
        }
        this.sweepToken = Object.assign(sweepToken_send, {
            call:sweepToken_call
        });
        let sweepTokenWithFeeParams = (params: ISweepTokenWithFeeParams) => [params.token,this.wallet.utils.toString(params.amountMinimum),params.recipient,this.wallet.utils.toString(params.feeBips),params.feeRecipient];
        let sweepTokenWithFee_send = async (params: ISweepTokenWithFeeParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('sweepTokenWithFee',sweepTokenWithFeeParams(params),options);
            return result;
        }
        let sweepTokenWithFee_call = async (params: ISweepTokenWithFeeParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('sweepTokenWithFee',sweepTokenWithFeeParams(params),options);
            return;
        }
        this.sweepTokenWithFee = Object.assign(sweepTokenWithFee_send, {
            call:sweepTokenWithFee_call
        });
        let uniswapV3SwapCallbackParams = (params: IUniswapV3SwapCallbackParams) => [this.wallet.utils.toString(params.amount0Delta),this.wallet.utils.toString(params.amount1Delta),this.wallet.utils.stringToBytes(params.data)];
        let uniswapV3SwapCallback_send = async (params: IUniswapV3SwapCallbackParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('uniswapV3SwapCallback',uniswapV3SwapCallbackParams(params),options);
            return result;
        }
        let uniswapV3SwapCallback_call = async (params: IUniswapV3SwapCallbackParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('uniswapV3SwapCallback',uniswapV3SwapCallbackParams(params),options);
            return;
        }
        this.uniswapV3SwapCallback = Object.assign(uniswapV3SwapCallback_send, {
            call:uniswapV3SwapCallback_call
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
        this.unwrapWETH9 = Object.assign(unwrapWETH9_send, {
            call:unwrapWETH9_call
        });
        let unwrapWETH9WithFeeParams = (params: IUnwrapWETH9WithFeeParams) => [this.wallet.utils.toString(params.amountMinimum),params.recipient,this.wallet.utils.toString(params.feeBips),params.feeRecipient];
        let unwrapWETH9WithFee_send = async (params: IUnwrapWETH9WithFeeParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('unwrapWETH9WithFee',unwrapWETH9WithFeeParams(params),options);
            return result;
        }
        let unwrapWETH9WithFee_call = async (params: IUnwrapWETH9WithFeeParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('unwrapWETH9WithFee',unwrapWETH9WithFeeParams(params),options);
            return;
        }
        this.unwrapWETH9WithFee = Object.assign(unwrapWETH9WithFee_send, {
            call:unwrapWETH9WithFee_call
        });
    }
}
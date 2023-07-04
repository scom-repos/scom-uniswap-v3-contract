import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./SwapRouter02.json";
export interface IDeployParams {factoryV2:string;factoryV3:string;positionManager:string;WETH9:string}
export interface ICheckOracleSlippageParams {paths:string[];amounts:(number|BigNumber)[];maximumTickDivergence:number|BigNumber;secondsAgo:number|BigNumber}
export interface ICheckOracleSlippage_1Params {path:string;maximumTickDivergence:number|BigNumber;secondsAgo:number|BigNumber}
export interface IGetApprovalTypeParams {token:string;amount:number|BigNumber}
export interface IMulticallParams {previousBlockhash:string;data:string[]}
export interface IMulticall_1Params {deadline:number|BigNumber;data:string[]}
export interface IPullParams {token:string;value:number|BigNumber}
export interface ISelfPermitParams {token:string;value:number|BigNumber;deadline:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ISelfPermitAllowedParams {token:string;nonce:number|BigNumber;expiry:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ISelfPermitAllowedIfNecessaryParams {token:string;nonce:number|BigNumber;expiry:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ISelfPermitIfNecessaryParams {token:string;value:number|BigNumber;deadline:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ISwapExactTokensForTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string}
export interface ISwapTokensForExactTokensParams {amountOut:number|BigNumber;amountInMax:number|BigNumber;path:string[];to:string}
export interface ISweepTokenParams {token:string;amountMinimum:number|BigNumber;recipient:string}
export interface ISweepToken_1Params {token:string;amountMinimum:number|BigNumber}
export interface ISweepTokenWithFeeParams {token:string;amountMinimum:number|BigNumber;feeBips:number|BigNumber;feeRecipient:string}
export interface ISweepTokenWithFee_1Params {token:string;amountMinimum:number|BigNumber;recipient:string;feeBips:number|BigNumber;feeRecipient:string}
export interface IUniswapV3SwapCallbackParams {amount0Delta:number|BigNumber;amount1Delta:number|BigNumber;data:string}
export interface IUnwrapWETH9Params {amountMinimum:number|BigNumber;recipient:string}
export interface IUnwrapWETH9WithFeeParams {amountMinimum:number|BigNumber;recipient:string;feeBips:number|BigNumber;feeRecipient:string}
export interface IUnwrapWETH9WithFee_1Params {amountMinimum:number|BigNumber;feeBips:number|BigNumber;feeRecipient:string}
export class SwapRouter02 extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.factoryV2,params.factoryV3,params.positionManager,params.WETH9], options);
    }
    WETH9: {
        (options?: TransactionOptions): Promise<string>;
    }
    approveMax: {
        (token:string, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (token:string, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (token:string, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    approveMaxMinusOne: {
        (token:string, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (token:string, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (token:string, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    approveZeroThenMax: {
        (token:string, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (token:string, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (token:string, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    approveZeroThenMaxMinusOne: {
        (token:string, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (token:string, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (token:string, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    callPositionManager: {
        (data:string, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (data:string, options?: number|BigNumber|TransactionOptions) => Promise<string>;
        txData: (data:string, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    checkOracleSlippage: {
        (params: ICheckOracleSlippageParams, options?: TransactionOptions): Promise<void>;
    }
    checkOracleSlippage_1: {
        (params: ICheckOracleSlippage_1Params, options?: TransactionOptions): Promise<void>;
    }
    exactInput: {
        (params:{path:string,recipient:string,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params:{path:string,recipient:string,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber}, options?: number|BigNumber|TransactionOptions) => Promise<BigNumber>;
        txData: (params:{path:string,recipient:string,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber}, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    exactInputSingle: {
        (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions) => Promise<BigNumber>;
        txData: (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    exactOutput: {
        (params:{path:string,recipient:string,amountOut:number|BigNumber,amountInMaximum:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params:{path:string,recipient:string,amountOut:number|BigNumber,amountInMaximum:number|BigNumber}, options?: number|BigNumber|TransactionOptions) => Promise<BigNumber>;
        txData: (params:{path:string,recipient:string,amountOut:number|BigNumber,amountInMaximum:number|BigNumber}, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    exactOutputSingle: {
        (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,amountOut:number|BigNumber,amountInMaximum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,amountOut:number|BigNumber,amountInMaximum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions) => Promise<BigNumber>;
        txData: (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,amountOut:number|BigNumber,amountInMaximum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    factory: {
        (options?: TransactionOptions): Promise<string>;
    }
    factoryV2: {
        (options?: TransactionOptions): Promise<string>;
    }
    getApprovalType: {
        (params: IGetApprovalTypeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IGetApprovalTypeParams, options?: TransactionOptions) => Promise<BigNumber>;
        txData: (params: IGetApprovalTypeParams, options?: TransactionOptions) => Promise<string>;
    }
    increaseLiquidity: {
        (params:{token0:string,token1:string,tokenId:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params:{token0:string,token1:string,tokenId:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber}, options?: number|BigNumber|TransactionOptions) => Promise<string>;
        txData: (params:{token0:string,token1:string,tokenId:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber}, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    mint: {
        (params:{token0:string,token1:string,fee:number|BigNumber,tickLower:number|BigNumber,tickUpper:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,recipient:string}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params:{token0:string,token1:string,fee:number|BigNumber,tickLower:number|BigNumber,tickUpper:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,recipient:string}, options?: number|BigNumber|TransactionOptions) => Promise<string>;
        txData: (params:{token0:string,token1:string,fee:number|BigNumber,tickLower:number|BigNumber,tickUpper:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,recipient:string}, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    multicall: {
        (params: IMulticallParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IMulticallParams, options?: number|BigNumber|TransactionOptions) => Promise<string[]>;
        txData: (params: IMulticallParams, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    multicall_1: {
        (params: IMulticall_1Params, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IMulticall_1Params, options?: number|BigNumber|TransactionOptions) => Promise<string[]>;
        txData: (params: IMulticall_1Params, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    multicall_2: {
        (data:string[], options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (data:string[], options?: number|BigNumber|TransactionOptions) => Promise<string[]>;
        txData: (data:string[], options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    positionManager: {
        (options?: TransactionOptions): Promise<string>;
    }
    pull: {
        (params: IPullParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IPullParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (params: IPullParams, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    refundETH: {
        (options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    selfPermit: {
        (params: ISelfPermitParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISelfPermitParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (params: ISelfPermitParams, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    selfPermitAllowed: {
        (params: ISelfPermitAllowedParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISelfPermitAllowedParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (params: ISelfPermitAllowedParams, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    selfPermitAllowedIfNecessary: {
        (params: ISelfPermitAllowedIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISelfPermitAllowedIfNecessaryParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (params: ISelfPermitAllowedIfNecessaryParams, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    selfPermitIfNecessary: {
        (params: ISelfPermitIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISelfPermitIfNecessaryParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (params: ISelfPermitIfNecessaryParams, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams, options?: number|BigNumber|TransactionOptions) => Promise<BigNumber>;
        txData: (params: ISwapExactTokensForTokensParams, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams, options?: number|BigNumber|TransactionOptions) => Promise<BigNumber>;
        txData: (params: ISwapTokensForExactTokensParams, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    sweepToken: {
        (params: ISweepTokenParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISweepTokenParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (params: ISweepTokenParams, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    sweepToken_1: {
        (params: ISweepToken_1Params, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISweepToken_1Params, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (params: ISweepToken_1Params, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    sweepTokenWithFee: {
        (params: ISweepTokenWithFeeParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISweepTokenWithFeeParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (params: ISweepTokenWithFeeParams, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    sweepTokenWithFee_1: {
        (params: ISweepTokenWithFee_1Params, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISweepTokenWithFee_1Params, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (params: ISweepTokenWithFee_1Params, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    uniswapV3SwapCallback: {
        (params: IUniswapV3SwapCallbackParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUniswapV3SwapCallbackParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IUniswapV3SwapCallbackParams, options?: TransactionOptions) => Promise<string>;
    }
    unwrapWETH9: {
        (params: IUnwrapWETH9Params, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnwrapWETH9Params, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (params: IUnwrapWETH9Params, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    unwrapWETH9_1: {
        (amountMinimum:number|BigNumber, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (amountMinimum:number|BigNumber, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (amountMinimum:number|BigNumber, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    unwrapWETH9WithFee: {
        (params: IUnwrapWETH9WithFeeParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnwrapWETH9WithFeeParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (params: IUnwrapWETH9WithFeeParams, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    unwrapWETH9WithFee_1: {
        (params: IUnwrapWETH9WithFee_1Params, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnwrapWETH9WithFee_1Params, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (params: IUnwrapWETH9WithFee_1Params, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    wrapETH: {
        (value:number|BigNumber, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (value:number|BigNumber, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (value:number|BigNumber, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    private assign(){
        let WETH9_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('WETH9',[],options);
            return result;
        }
        this.WETH9 = WETH9_call
        let checkOracleSlippageParams = (params: ICheckOracleSlippageParams) => [this.wallet.utils.stringToBytes(params.paths),this.wallet.utils.toString(params.amounts),this.wallet.utils.toString(params.maximumTickDivergence),this.wallet.utils.toString(params.secondsAgo)];
        let checkOracleSlippage_call = async (params: ICheckOracleSlippageParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('checkOracleSlippage',checkOracleSlippageParams(params),options);
            return;
        }
        this.checkOracleSlippage = checkOracleSlippage_call
        let checkOracleSlippage_1Params = (params: ICheckOracleSlippage_1Params) => [this.wallet.utils.stringToBytes(params.path),this.wallet.utils.toString(params.maximumTickDivergence),this.wallet.utils.toString(params.secondsAgo)];
        let checkOracleSlippage_1_call = async (params: ICheckOracleSlippage_1Params, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('checkOracleSlippage',checkOracleSlippage_1Params(params),options);
            return;
        }
        this.checkOracleSlippage_1 = checkOracleSlippage_1_call
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
        let positionManager_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('positionManager',[],options);
            return result;
        }
        this.positionManager = positionManager_call
        let approveMax_send = async (token:string, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('approveMax',[token],options);
            return result;
        }
        let approveMax_call = async (token:string, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('approveMax',[token],options);
            return;
        }
        let approveMax_txData = async (token:string, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('approveMax',[token],options);
            return result;
        }
        this.approveMax = Object.assign(approveMax_send, {
            call:approveMax_call
            , txData:approveMax_txData
        });
        let approveMaxMinusOne_send = async (token:string, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('approveMaxMinusOne',[token],options);
            return result;
        }
        let approveMaxMinusOne_call = async (token:string, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('approveMaxMinusOne',[token],options);
            return;
        }
        let approveMaxMinusOne_txData = async (token:string, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('approveMaxMinusOne',[token],options);
            return result;
        }
        this.approveMaxMinusOne = Object.assign(approveMaxMinusOne_send, {
            call:approveMaxMinusOne_call
            , txData:approveMaxMinusOne_txData
        });
        let approveZeroThenMax_send = async (token:string, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('approveZeroThenMax',[token],options);
            return result;
        }
        let approveZeroThenMax_call = async (token:string, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('approveZeroThenMax',[token],options);
            return;
        }
        let approveZeroThenMax_txData = async (token:string, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('approveZeroThenMax',[token],options);
            return result;
        }
        this.approveZeroThenMax = Object.assign(approveZeroThenMax_send, {
            call:approveZeroThenMax_call
            , txData:approveZeroThenMax_txData
        });
        let approveZeroThenMaxMinusOne_send = async (token:string, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('approveZeroThenMaxMinusOne',[token],options);
            return result;
        }
        let approveZeroThenMaxMinusOne_call = async (token:string, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('approveZeroThenMaxMinusOne',[token],options);
            return;
        }
        let approveZeroThenMaxMinusOne_txData = async (token:string, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('approveZeroThenMaxMinusOne',[token],options);
            return result;
        }
        this.approveZeroThenMaxMinusOne = Object.assign(approveZeroThenMaxMinusOne_send, {
            call:approveZeroThenMaxMinusOne_call
            , txData:approveZeroThenMaxMinusOne_txData
        });
        let callPositionManager_send = async (data:string, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('callPositionManager',[this.wallet.utils.stringToBytes(data)],options);
            return result;
        }
        let callPositionManager_call = async (data:string, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.call('callPositionManager',[this.wallet.utils.stringToBytes(data)],options);
            return result;
        }
        let callPositionManager_txData = async (data:string, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('callPositionManager',[this.wallet.utils.stringToBytes(data)],options);
            return result;
        }
        this.callPositionManager = Object.assign(callPositionManager_send, {
            call:callPositionManager_call
            , txData:callPositionManager_txData
        });
        let exactInput_send = async (params:{path:string,recipient:string,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('exactInput',[[this.wallet.utils.stringToBytes(params.path),params.recipient,this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMinimum)]],options);
            return result;
        }
        let exactInput_call = async (params:{path:string,recipient:string,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('exactInput',[[this.wallet.utils.stringToBytes(params.path),params.recipient,this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMinimum)]],options);
            return new BigNumber(result);
        }
        let exactInput_txData = async (params:{path:string,recipient:string,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('exactInput',[[this.wallet.utils.stringToBytes(params.path),params.recipient,this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMinimum)]],options);
            return result;
        }
        this.exactInput = Object.assign(exactInput_send, {
            call:exactInput_call
            , txData:exactInput_txData
        });
        let exactInputSingle_send = async (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('exactInputSingle',[[params.tokenIn,params.tokenOut,this.wallet.utils.toString(params.fee),params.recipient,this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMinimum),this.wallet.utils.toString(params.sqrtPriceLimitX96)]],options);
            return result;
        }
        let exactInputSingle_call = async (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('exactInputSingle',[[params.tokenIn,params.tokenOut,this.wallet.utils.toString(params.fee),params.recipient,this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMinimum),this.wallet.utils.toString(params.sqrtPriceLimitX96)]],options);
            return new BigNumber(result);
        }
        let exactInputSingle_txData = async (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,amountIn:number|BigNumber,amountOutMinimum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('exactInputSingle',[[params.tokenIn,params.tokenOut,this.wallet.utils.toString(params.fee),params.recipient,this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMinimum),this.wallet.utils.toString(params.sqrtPriceLimitX96)]],options);
            return result;
        }
        this.exactInputSingle = Object.assign(exactInputSingle_send, {
            call:exactInputSingle_call
            , txData:exactInputSingle_txData
        });
        let exactOutput_send = async (params:{path:string,recipient:string,amountOut:number|BigNumber,amountInMaximum:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('exactOutput',[[this.wallet.utils.stringToBytes(params.path),params.recipient,this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMaximum)]],options);
            return result;
        }
        let exactOutput_call = async (params:{path:string,recipient:string,amountOut:number|BigNumber,amountInMaximum:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('exactOutput',[[this.wallet.utils.stringToBytes(params.path),params.recipient,this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMaximum)]],options);
            return new BigNumber(result);
        }
        let exactOutput_txData = async (params:{path:string,recipient:string,amountOut:number|BigNumber,amountInMaximum:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('exactOutput',[[this.wallet.utils.stringToBytes(params.path),params.recipient,this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMaximum)]],options);
            return result;
        }
        this.exactOutput = Object.assign(exactOutput_send, {
            call:exactOutput_call
            , txData:exactOutput_txData
        });
        let exactOutputSingle_send = async (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,amountOut:number|BigNumber,amountInMaximum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('exactOutputSingle',[[params.tokenIn,params.tokenOut,this.wallet.utils.toString(params.fee),params.recipient,this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMaximum),this.wallet.utils.toString(params.sqrtPriceLimitX96)]],options);
            return result;
        }
        let exactOutputSingle_call = async (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,amountOut:number|BigNumber,amountInMaximum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('exactOutputSingle',[[params.tokenIn,params.tokenOut,this.wallet.utils.toString(params.fee),params.recipient,this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMaximum),this.wallet.utils.toString(params.sqrtPriceLimitX96)]],options);
            return new BigNumber(result);
        }
        let exactOutputSingle_txData = async (params:{tokenIn:string,tokenOut:string,fee:number|BigNumber,recipient:string,amountOut:number|BigNumber,amountInMaximum:number|BigNumber,sqrtPriceLimitX96:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('exactOutputSingle',[[params.tokenIn,params.tokenOut,this.wallet.utils.toString(params.fee),params.recipient,this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMaximum),this.wallet.utils.toString(params.sqrtPriceLimitX96)]],options);
            return result;
        }
        this.exactOutputSingle = Object.assign(exactOutputSingle_send, {
            call:exactOutputSingle_call
            , txData:exactOutputSingle_txData
        });
        let getApprovalTypeParams = (params: IGetApprovalTypeParams) => [params.token,this.wallet.utils.toString(params.amount)];
        let getApprovalType_send = async (params: IGetApprovalTypeParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('getApprovalType',getApprovalTypeParams(params),options);
            return result;
        }
        let getApprovalType_call = async (params: IGetApprovalTypeParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getApprovalType',getApprovalTypeParams(params),options);
            return new BigNumber(result);
        }
        let getApprovalType_txData = async (params: IGetApprovalTypeParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('getApprovalType',getApprovalTypeParams(params),options);
            return result;
        }
        this.getApprovalType = Object.assign(getApprovalType_send, {
            call:getApprovalType_call
            , txData:getApprovalType_txData
        });
        let increaseLiquidity_send = async (params:{token0:string,token1:string,tokenId:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('increaseLiquidity',[[params.token0,params.token1,this.wallet.utils.toString(params.tokenId),this.wallet.utils.toString(params.amount0Min),this.wallet.utils.toString(params.amount1Min)]],options);
            return result;
        }
        let increaseLiquidity_call = async (params:{token0:string,token1:string,tokenId:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.call('increaseLiquidity',[[params.token0,params.token1,this.wallet.utils.toString(params.tokenId),this.wallet.utils.toString(params.amount0Min),this.wallet.utils.toString(params.amount1Min)]],options);
            return result;
        }
        let increaseLiquidity_txData = async (params:{token0:string,token1:string,tokenId:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('increaseLiquidity',[[params.token0,params.token1,this.wallet.utils.toString(params.tokenId),this.wallet.utils.toString(params.amount0Min),this.wallet.utils.toString(params.amount1Min)]],options);
            return result;
        }
        this.increaseLiquidity = Object.assign(increaseLiquidity_send, {
            call:increaseLiquidity_call
            , txData:increaseLiquidity_txData
        });
        let mint_send = async (params:{token0:string,token1:string,fee:number|BigNumber,tickLower:number|BigNumber,tickUpper:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,recipient:string}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('mint',[[params.token0,params.token1,this.wallet.utils.toString(params.fee),this.wallet.utils.toString(params.tickLower),this.wallet.utils.toString(params.tickUpper),this.wallet.utils.toString(params.amount0Min),this.wallet.utils.toString(params.amount1Min),params.recipient]],options);
            return result;
        }
        let mint_call = async (params:{token0:string,token1:string,fee:number|BigNumber,tickLower:number|BigNumber,tickUpper:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,recipient:string}, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.call('mint',[[params.token0,params.token1,this.wallet.utils.toString(params.fee),this.wallet.utils.toString(params.tickLower),this.wallet.utils.toString(params.tickUpper),this.wallet.utils.toString(params.amount0Min),this.wallet.utils.toString(params.amount1Min),params.recipient]],options);
            return result;
        }
        let mint_txData = async (params:{token0:string,token1:string,fee:number|BigNumber,tickLower:number|BigNumber,tickUpper:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,recipient:string}, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('mint',[[params.token0,params.token1,this.wallet.utils.toString(params.fee),this.wallet.utils.toString(params.tickLower),this.wallet.utils.toString(params.tickUpper),this.wallet.utils.toString(params.amount0Min),this.wallet.utils.toString(params.amount1Min),params.recipient]],options);
            return result;
        }
        this.mint = Object.assign(mint_send, {
            call:mint_call
            , txData:mint_txData
        });
        let multicallParams = (params: IMulticallParams) => [this.wallet.utils.stringToBytes32(params.previousBlockhash),this.wallet.utils.stringToBytes(params.data)];
        let multicall_send = async (params: IMulticallParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('multicall',multicallParams(params),options);
            return result;
        }
        let multicall_call = async (params: IMulticallParams, options?: number|BigNumber|TransactionOptions): Promise<string[]> => {
            let result = await this.call('multicall',multicallParams(params),options);
            return result;
        }
        let multicall_txData = async (params: IMulticallParams, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('multicall',multicallParams(params),options);
            return result;
        }
        this.multicall = Object.assign(multicall_send, {
            call:multicall_call
            , txData:multicall_txData
        });
        let multicall_1Params = (params: IMulticall_1Params) => [this.wallet.utils.toString(params.deadline),this.wallet.utils.stringToBytes(params.data)];
        let multicall_1_send = async (params: IMulticall_1Params, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('multicall',multicall_1Params(params),options);
            return result;
        }
        let multicall_1_call = async (params: IMulticall_1Params, options?: number|BigNumber|TransactionOptions): Promise<string[]> => {
            let result = await this.call('multicall',multicall_1Params(params),options);
            return result;
        }
        let multicall_1_txData = async (params: IMulticall_1Params, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('multicall',multicall_1Params(params),options);
            return result;
        }
        this.multicall_1 = Object.assign(multicall_1_send, {
            call:multicall_1_call
            , txData:multicall_1_txData
        });
        let multicall_2_send = async (data:string[], options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('multicall',[this.wallet.utils.stringToBytes(data)],options);
            return result;
        }
        let multicall_2_call = async (data:string[], options?: number|BigNumber|TransactionOptions): Promise<string[]> => {
            let result = await this.call('multicall',[this.wallet.utils.stringToBytes(data)],options);
            return result;
        }
        let multicall_2_txData = async (data:string[], options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('multicall',[this.wallet.utils.stringToBytes(data)],options);
            return result;
        }
        this.multicall_2 = Object.assign(multicall_2_send, {
            call:multicall_2_call
            , txData:multicall_2_txData
        });
        let pullParams = (params: IPullParams) => [params.token,this.wallet.utils.toString(params.value)];
        let pull_send = async (params: IPullParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('pull',pullParams(params),options);
            return result;
        }
        let pull_call = async (params: IPullParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('pull',pullParams(params),options);
            return;
        }
        let pull_txData = async (params: IPullParams, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('pull',pullParams(params),options);
            return result;
        }
        this.pull = Object.assign(pull_send, {
            call:pull_call
            , txData:pull_txData
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
        let selfPermitParams = (params: ISelfPermitParams) => [params.token,this.wallet.utils.toString(params.value),this.wallet.utils.toString(params.deadline),this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let selfPermit_send = async (params: ISelfPermitParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('selfPermit',selfPermitParams(params),options);
            return result;
        }
        let selfPermit_call = async (params: ISelfPermitParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('selfPermit',selfPermitParams(params),options);
            return;
        }
        let selfPermit_txData = async (params: ISelfPermitParams, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('selfPermit',selfPermitParams(params),options);
            return result;
        }
        this.selfPermit = Object.assign(selfPermit_send, {
            call:selfPermit_call
            , txData:selfPermit_txData
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
        let selfPermitAllowed_txData = async (params: ISelfPermitAllowedParams, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('selfPermitAllowed',selfPermitAllowedParams(params),options);
            return result;
        }
        this.selfPermitAllowed = Object.assign(selfPermitAllowed_send, {
            call:selfPermitAllowed_call
            , txData:selfPermitAllowed_txData
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
        let selfPermitAllowedIfNecessary_txData = async (params: ISelfPermitAllowedIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('selfPermitAllowedIfNecessary',selfPermitAllowedIfNecessaryParams(params),options);
            return result;
        }
        this.selfPermitAllowedIfNecessary = Object.assign(selfPermitAllowedIfNecessary_send, {
            call:selfPermitAllowedIfNecessary_call
            , txData:selfPermitAllowedIfNecessary_txData
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
        let selfPermitIfNecessary_txData = async (params: ISelfPermitIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('selfPermitIfNecessary',selfPermitIfNecessaryParams(params),options);
            return result;
        }
        this.selfPermitIfNecessary = Object.assign(selfPermitIfNecessary_send, {
            call:selfPermitIfNecessary_call
            , txData:selfPermitIfNecessary_txData
        });
        let swapExactTokensForTokensParams = (params: ISwapExactTokensForTokensParams) => [this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMin),params.path,params.to];
        let swapExactTokensForTokens_send = async (params: ISwapExactTokensForTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForTokens',swapExactTokensForTokensParams(params),options);
            return result;
        }
        let swapExactTokensForTokens_call = async (params: ISwapExactTokensForTokensParams, options?: number|BigNumber|TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('swapExactTokensForTokens',swapExactTokensForTokensParams(params),options);
            return new BigNumber(result);
        }
        let swapExactTokensForTokens_txData = async (params: ISwapExactTokensForTokensParams, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('swapExactTokensForTokens',swapExactTokensForTokensParams(params),options);
            return result;
        }
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call:swapExactTokensForTokens_call
            , txData:swapExactTokensForTokens_txData
        });
        let swapTokensForExactTokensParams = (params: ISwapTokensForExactTokensParams) => [this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMax),params.path,params.to];
        let swapTokensForExactTokens_send = async (params: ISwapTokensForExactTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapTokensForExactTokens',swapTokensForExactTokensParams(params),options);
            return result;
        }
        let swapTokensForExactTokens_call = async (params: ISwapTokensForExactTokensParams, options?: number|BigNumber|TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('swapTokensForExactTokens',swapTokensForExactTokensParams(params),options);
            return new BigNumber(result);
        }
        let swapTokensForExactTokens_txData = async (params: ISwapTokensForExactTokensParams, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('swapTokensForExactTokens',swapTokensForExactTokensParams(params),options);
            return result;
        }
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call:swapTokensForExactTokens_call
            , txData:swapTokensForExactTokens_txData
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
        let sweepToken_1Params = (params: ISweepToken_1Params) => [params.token,this.wallet.utils.toString(params.amountMinimum)];
        let sweepToken_1_send = async (params: ISweepToken_1Params, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('sweepToken',sweepToken_1Params(params),options);
            return result;
        }
        let sweepToken_1_call = async (params: ISweepToken_1Params, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('sweepToken',sweepToken_1Params(params),options);
            return;
        }
        let sweepToken_1_txData = async (params: ISweepToken_1Params, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('sweepToken',sweepToken_1Params(params),options);
            return result;
        }
        this.sweepToken_1 = Object.assign(sweepToken_1_send, {
            call:sweepToken_1_call
            , txData:sweepToken_1_txData
        });
        let sweepTokenWithFeeParams = (params: ISweepTokenWithFeeParams) => [params.token,this.wallet.utils.toString(params.amountMinimum),this.wallet.utils.toString(params.feeBips),params.feeRecipient];
        let sweepTokenWithFee_send = async (params: ISweepTokenWithFeeParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('sweepTokenWithFee',sweepTokenWithFeeParams(params),options);
            return result;
        }
        let sweepTokenWithFee_call = async (params: ISweepTokenWithFeeParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('sweepTokenWithFee',sweepTokenWithFeeParams(params),options);
            return;
        }
        let sweepTokenWithFee_txData = async (params: ISweepTokenWithFeeParams, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('sweepTokenWithFee',sweepTokenWithFeeParams(params),options);
            return result;
        }
        this.sweepTokenWithFee = Object.assign(sweepTokenWithFee_send, {
            call:sweepTokenWithFee_call
            , txData:sweepTokenWithFee_txData
        });
        let sweepTokenWithFee_1Params = (params: ISweepTokenWithFee_1Params) => [params.token,this.wallet.utils.toString(params.amountMinimum),params.recipient,this.wallet.utils.toString(params.feeBips),params.feeRecipient];
        let sweepTokenWithFee_1_send = async (params: ISweepTokenWithFee_1Params, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('sweepTokenWithFee',sweepTokenWithFee_1Params(params),options);
            return result;
        }
        let sweepTokenWithFee_1_call = async (params: ISweepTokenWithFee_1Params, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('sweepTokenWithFee',sweepTokenWithFee_1Params(params),options);
            return;
        }
        let sweepTokenWithFee_1_txData = async (params: ISweepTokenWithFee_1Params, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('sweepTokenWithFee',sweepTokenWithFee_1Params(params),options);
            return result;
        }
        this.sweepTokenWithFee_1 = Object.assign(sweepTokenWithFee_1_send, {
            call:sweepTokenWithFee_1_call
            , txData:sweepTokenWithFee_1_txData
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
        let uniswapV3SwapCallback_txData = async (params: IUniswapV3SwapCallbackParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('uniswapV3SwapCallback',uniswapV3SwapCallbackParams(params),options);
            return result;
        }
        this.uniswapV3SwapCallback = Object.assign(uniswapV3SwapCallback_send, {
            call:uniswapV3SwapCallback_call
            , txData:uniswapV3SwapCallback_txData
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
        let unwrapWETH9_1_send = async (amountMinimum:number|BigNumber, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('unwrapWETH9',[this.wallet.utils.toString(amountMinimum)],options);
            return result;
        }
        let unwrapWETH9_1_call = async (amountMinimum:number|BigNumber, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('unwrapWETH9',[this.wallet.utils.toString(amountMinimum)],options);
            return;
        }
        let unwrapWETH9_1_txData = async (amountMinimum:number|BigNumber, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('unwrapWETH9',[this.wallet.utils.toString(amountMinimum)],options);
            return result;
        }
        this.unwrapWETH9_1 = Object.assign(unwrapWETH9_1_send, {
            call:unwrapWETH9_1_call
            , txData:unwrapWETH9_1_txData
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
        let unwrapWETH9WithFee_txData = async (params: IUnwrapWETH9WithFeeParams, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('unwrapWETH9WithFee',unwrapWETH9WithFeeParams(params),options);
            return result;
        }
        this.unwrapWETH9WithFee = Object.assign(unwrapWETH9WithFee_send, {
            call:unwrapWETH9WithFee_call
            , txData:unwrapWETH9WithFee_txData
        });
        let unwrapWETH9WithFee_1Params = (params: IUnwrapWETH9WithFee_1Params) => [this.wallet.utils.toString(params.amountMinimum),this.wallet.utils.toString(params.feeBips),params.feeRecipient];
        let unwrapWETH9WithFee_1_send = async (params: IUnwrapWETH9WithFee_1Params, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('unwrapWETH9WithFee',unwrapWETH9WithFee_1Params(params),options);
            return result;
        }
        let unwrapWETH9WithFee_1_call = async (params: IUnwrapWETH9WithFee_1Params, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('unwrapWETH9WithFee',unwrapWETH9WithFee_1Params(params),options);
            return;
        }
        let unwrapWETH9WithFee_1_txData = async (params: IUnwrapWETH9WithFee_1Params, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('unwrapWETH9WithFee',unwrapWETH9WithFee_1Params(params),options);
            return result;
        }
        this.unwrapWETH9WithFee_1 = Object.assign(unwrapWETH9WithFee_1_send, {
            call:unwrapWETH9WithFee_1_call
            , txData:unwrapWETH9WithFee_1_txData
        });
        let wrapETH_send = async (value:number|BigNumber, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('wrapETH',[this.wallet.utils.toString(value)],options);
            return result;
        }
        let wrapETH_call = async (value:number|BigNumber, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('wrapETH',[this.wallet.utils.toString(value)],options);
            return;
        }
        let wrapETH_txData = async (value:number|BigNumber, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('wrapETH',[this.wallet.utils.toString(value)],options);
            return result;
        }
        this.wrapETH = Object.assign(wrapETH_send, {
            call:wrapETH_call
            , txData:wrapETH_txData
        });
    }
}
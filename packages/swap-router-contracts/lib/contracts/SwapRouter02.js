"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapRouter02 = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const SwapRouter02_json_1 = __importDefault(require("./SwapRouter02.json"));
class SwapRouter02 extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, SwapRouter02_json_1.default.abi, SwapRouter02_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.factoryV2, params.factoryV3, params.positionManager, params.WETH9], options);
    }
    assign() {
        let WETH9_call = async (options) => {
            let result = await this.call('WETH9', [], options);
            return result;
        };
        this.WETH9 = WETH9_call;
        let checkOracleSlippageParams = (params) => [this.wallet.utils.stringToBytes(params.paths), this.wallet.utils.toString(params.amounts), this.wallet.utils.toString(params.maximumTickDivergence), this.wallet.utils.toString(params.secondsAgo)];
        let checkOracleSlippage_call = async (params, options) => {
            let result = await this.call('checkOracleSlippage', checkOracleSlippageParams(params), options);
            return;
        };
        this.checkOracleSlippage = checkOracleSlippage_call;
        let checkOracleSlippage_1Params = (params) => [this.wallet.utils.stringToBytes(params.path), this.wallet.utils.toString(params.maximumTickDivergence), this.wallet.utils.toString(params.secondsAgo)];
        let checkOracleSlippage_1_call = async (params, options) => {
            let result = await this.call('checkOracleSlippage', checkOracleSlippage_1Params(params), options);
            return;
        };
        this.checkOracleSlippage_1 = checkOracleSlippage_1_call;
        let factory_call = async (options) => {
            let result = await this.call('factory', [], options);
            return result;
        };
        this.factory = factory_call;
        let factoryV2_call = async (options) => {
            let result = await this.call('factoryV2', [], options);
            return result;
        };
        this.factoryV2 = factoryV2_call;
        let positionManager_call = async (options) => {
            let result = await this.call('positionManager', [], options);
            return result;
        };
        this.positionManager = positionManager_call;
        let approveMax_send = async (token, options) => {
            let result = await this.send('approveMax', [token], options);
            return result;
        };
        let approveMax_call = async (token, options) => {
            let result = await this.call('approveMax', [token], options);
            return;
        };
        this.approveMax = Object.assign(approveMax_send, {
            call: approveMax_call
        });
        let approveMaxMinusOne_send = async (token, options) => {
            let result = await this.send('approveMaxMinusOne', [token], options);
            return result;
        };
        let approveMaxMinusOne_call = async (token, options) => {
            let result = await this.call('approveMaxMinusOne', [token], options);
            return;
        };
        this.approveMaxMinusOne = Object.assign(approveMaxMinusOne_send, {
            call: approveMaxMinusOne_call
        });
        let approveZeroThenMax_send = async (token, options) => {
            let result = await this.send('approveZeroThenMax', [token], options);
            return result;
        };
        let approveZeroThenMax_call = async (token, options) => {
            let result = await this.call('approveZeroThenMax', [token], options);
            return;
        };
        this.approveZeroThenMax = Object.assign(approveZeroThenMax_send, {
            call: approveZeroThenMax_call
        });
        let approveZeroThenMaxMinusOne_send = async (token, options) => {
            let result = await this.send('approveZeroThenMaxMinusOne', [token], options);
            return result;
        };
        let approveZeroThenMaxMinusOne_call = async (token, options) => {
            let result = await this.call('approveZeroThenMaxMinusOne', [token], options);
            return;
        };
        this.approveZeroThenMaxMinusOne = Object.assign(approveZeroThenMaxMinusOne_send, {
            call: approveZeroThenMaxMinusOne_call
        });
        let callPositionManager_send = async (data, options) => {
            let result = await this.send('callPositionManager', [this.wallet.utils.stringToBytes(data)], options);
            return result;
        };
        let callPositionManager_call = async (data, options) => {
            let result = await this.call('callPositionManager', [this.wallet.utils.stringToBytes(data)], options);
            return result;
        };
        this.callPositionManager = Object.assign(callPositionManager_send, {
            call: callPositionManager_call
        });
        let exactInput_send = async (params, options) => {
            let result = await this.send('exactInput', [[this.wallet.utils.stringToBytes(params.path), params.recipient, this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMinimum)]], options);
            return result;
        };
        let exactInput_call = async (params, options) => {
            let result = await this.call('exactInput', [[this.wallet.utils.stringToBytes(params.path), params.recipient, this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMinimum)]], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.exactInput = Object.assign(exactInput_send, {
            call: exactInput_call
        });
        let exactInputSingle_send = async (params, options) => {
            let result = await this.send('exactInputSingle', [[params.tokenIn, params.tokenOut, this.wallet.utils.toString(params.fee), params.recipient, this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMinimum), this.wallet.utils.toString(params.sqrtPriceLimitX96)]], options);
            return result;
        };
        let exactInputSingle_call = async (params, options) => {
            let result = await this.call('exactInputSingle', [[params.tokenIn, params.tokenOut, this.wallet.utils.toString(params.fee), params.recipient, this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMinimum), this.wallet.utils.toString(params.sqrtPriceLimitX96)]], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.exactInputSingle = Object.assign(exactInputSingle_send, {
            call: exactInputSingle_call
        });
        let exactOutput_send = async (params, options) => {
            let result = await this.send('exactOutput', [[this.wallet.utils.stringToBytes(params.path), params.recipient, this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMaximum)]], options);
            return result;
        };
        let exactOutput_call = async (params, options) => {
            let result = await this.call('exactOutput', [[this.wallet.utils.stringToBytes(params.path), params.recipient, this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMaximum)]], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.exactOutput = Object.assign(exactOutput_send, {
            call: exactOutput_call
        });
        let exactOutputSingle_send = async (params, options) => {
            let result = await this.send('exactOutputSingle', [[params.tokenIn, params.tokenOut, this.wallet.utils.toString(params.fee), params.recipient, this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMaximum), this.wallet.utils.toString(params.sqrtPriceLimitX96)]], options);
            return result;
        };
        let exactOutputSingle_call = async (params, options) => {
            let result = await this.call('exactOutputSingle', [[params.tokenIn, params.tokenOut, this.wallet.utils.toString(params.fee), params.recipient, this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMaximum), this.wallet.utils.toString(params.sqrtPriceLimitX96)]], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.exactOutputSingle = Object.assign(exactOutputSingle_send, {
            call: exactOutputSingle_call
        });
        let getApprovalTypeParams = (params) => [params.token, this.wallet.utils.toString(params.amount)];
        let getApprovalType_send = async (params, options) => {
            let result = await this.send('getApprovalType', getApprovalTypeParams(params), options);
            return result;
        };
        let getApprovalType_call = async (params, options) => {
            let result = await this.call('getApprovalType', getApprovalTypeParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getApprovalType = Object.assign(getApprovalType_send, {
            call: getApprovalType_call
        });
        let increaseLiquidity_send = async (params, options) => {
            let result = await this.send('increaseLiquidity', [[params.token0, params.token1, this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.amount0Min), this.wallet.utils.toString(params.amount1Min)]], options);
            return result;
        };
        let increaseLiquidity_call = async (params, options) => {
            let result = await this.call('increaseLiquidity', [[params.token0, params.token1, this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.amount0Min), this.wallet.utils.toString(params.amount1Min)]], options);
            return result;
        };
        this.increaseLiquidity = Object.assign(increaseLiquidity_send, {
            call: increaseLiquidity_call
        });
        let mint_send = async (params, options) => {
            let result = await this.send('mint', [[params.token0, params.token1, this.wallet.utils.toString(params.fee), this.wallet.utils.toString(params.tickLower), this.wallet.utils.toString(params.tickUpper), this.wallet.utils.toString(params.amount0Min), this.wallet.utils.toString(params.amount1Min), params.recipient]], options);
            return result;
        };
        let mint_call = async (params, options) => {
            let result = await this.call('mint', [[params.token0, params.token1, this.wallet.utils.toString(params.fee), this.wallet.utils.toString(params.tickLower), this.wallet.utils.toString(params.tickUpper), this.wallet.utils.toString(params.amount0Min), this.wallet.utils.toString(params.amount1Min), params.recipient]], options);
            return result;
        };
        this.mint = Object.assign(mint_send, {
            call: mint_call
        });
        let multicallParams = (params) => [this.wallet.utils.stringToBytes32(params.previousBlockhash), this.wallet.utils.stringToBytes(params.data)];
        let multicall_send = async (params, options) => {
            let result = await this.send('multicall', multicallParams(params), options);
            return result;
        };
        let multicall_call = async (params, options) => {
            let result = await this.call('multicall', multicallParams(params), options);
            return result;
        };
        this.multicall = Object.assign(multicall_send, {
            call: multicall_call
        });
        let multicall_1Params = (params) => [this.wallet.utils.toString(params.deadline), this.wallet.utils.stringToBytes(params.data)];
        let multicall_1_send = async (params, options) => {
            let result = await this.send('multicall', multicall_1Params(params), options);
            return result;
        };
        let multicall_1_call = async (params, options) => {
            let result = await this.call('multicall', multicall_1Params(params), options);
            return result;
        };
        this.multicall_1 = Object.assign(multicall_1_send, {
            call: multicall_1_call
        });
        let multicall_2_send = async (data, options) => {
            let result = await this.send('multicall', [this.wallet.utils.stringToBytes(data)], options);
            return result;
        };
        let multicall_2_call = async (data, options) => {
            let result = await this.call('multicall', [this.wallet.utils.stringToBytes(data)], options);
            return result;
        };
        this.multicall_2 = Object.assign(multicall_2_send, {
            call: multicall_2_call
        });
        let pullParams = (params) => [params.token, this.wallet.utils.toString(params.value)];
        let pull_send = async (params, options) => {
            let result = await this.send('pull', pullParams(params), options);
            return result;
        };
        let pull_call = async (params, options) => {
            let result = await this.call('pull', pullParams(params), options);
            return;
        };
        this.pull = Object.assign(pull_send, {
            call: pull_call
        });
        let refundETH_send = async (options) => {
            let result = await this.send('refundETH', [], options);
            return result;
        };
        let refundETH_call = async (options) => {
            let result = await this.call('refundETH', [], options);
            return;
        };
        this.refundETH = Object.assign(refundETH_send, {
            call: refundETH_call
        });
        let selfPermitParams = (params) => [params.token, this.wallet.utils.toString(params.value), this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
        let selfPermit_send = async (params, options) => {
            let result = await this.send('selfPermit', selfPermitParams(params), options);
            return result;
        };
        let selfPermit_call = async (params, options) => {
            let result = await this.call('selfPermit', selfPermitParams(params), options);
            return;
        };
        this.selfPermit = Object.assign(selfPermit_send, {
            call: selfPermit_call
        });
        let selfPermitAllowedParams = (params) => [params.token, this.wallet.utils.toString(params.nonce), this.wallet.utils.toString(params.expiry), this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
        let selfPermitAllowed_send = async (params, options) => {
            let result = await this.send('selfPermitAllowed', selfPermitAllowedParams(params), options);
            return result;
        };
        let selfPermitAllowed_call = async (params, options) => {
            let result = await this.call('selfPermitAllowed', selfPermitAllowedParams(params), options);
            return;
        };
        this.selfPermitAllowed = Object.assign(selfPermitAllowed_send, {
            call: selfPermitAllowed_call
        });
        let selfPermitAllowedIfNecessaryParams = (params) => [params.token, this.wallet.utils.toString(params.nonce), this.wallet.utils.toString(params.expiry), this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
        let selfPermitAllowedIfNecessary_send = async (params, options) => {
            let result = await this.send('selfPermitAllowedIfNecessary', selfPermitAllowedIfNecessaryParams(params), options);
            return result;
        };
        let selfPermitAllowedIfNecessary_call = async (params, options) => {
            let result = await this.call('selfPermitAllowedIfNecessary', selfPermitAllowedIfNecessaryParams(params), options);
            return;
        };
        this.selfPermitAllowedIfNecessary = Object.assign(selfPermitAllowedIfNecessary_send, {
            call: selfPermitAllowedIfNecessary_call
        });
        let selfPermitIfNecessaryParams = (params) => [params.token, this.wallet.utils.toString(params.value), this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
        let selfPermitIfNecessary_send = async (params, options) => {
            let result = await this.send('selfPermitIfNecessary', selfPermitIfNecessaryParams(params), options);
            return result;
        };
        let selfPermitIfNecessary_call = async (params, options) => {
            let result = await this.call('selfPermitIfNecessary', selfPermitIfNecessaryParams(params), options);
            return;
        };
        this.selfPermitIfNecessary = Object.assign(selfPermitIfNecessary_send, {
            call: selfPermitIfNecessary_call
        });
        let swapExactTokensForTokensParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.path, params.to];
        let swapExactTokensForTokens_send = async (params, options) => {
            let result = await this.send('swapExactTokensForTokens', swapExactTokensForTokensParams(params), options);
            return result;
        };
        let swapExactTokensForTokens_call = async (params, options) => {
            let result = await this.call('swapExactTokensForTokens', swapExactTokensForTokensParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call: swapExactTokensForTokens_call
        });
        let swapTokensForExactTokensParams = (params) => [this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMax), params.path, params.to];
        let swapTokensForExactTokens_send = async (params, options) => {
            let result = await this.send('swapTokensForExactTokens', swapTokensForExactTokensParams(params), options);
            return result;
        };
        let swapTokensForExactTokens_call = async (params, options) => {
            let result = await this.call('swapTokensForExactTokens', swapTokensForExactTokensParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call: swapTokensForExactTokens_call
        });
        let sweepTokenParams = (params) => [params.token, this.wallet.utils.toString(params.amountMinimum), params.recipient];
        let sweepToken_send = async (params, options) => {
            let result = await this.send('sweepToken', sweepTokenParams(params), options);
            return result;
        };
        let sweepToken_call = async (params, options) => {
            let result = await this.call('sweepToken', sweepTokenParams(params), options);
            return;
        };
        this.sweepToken = Object.assign(sweepToken_send, {
            call: sweepToken_call
        });
        let sweepToken_1Params = (params) => [params.token, this.wallet.utils.toString(params.amountMinimum)];
        let sweepToken_1_send = async (params, options) => {
            let result = await this.send('sweepToken', sweepToken_1Params(params), options);
            return result;
        };
        let sweepToken_1_call = async (params, options) => {
            let result = await this.call('sweepToken', sweepToken_1Params(params), options);
            return;
        };
        this.sweepToken_1 = Object.assign(sweepToken_1_send, {
            call: sweepToken_1_call
        });
        let sweepTokenWithFeeParams = (params) => [params.token, this.wallet.utils.toString(params.amountMinimum), this.wallet.utils.toString(params.feeBips), params.feeRecipient];
        let sweepTokenWithFee_send = async (params, options) => {
            let result = await this.send('sweepTokenWithFee', sweepTokenWithFeeParams(params), options);
            return result;
        };
        let sweepTokenWithFee_call = async (params, options) => {
            let result = await this.call('sweepTokenWithFee', sweepTokenWithFeeParams(params), options);
            return;
        };
        this.sweepTokenWithFee = Object.assign(sweepTokenWithFee_send, {
            call: sweepTokenWithFee_call
        });
        let sweepTokenWithFee_1Params = (params) => [params.token, this.wallet.utils.toString(params.amountMinimum), params.recipient, this.wallet.utils.toString(params.feeBips), params.feeRecipient];
        let sweepTokenWithFee_1_send = async (params, options) => {
            let result = await this.send('sweepTokenWithFee', sweepTokenWithFee_1Params(params), options);
            return result;
        };
        let sweepTokenWithFee_1_call = async (params, options) => {
            let result = await this.call('sweepTokenWithFee', sweepTokenWithFee_1Params(params), options);
            return;
        };
        this.sweepTokenWithFee_1 = Object.assign(sweepTokenWithFee_1_send, {
            call: sweepTokenWithFee_1_call
        });
        let uniswapV3SwapCallbackParams = (params) => [this.wallet.utils.toString(params.amount0Delta), this.wallet.utils.toString(params.amount1Delta), this.wallet.utils.stringToBytes(params.data)];
        let uniswapV3SwapCallback_send = async (params, options) => {
            let result = await this.send('uniswapV3SwapCallback', uniswapV3SwapCallbackParams(params), options);
            return result;
        };
        let uniswapV3SwapCallback_call = async (params, options) => {
            let result = await this.call('uniswapV3SwapCallback', uniswapV3SwapCallbackParams(params), options);
            return;
        };
        this.uniswapV3SwapCallback = Object.assign(uniswapV3SwapCallback_send, {
            call: uniswapV3SwapCallback_call
        });
        let unwrapWETH9Params = (params) => [this.wallet.utils.toString(params.amountMinimum), params.recipient];
        let unwrapWETH9_send = async (params, options) => {
            let result = await this.send('unwrapWETH9', unwrapWETH9Params(params), options);
            return result;
        };
        let unwrapWETH9_call = async (params, options) => {
            let result = await this.call('unwrapWETH9', unwrapWETH9Params(params), options);
            return;
        };
        this.unwrapWETH9 = Object.assign(unwrapWETH9_send, {
            call: unwrapWETH9_call
        });
        let unwrapWETH9_1_send = async (amountMinimum, options) => {
            let result = await this.send('unwrapWETH9', [this.wallet.utils.toString(amountMinimum)], options);
            return result;
        };
        let unwrapWETH9_1_call = async (amountMinimum, options) => {
            let result = await this.call('unwrapWETH9', [this.wallet.utils.toString(amountMinimum)], options);
            return;
        };
        this.unwrapWETH9_1 = Object.assign(unwrapWETH9_1_send, {
            call: unwrapWETH9_1_call
        });
        let unwrapWETH9WithFeeParams = (params) => [this.wallet.utils.toString(params.amountMinimum), params.recipient, this.wallet.utils.toString(params.feeBips), params.feeRecipient];
        let unwrapWETH9WithFee_send = async (params, options) => {
            let result = await this.send('unwrapWETH9WithFee', unwrapWETH9WithFeeParams(params), options);
            return result;
        };
        let unwrapWETH9WithFee_call = async (params, options) => {
            let result = await this.call('unwrapWETH9WithFee', unwrapWETH9WithFeeParams(params), options);
            return;
        };
        this.unwrapWETH9WithFee = Object.assign(unwrapWETH9WithFee_send, {
            call: unwrapWETH9WithFee_call
        });
        let unwrapWETH9WithFee_1Params = (params) => [this.wallet.utils.toString(params.amountMinimum), this.wallet.utils.toString(params.feeBips), params.feeRecipient];
        let unwrapWETH9WithFee_1_send = async (params, options) => {
            let result = await this.send('unwrapWETH9WithFee', unwrapWETH9WithFee_1Params(params), options);
            return result;
        };
        let unwrapWETH9WithFee_1_call = async (params, options) => {
            let result = await this.call('unwrapWETH9WithFee', unwrapWETH9WithFee_1Params(params), options);
            return;
        };
        this.unwrapWETH9WithFee_1 = Object.assign(unwrapWETH9WithFee_1_send, {
            call: unwrapWETH9WithFee_1_call
        });
        let wrapETH_send = async (value, options) => {
            let result = await this.send('wrapETH', [this.wallet.utils.toString(value)], options);
            return result;
        };
        let wrapETH_call = async (value, options) => {
            let result = await this.call('wrapETH', [this.wallet.utils.toString(value)], options);
            return;
        };
        this.wrapETH = Object.assign(wrapETH_send, {
            call: wrapETH_call
        });
    }
}
SwapRouter02._abi = SwapRouter02_json_1.default.abi;
exports.SwapRouter02 = SwapRouter02;

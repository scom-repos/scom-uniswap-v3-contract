"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapRouter = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const SwapRouter_json_1 = __importDefault(require("./SwapRouter.json"));
class SwapRouter extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, SwapRouter_json_1.default.abi, SwapRouter_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.factory, params.WETH9], options);
    }
    assign() {
        let WETH9_call = async (options) => {
            let result = await this.call('WETH9', [], options);
            return result;
        };
        this.WETH9 = WETH9_call;
        let factory_call = async (options) => {
            let result = await this.call('factory', [], options);
            return result;
        };
        this.factory = factory_call;
        let exactInput_send = async (params, options) => {
            let result = await this.send('exactInput', [[this.wallet.utils.stringToBytes(params.path), params.recipient, this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMinimum)]], options);
            return result;
        };
        let exactInput_call = async (params, options) => {
            let result = await this.call('exactInput', [[this.wallet.utils.stringToBytes(params.path), params.recipient, this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMinimum)]], options);
            return new eth_contract_1.BigNumber(result);
        };
        let exactInput_txData = async (params, options) => {
            let result = await this.txData('exactInput', [[this.wallet.utils.stringToBytes(params.path), params.recipient, this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMinimum)]], options);
            return result;
        };
        this.exactInput = Object.assign(exactInput_send, {
            call: exactInput_call,
            txData: exactInput_txData
        });
        let exactInputSingle_send = async (params, options) => {
            let result = await this.send('exactInputSingle', [[params.tokenIn, params.tokenOut, this.wallet.utils.toString(params.fee), params.recipient, this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMinimum), this.wallet.utils.toString(params.sqrtPriceLimitX96)]], options);
            return result;
        };
        let exactInputSingle_call = async (params, options) => {
            let result = await this.call('exactInputSingle', [[params.tokenIn, params.tokenOut, this.wallet.utils.toString(params.fee), params.recipient, this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMinimum), this.wallet.utils.toString(params.sqrtPriceLimitX96)]], options);
            return new eth_contract_1.BigNumber(result);
        };
        let exactInputSingle_txData = async (params, options) => {
            let result = await this.txData('exactInputSingle', [[params.tokenIn, params.tokenOut, this.wallet.utils.toString(params.fee), params.recipient, this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMinimum), this.wallet.utils.toString(params.sqrtPriceLimitX96)]], options);
            return result;
        };
        this.exactInputSingle = Object.assign(exactInputSingle_send, {
            call: exactInputSingle_call,
            txData: exactInputSingle_txData
        });
        let exactOutput_send = async (params, options) => {
            let result = await this.send('exactOutput', [[this.wallet.utils.stringToBytes(params.path), params.recipient, this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMaximum)]], options);
            return result;
        };
        let exactOutput_call = async (params, options) => {
            let result = await this.call('exactOutput', [[this.wallet.utils.stringToBytes(params.path), params.recipient, this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMaximum)]], options);
            return new eth_contract_1.BigNumber(result);
        };
        let exactOutput_txData = async (params, options) => {
            let result = await this.txData('exactOutput', [[this.wallet.utils.stringToBytes(params.path), params.recipient, this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMaximum)]], options);
            return result;
        };
        this.exactOutput = Object.assign(exactOutput_send, {
            call: exactOutput_call,
            txData: exactOutput_txData
        });
        let exactOutputSingle_send = async (params, options) => {
            let result = await this.send('exactOutputSingle', [[params.tokenIn, params.tokenOut, this.wallet.utils.toString(params.fee), params.recipient, this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMaximum), this.wallet.utils.toString(params.sqrtPriceLimitX96)]], options);
            return result;
        };
        let exactOutputSingle_call = async (params, options) => {
            let result = await this.call('exactOutputSingle', [[params.tokenIn, params.tokenOut, this.wallet.utils.toString(params.fee), params.recipient, this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMaximum), this.wallet.utils.toString(params.sqrtPriceLimitX96)]], options);
            return new eth_contract_1.BigNumber(result);
        };
        let exactOutputSingle_txData = async (params, options) => {
            let result = await this.txData('exactOutputSingle', [[params.tokenIn, params.tokenOut, this.wallet.utils.toString(params.fee), params.recipient, this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMaximum), this.wallet.utils.toString(params.sqrtPriceLimitX96)]], options);
            return result;
        };
        this.exactOutputSingle = Object.assign(exactOutputSingle_send, {
            call: exactOutputSingle_call,
            txData: exactOutputSingle_txData
        });
        let multicall_send = async (data, options) => {
            let result = await this.send('multicall', [this.wallet.utils.stringToBytes(data)], options);
            return result;
        };
        let multicall_call = async (data, options) => {
            let result = await this.call('multicall', [this.wallet.utils.stringToBytes(data)], options);
            return result;
        };
        let multicall_txData = async (data, options) => {
            let result = await this.txData('multicall', [this.wallet.utils.stringToBytes(data)], options);
            return result;
        };
        this.multicall = Object.assign(multicall_send, {
            call: multicall_call,
            txData: multicall_txData
        });
        let refundETH_send = async (options) => {
            let result = await this.send('refundETH', [], options);
            return result;
        };
        let refundETH_call = async (options) => {
            let result = await this.call('refundETH', [], options);
            return;
        };
        let refundETH_txData = async (options) => {
            let result = await this.txData('refundETH', [], options);
            return result;
        };
        this.refundETH = Object.assign(refundETH_send, {
            call: refundETH_call,
            txData: refundETH_txData
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
        let selfPermit_txData = async (params, options) => {
            let result = await this.txData('selfPermit', selfPermitParams(params), options);
            return result;
        };
        this.selfPermit = Object.assign(selfPermit_send, {
            call: selfPermit_call,
            txData: selfPermit_txData
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
        let selfPermitAllowed_txData = async (params, options) => {
            let result = await this.txData('selfPermitAllowed', selfPermitAllowedParams(params), options);
            return result;
        };
        this.selfPermitAllowed = Object.assign(selfPermitAllowed_send, {
            call: selfPermitAllowed_call,
            txData: selfPermitAllowed_txData
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
        let selfPermitAllowedIfNecessary_txData = async (params, options) => {
            let result = await this.txData('selfPermitAllowedIfNecessary', selfPermitAllowedIfNecessaryParams(params), options);
            return result;
        };
        this.selfPermitAllowedIfNecessary = Object.assign(selfPermitAllowedIfNecessary_send, {
            call: selfPermitAllowedIfNecessary_call,
            txData: selfPermitAllowedIfNecessary_txData
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
        let selfPermitIfNecessary_txData = async (params, options) => {
            let result = await this.txData('selfPermitIfNecessary', selfPermitIfNecessaryParams(params), options);
            return result;
        };
        this.selfPermitIfNecessary = Object.assign(selfPermitIfNecessary_send, {
            call: selfPermitIfNecessary_call,
            txData: selfPermitIfNecessary_txData
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
        let sweepToken_txData = async (params, options) => {
            let result = await this.txData('sweepToken', sweepTokenParams(params), options);
            return result;
        };
        this.sweepToken = Object.assign(sweepToken_send, {
            call: sweepToken_call,
            txData: sweepToken_txData
        });
        let sweepTokenWithFeeParams = (params) => [params.token, this.wallet.utils.toString(params.amountMinimum), params.recipient, this.wallet.utils.toString(params.feeBips), params.feeRecipient];
        let sweepTokenWithFee_send = async (params, options) => {
            let result = await this.send('sweepTokenWithFee', sweepTokenWithFeeParams(params), options);
            return result;
        };
        let sweepTokenWithFee_call = async (params, options) => {
            let result = await this.call('sweepTokenWithFee', sweepTokenWithFeeParams(params), options);
            return;
        };
        let sweepTokenWithFee_txData = async (params, options) => {
            let result = await this.txData('sweepTokenWithFee', sweepTokenWithFeeParams(params), options);
            return result;
        };
        this.sweepTokenWithFee = Object.assign(sweepTokenWithFee_send, {
            call: sweepTokenWithFee_call,
            txData: sweepTokenWithFee_txData
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
        let uniswapV3SwapCallback_txData = async (params, options) => {
            let result = await this.txData('uniswapV3SwapCallback', uniswapV3SwapCallbackParams(params), options);
            return result;
        };
        this.uniswapV3SwapCallback = Object.assign(uniswapV3SwapCallback_send, {
            call: uniswapV3SwapCallback_call,
            txData: uniswapV3SwapCallback_txData
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
        let unwrapWETH9_txData = async (params, options) => {
            let result = await this.txData('unwrapWETH9', unwrapWETH9Params(params), options);
            return result;
        };
        this.unwrapWETH9 = Object.assign(unwrapWETH9_send, {
            call: unwrapWETH9_call,
            txData: unwrapWETH9_txData
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
        let unwrapWETH9WithFee_txData = async (params, options) => {
            let result = await this.txData('unwrapWETH9WithFee', unwrapWETH9WithFeeParams(params), options);
            return result;
        };
        this.unwrapWETH9WithFee = Object.assign(unwrapWETH9WithFee_send, {
            call: unwrapWETH9WithFee_call,
            txData: unwrapWETH9WithFee_txData
        });
    }
}
SwapRouter._abi = SwapRouter_json_1.default.abi;
exports.SwapRouter = SwapRouter;

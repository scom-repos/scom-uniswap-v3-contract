"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PairFlash = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const PairFlash_json_1 = __importDefault(require("./PairFlash.json"));
class PairFlash extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, PairFlash_json_1.default.abi, PairFlash_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.swapRouter, params.factory, params.WETH9], options);
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
        let swapRouter_call = async (options) => {
            let result = await this.call('swapRouter', [], options);
            return result;
        };
        this.swapRouter = swapRouter_call;
        let initFlash_send = async (params, options) => {
            let result = await this.send('initFlash', [[params.token0, params.token1, this.wallet.utils.toString(params.fee1), this.wallet.utils.toString(params.amount0), this.wallet.utils.toString(params.amount1), this.wallet.utils.toString(params.fee2), this.wallet.utils.toString(params.fee3)]], options);
            return result;
        };
        let initFlash_call = async (params, options) => {
            let result = await this.call('initFlash', [[params.token0, params.token1, this.wallet.utils.toString(params.fee1), this.wallet.utils.toString(params.amount0), this.wallet.utils.toString(params.amount1), this.wallet.utils.toString(params.fee2), this.wallet.utils.toString(params.fee3)]], options);
            return;
        };
        this.initFlash = Object.assign(initFlash_send, {
            call: initFlash_call
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
        let uniswapV3FlashCallbackParams = (params) => [this.wallet.utils.toString(params.fee0), this.wallet.utils.toString(params.fee1), this.wallet.utils.stringToBytes(params.data)];
        let uniswapV3FlashCallback_send = async (params, options) => {
            let result = await this.send('uniswapV3FlashCallback', uniswapV3FlashCallbackParams(params), options);
            return result;
        };
        let uniswapV3FlashCallback_call = async (params, options) => {
            let result = await this.call('uniswapV3FlashCallback', uniswapV3FlashCallbackParams(params), options);
            return;
        };
        this.uniswapV3FlashCallback = Object.assign(uniswapV3FlashCallback_send, {
            call: uniswapV3FlashCallback_call
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
    }
}
PairFlash._abi = PairFlash_json_1.default.abi;
exports.PairFlash = PairFlash;

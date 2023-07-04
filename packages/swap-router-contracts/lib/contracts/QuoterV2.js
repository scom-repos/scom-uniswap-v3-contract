"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoterV2 = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const QuoterV2_json_1 = __importDefault(require("./QuoterV2.json"));
class QuoterV2 extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, QuoterV2_json_1.default.abi, QuoterV2_json_1.default.bytecode);
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
        let uniswapV3SwapCallbackParams = (params) => [this.wallet.utils.toString(params.amount0Delta), this.wallet.utils.toString(params.amount1Delta), this.wallet.utils.stringToBytes(params.path)];
        let uniswapV3SwapCallback_call = async (params, options) => {
            let result = await this.call('uniswapV3SwapCallback', uniswapV3SwapCallbackParams(params), options);
            return;
        };
        this.uniswapV3SwapCallback = uniswapV3SwapCallback_call;
        let quoteExactInputParams = (params) => [this.wallet.utils.stringToBytes(params.path), this.wallet.utils.toString(params.amountIn)];
        let quoteExactInput_send = async (params, options) => {
            let result = await this.send('quoteExactInput', quoteExactInputParams(params), options);
            return result;
        };
        let quoteExactInput_call = async (params, options) => {
            let result = await this.call('quoteExactInput', quoteExactInputParams(params), options);
            return {
                amountOut: new eth_contract_1.BigNumber(result.amountOut),
                sqrtPriceX96AfterList: result.sqrtPriceX96AfterList.map(e => new eth_contract_1.BigNumber(e)),
                initializedTicksCrossedList: result.initializedTicksCrossedList.map(e => new eth_contract_1.BigNumber(e)),
                gasEstimate: new eth_contract_1.BigNumber(result.gasEstimate)
            };
        };
        let quoteExactInput_txData = async (params, options) => {
            let result = await this.txData('quoteExactInput', quoteExactInputParams(params), options);
            return result;
        };
        this.quoteExactInput = Object.assign(quoteExactInput_send, {
            call: quoteExactInput_call,
            txData: quoteExactInput_txData
        });
        let quoteExactInputSingle_send = async (params, options) => {
            let result = await this.send('quoteExactInputSingle', [[params.tokenIn, params.tokenOut, this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.fee), this.wallet.utils.toString(params.sqrtPriceLimitX96)]], options);
            return result;
        };
        let quoteExactInputSingle_call = async (params, options) => {
            let result = await this.call('quoteExactInputSingle', [[params.tokenIn, params.tokenOut, this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.fee), this.wallet.utils.toString(params.sqrtPriceLimitX96)]], options);
            return {
                amountOut: new eth_contract_1.BigNumber(result.amountOut),
                sqrtPriceX96After: new eth_contract_1.BigNumber(result.sqrtPriceX96After),
                initializedTicksCrossed: new eth_contract_1.BigNumber(result.initializedTicksCrossed),
                gasEstimate: new eth_contract_1.BigNumber(result.gasEstimate)
            };
        };
        let quoteExactInputSingle_txData = async (params, options) => {
            let result = await this.txData('quoteExactInputSingle', [[params.tokenIn, params.tokenOut, this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.fee), this.wallet.utils.toString(params.sqrtPriceLimitX96)]], options);
            return result;
        };
        this.quoteExactInputSingle = Object.assign(quoteExactInputSingle_send, {
            call: quoteExactInputSingle_call,
            txData: quoteExactInputSingle_txData
        });
        let quoteExactOutputParams = (params) => [this.wallet.utils.stringToBytes(params.path), this.wallet.utils.toString(params.amountOut)];
        let quoteExactOutput_send = async (params, options) => {
            let result = await this.send('quoteExactOutput', quoteExactOutputParams(params), options);
            return result;
        };
        let quoteExactOutput_call = async (params, options) => {
            let result = await this.call('quoteExactOutput', quoteExactOutputParams(params), options);
            return {
                amountIn: new eth_contract_1.BigNumber(result.amountIn),
                sqrtPriceX96AfterList: result.sqrtPriceX96AfterList.map(e => new eth_contract_1.BigNumber(e)),
                initializedTicksCrossedList: result.initializedTicksCrossedList.map(e => new eth_contract_1.BigNumber(e)),
                gasEstimate: new eth_contract_1.BigNumber(result.gasEstimate)
            };
        };
        let quoteExactOutput_txData = async (params, options) => {
            let result = await this.txData('quoteExactOutput', quoteExactOutputParams(params), options);
            return result;
        };
        this.quoteExactOutput = Object.assign(quoteExactOutput_send, {
            call: quoteExactOutput_call,
            txData: quoteExactOutput_txData
        });
        let quoteExactOutputSingle_send = async (params, options) => {
            let result = await this.send('quoteExactOutputSingle', [[params.tokenIn, params.tokenOut, this.wallet.utils.toString(params.amount), this.wallet.utils.toString(params.fee), this.wallet.utils.toString(params.sqrtPriceLimitX96)]], options);
            return result;
        };
        let quoteExactOutputSingle_call = async (params, options) => {
            let result = await this.call('quoteExactOutputSingle', [[params.tokenIn, params.tokenOut, this.wallet.utils.toString(params.amount), this.wallet.utils.toString(params.fee), this.wallet.utils.toString(params.sqrtPriceLimitX96)]], options);
            return {
                amountIn: new eth_contract_1.BigNumber(result.amountIn),
                sqrtPriceX96After: new eth_contract_1.BigNumber(result.sqrtPriceX96After),
                initializedTicksCrossed: new eth_contract_1.BigNumber(result.initializedTicksCrossed),
                gasEstimate: new eth_contract_1.BigNumber(result.gasEstimate)
            };
        };
        let quoteExactOutputSingle_txData = async (params, options) => {
            let result = await this.txData('quoteExactOutputSingle', [[params.tokenIn, params.tokenOut, this.wallet.utils.toString(params.amount), this.wallet.utils.toString(params.fee), this.wallet.utils.toString(params.sqrtPriceLimitX96)]], options);
            return result;
        };
        this.quoteExactOutputSingle = Object.assign(quoteExactOutputSingle_send, {
            call: quoteExactOutputSingle_call,
            txData: quoteExactOutputSingle_txData
        });
    }
}
QuoterV2._abi = QuoterV2_json_1.default.abi;
exports.QuoterV2 = QuoterV2;

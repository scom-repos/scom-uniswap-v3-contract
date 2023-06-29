"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixedRouteQuoterV1 = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const MixedRouteQuoterV1_json_1 = __importDefault(require("./MixedRouteQuoterV1.json"));
class MixedRouteQuoterV1 extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, MixedRouteQuoterV1_json_1.default.abi, MixedRouteQuoterV1_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.factory, params.factoryV2, params.WETH9], options);
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
        let factoryV2_call = async (options) => {
            let result = await this.call('factoryV2', [], options);
            return result;
        };
        this.factoryV2 = factoryV2_call;
        let quoteExactInputSingleV2_call = async (params, options) => {
            let result = await this.call('quoteExactInputSingleV2', [[params.tokenIn, params.tokenOut, this.wallet.utils.toString(params.amountIn)]], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.quoteExactInputSingleV2 = quoteExactInputSingleV2_call;
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
                v3SqrtPriceX96AfterList: result.v3SqrtPriceX96AfterList.map(e => new eth_contract_1.BigNumber(e)),
                v3InitializedTicksCrossedList: result.v3InitializedTicksCrossedList.map(e => new eth_contract_1.BigNumber(e)),
                v3SwapGasEstimate: new eth_contract_1.BigNumber(result.v3SwapGasEstimate)
            };
        };
        this.quoteExactInput = Object.assign(quoteExactInput_send, {
            call: quoteExactInput_call
        });
        let quoteExactInputSingleV3_send = async (params, options) => {
            let result = await this.send('quoteExactInputSingleV3', [[params.tokenIn, params.tokenOut, this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.fee), this.wallet.utils.toString(params.sqrtPriceLimitX96)]], options);
            return result;
        };
        let quoteExactInputSingleV3_call = async (params, options) => {
            let result = await this.call('quoteExactInputSingleV3', [[params.tokenIn, params.tokenOut, this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.fee), this.wallet.utils.toString(params.sqrtPriceLimitX96)]], options);
            return {
                amountOut: new eth_contract_1.BigNumber(result.amountOut),
                sqrtPriceX96After: new eth_contract_1.BigNumber(result.sqrtPriceX96After),
                initializedTicksCrossed: new eth_contract_1.BigNumber(result.initializedTicksCrossed),
                gasEstimate: new eth_contract_1.BigNumber(result.gasEstimate)
            };
        };
        this.quoteExactInputSingleV3 = Object.assign(quoteExactInputSingleV3_send, {
            call: quoteExactInputSingleV3_call
        });
    }
}
MixedRouteQuoterV1._abi = MixedRouteQuoterV1_json_1.default.abi;
exports.MixedRouteQuoterV1 = MixedRouteQuoterV1;

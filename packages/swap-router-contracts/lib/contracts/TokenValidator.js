"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenValidator = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const TokenValidator_json_1 = __importDefault(require("./TokenValidator.json"));
class TokenValidator extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, TokenValidator_json_1.default.abi, TokenValidator_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.factoryV2, params.positionManager], options);
    }
    assign() {
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
        let uniswapV2CallParams = (params) => [params.param1, this.wallet.utils.toString(params.amount0), this.wallet.utils.toString(params.param3), this.wallet.utils.stringToBytes(params.data)];
        let uniswapV2Call_call = async (params, options) => {
            let result = await this.call('uniswapV2Call', uniswapV2CallParams(params), options);
            return;
        };
        this.uniswapV2Call = uniswapV2Call_call;
        let batchValidateParams = (params) => [params.tokens, params.baseTokens, this.wallet.utils.toString(params.amountToBorrow)];
        let batchValidate_send = async (params, options) => {
            let result = await this.send('batchValidate', batchValidateParams(params), options);
            return result;
        };
        let batchValidate_call = async (params, options) => {
            let result = await this.call('batchValidate', batchValidateParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.batchValidate = Object.assign(batchValidate_send, {
            call: batchValidate_call
        });
        let validateParams = (params) => [params.token, params.baseTokens, this.wallet.utils.toString(params.amountToBorrow)];
        let validate_send = async (params, options) => {
            let result = await this.send('validate', validateParams(params), options);
            return result;
        };
        let validate_call = async (params, options) => {
            let result = await this.call('validate', validateParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.validate = Object.assign(validate_send, {
            call: validate_call
        });
    }
}
TokenValidator._abi = TokenValidator_json_1.default.abi;
exports.TokenValidator = TokenValidator;

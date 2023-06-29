"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapV3Factory = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const UniswapV3Factory_json_1 = __importDefault(require("./UniswapV3Factory.json"));
class UniswapV3Factory extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, UniswapV3Factory_json_1.default.abi, UniswapV3Factory_json_1.default.bytecode);
        this.assign();
    }
    deploy(options) {
        return this.__deploy([], options);
    }
    parseFeeAmountEnabledEvent(receipt) {
        return this.parseEvents(receipt, "FeeAmountEnabled").map(e => this.decodeFeeAmountEnabledEvent(e));
    }
    decodeFeeAmountEnabledEvent(event) {
        let result = event.data;
        return {
            fee: new eth_contract_1.BigNumber(result.fee),
            tickSpacing: new eth_contract_1.BigNumber(result.tickSpacing),
            _event: event
        };
    }
    parseOwnerChangedEvent(receipt) {
        return this.parseEvents(receipt, "OwnerChanged").map(e => this.decodeOwnerChangedEvent(e));
    }
    decodeOwnerChangedEvent(event) {
        let result = event.data;
        return {
            oldOwner: result.oldOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parsePoolCreatedEvent(receipt) {
        return this.parseEvents(receipt, "PoolCreated").map(e => this.decodePoolCreatedEvent(e));
    }
    decodePoolCreatedEvent(event) {
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            fee: new eth_contract_1.BigNumber(result.fee),
            tickSpacing: new eth_contract_1.BigNumber(result.tickSpacing),
            pool: result.pool,
            _event: event
        };
    }
    assign() {
        let feeAmountTickSpacing_call = async (param1, options) => {
            let result = await this.call('feeAmountTickSpacing', [this.wallet.utils.toString(param1)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.feeAmountTickSpacing = feeAmountTickSpacing_call;
        let getPoolParams = (params) => [params.param1, params.param2, this.wallet.utils.toString(params.param3)];
        let getPool_call = async (params, options) => {
            let result = await this.call('getPool', getPoolParams(params), options);
            return result;
        };
        this.getPool = getPool_call;
        let owner_call = async (options) => {
            let result = await this.call('owner', [], options);
            return result;
        };
        this.owner = owner_call;
        let parameters_call = async (options) => {
            let result = await this.call('parameters', [], options);
            return {
                factory: result.factory,
                token0: result.token0,
                token1: result.token1,
                fee: new eth_contract_1.BigNumber(result.fee),
                tickSpacing: new eth_contract_1.BigNumber(result.tickSpacing)
            };
        };
        this.parameters = parameters_call;
        let createPoolParams = (params) => [params.tokenA, params.tokenB, this.wallet.utils.toString(params.fee)];
        let createPool_send = async (params, options) => {
            let result = await this.send('createPool', createPoolParams(params), options);
            return result;
        };
        let createPool_call = async (params, options) => {
            let result = await this.call('createPool', createPoolParams(params), options);
            return result;
        };
        this.createPool = Object.assign(createPool_send, {
            call: createPool_call
        });
        let enableFeeAmountParams = (params) => [this.wallet.utils.toString(params.fee), this.wallet.utils.toString(params.tickSpacing)];
        let enableFeeAmount_send = async (params, options) => {
            let result = await this.send('enableFeeAmount', enableFeeAmountParams(params), options);
            return result;
        };
        let enableFeeAmount_call = async (params, options) => {
            let result = await this.call('enableFeeAmount', enableFeeAmountParams(params), options);
            return;
        };
        this.enableFeeAmount = Object.assign(enableFeeAmount_send, {
            call: enableFeeAmount_call
        });
        let setOwner_send = async (owner, options) => {
            let result = await this.send('setOwner', [owner], options);
            return result;
        };
        let setOwner_call = async (owner, options) => {
            let result = await this.call('setOwner', [owner], options);
            return;
        };
        this.setOwner = Object.assign(setOwner_send, {
            call: setOwner_call
        });
    }
}
UniswapV3Factory._abi = UniswapV3Factory_json_1.default.abi;
exports.UniswapV3Factory = UniswapV3Factory;

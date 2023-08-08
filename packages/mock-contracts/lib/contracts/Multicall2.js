"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multicall2 = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const Multicall2_json_1 = __importDefault(require("./Multicall2.json"));
class Multicall2 extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Multicall2_json_1.default.abi, Multicall2_json_1.default.bytecode);
        this.assign();
    }
    deploy(options) {
        return this.__deploy([], options);
    }
    assign() {
        let getBlockHash_call = async (blockNumber, options) => {
            let result = await this.call('getBlockHash', [this.wallet.utils.toString(blockNumber)], options);
            return result;
        };
        this.getBlockHash = getBlockHash_call;
        let getBlockNumber_call = async (options) => {
            let result = await this.call('getBlockNumber', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getBlockNumber = getBlockNumber_call;
        let getCurrentBlockCoinbase_call = async (options) => {
            let result = await this.call('getCurrentBlockCoinbase', [], options);
            return result;
        };
        this.getCurrentBlockCoinbase = getCurrentBlockCoinbase_call;
        let getCurrentBlockDifficulty_call = async (options) => {
            let result = await this.call('getCurrentBlockDifficulty', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getCurrentBlockDifficulty = getCurrentBlockDifficulty_call;
        let getCurrentBlockGasLimit_call = async (options) => {
            let result = await this.call('getCurrentBlockGasLimit', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getCurrentBlockGasLimit = getCurrentBlockGasLimit_call;
        let getCurrentBlockTimestamp_call = async (options) => {
            let result = await this.call('getCurrentBlockTimestamp', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getCurrentBlockTimestamp = getCurrentBlockTimestamp_call;
        let getEthBalance_call = async (addr, options) => {
            let result = await this.call('getEthBalance', [addr], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getEthBalance = getEthBalance_call;
        let getLastBlockHash_call = async (options) => {
            let result = await this.call('getLastBlockHash', [], options);
            return result;
        };
        this.getLastBlockHash = getLastBlockHash_call;
        let aggregate_send = async (calls, options) => {
            let result = await this.send('aggregate', [calls.map(e => ([e.target, this.wallet.utils.stringToBytes(e.callData)]))], options);
            return result;
        };
        let aggregate_call = async (calls, options) => {
            let result = await this.call('aggregate', [calls.map(e => ([e.target, this.wallet.utils.stringToBytes(e.callData)]))], options);
            return {
                blockNumber: new eth_contract_1.BigNumber(result.blockNumber),
                returnData: result.returnData
            };
        };
        this.aggregate = Object.assign(aggregate_send, {
            call: aggregate_call
        });
        let blockAndAggregate_send = async (calls, options) => {
            let result = await this.send('blockAndAggregate', [calls.map(e => ([e.target, this.wallet.utils.stringToBytes(e.callData)]))], options);
            return result;
        };
        let blockAndAggregate_call = async (calls, options) => {
            let result = await this.call('blockAndAggregate', [calls.map(e => ([e.target, this.wallet.utils.stringToBytes(e.callData)]))], options);
            return {
                blockNumber: new eth_contract_1.BigNumber(result.blockNumber),
                blockHash: result.blockHash,
                returnData: result.returnData.map(e => ({
                    success: e.success,
                    returnData: e.returnData
                }))
            };
        };
        this.blockAndAggregate = Object.assign(blockAndAggregate_send, {
            call: blockAndAggregate_call
        });
        let tryAggregateParams = (params) => [params.requireSuccess, params.calls.map(e => ([e.target, this.wallet.utils.stringToBytes(e.callData)]))];
        let tryAggregate_send = async (params, options) => {
            let result = await this.send('tryAggregate', tryAggregateParams(params), options);
            return result;
        };
        let tryAggregate_call = async (params, options) => {
            let result = await this.call('tryAggregate', tryAggregateParams(params), options);
            return (result.map(e => ({
                success: e.success,
                returnData: e.returnData
            })));
        };
        this.tryAggregate = Object.assign(tryAggregate_send, {
            call: tryAggregate_call
        });
        let tryBlockAndAggregateParams = (params) => [params.requireSuccess, params.calls.map(e => ([e.target, this.wallet.utils.stringToBytes(e.callData)]))];
        let tryBlockAndAggregate_send = async (params, options) => {
            let result = await this.send('tryBlockAndAggregate', tryBlockAndAggregateParams(params), options);
            return result;
        };
        let tryBlockAndAggregate_call = async (params, options) => {
            let result = await this.call('tryBlockAndAggregate', tryBlockAndAggregateParams(params), options);
            return {
                blockNumber: new eth_contract_1.BigNumber(result.blockNumber),
                blockHash: result.blockHash,
                returnData: result.returnData.map(e => ({
                    success: e.success,
                    returnData: e.returnData
                }))
            };
        };
        this.tryBlockAndAggregate = Object.assign(tryBlockAndAggregate_send, {
            call: tryBlockAndAggregate_call
        });
    }
}
Multicall2._abi = Multicall2_json_1.default.abi;
exports.Multicall2 = Multicall2;

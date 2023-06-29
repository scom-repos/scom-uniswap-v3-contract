"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapInterfaceMulticall = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const UniswapInterfaceMulticall_json_1 = __importDefault(require("./UniswapInterfaceMulticall.json"));
class UniswapInterfaceMulticall extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, UniswapInterfaceMulticall_json_1.default.abi, UniswapInterfaceMulticall_json_1.default.bytecode);
        this.assign();
    }
    deploy(options) {
        return this.__deploy([], options);
    }
    assign() {
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
        let multicall_send = async (calls, options) => {
            let result = await this.send('multicall', [calls.map(e => ([e.target, this.wallet.utils.toString(e.gasLimit), this.wallet.utils.stringToBytes(e.callData)]))], options);
            return result;
        };
        let multicall_call = async (calls, options) => {
            let result = await this.call('multicall', [calls.map(e => ([e.target, this.wallet.utils.toString(e.gasLimit), this.wallet.utils.stringToBytes(e.callData)]))], options);
            return {
                blockNumber: new eth_contract_1.BigNumber(result.blockNumber),
                returnData: result.returnData.map(e => ({
                    success: e.success,
                    gasUsed: new eth_contract_1.BigNumber(e.gasUsed),
                    returnData: e.returnData
                }))
            };
        };
        this.multicall = Object.assign(multicall_send, {
            call: multicall_call
        });
    }
}
UniswapInterfaceMulticall._abi = UniswapInterfaceMulticall_json_1.default.abi;
exports.UniswapInterfaceMulticall = UniswapInterfaceMulticall;

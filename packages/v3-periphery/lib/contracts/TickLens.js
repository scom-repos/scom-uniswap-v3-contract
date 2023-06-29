"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TickLens = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const TickLens_json_1 = __importDefault(require("./TickLens.json"));
class TickLens extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, TickLens_json_1.default.abi, TickLens_json_1.default.bytecode);
        this.assign();
    }
    deploy(options) {
        return this.__deploy([], options);
    }
    assign() {
        let getPopulatedTicksInWordParams = (params) => [params.pool, this.wallet.utils.toString(params.tickBitmapIndex)];
        let getPopulatedTicksInWord_call = async (params, options) => {
            let result = await this.call('getPopulatedTicksInWord', getPopulatedTicksInWordParams(params), options);
            return (result.map(e => ({
                tick: new eth_contract_1.BigNumber(e.tick),
                liquidityNet: new eth_contract_1.BigNumber(e.liquidityNet),
                liquidityGross: new eth_contract_1.BigNumber(e.liquidityGross)
            })));
        };
        this.getPopulatedTicksInWord = getPopulatedTicksInWord_call;
    }
}
TickLens._abi = TickLens_json_1.default.abi;
exports.TickLens = TickLens;

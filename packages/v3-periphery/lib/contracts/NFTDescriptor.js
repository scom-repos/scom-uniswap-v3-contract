"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTDescriptor = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const NFTDescriptor_json_1 = __importDefault(require("./NFTDescriptor.json"));
class NFTDescriptor extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, NFTDescriptor_json_1.default.abi, NFTDescriptor_json_1.default.bytecode);
        this.assign();
    }
    deploy(options) {
        return this.__deploy([], options);
    }
    assign() {
        let constructTokenURI_call = async (params, options) => {
            let result = await this.call('constructTokenURI', [[this.wallet.utils.toString(params.tokenId), params.quoteTokenAddress, params.baseTokenAddress, params.quoteTokenSymbol, params.baseTokenSymbol, this.wallet.utils.toString(params.quoteTokenDecimals), this.wallet.utils.toString(params.baseTokenDecimals), params.flipRatio, this.wallet.utils.toString(params.tickLower), this.wallet.utils.toString(params.tickUpper), this.wallet.utils.toString(params.tickCurrent), this.wallet.utils.toString(params.tickSpacing), this.wallet.utils.toString(params.fee), params.poolAddress]], options);
            return result;
        };
        this.constructTokenURI = constructTokenURI_call;
    }
}
NFTDescriptor._abi = NFTDescriptor_json_1.default.abi;
exports.NFTDescriptor = NFTDescriptor;

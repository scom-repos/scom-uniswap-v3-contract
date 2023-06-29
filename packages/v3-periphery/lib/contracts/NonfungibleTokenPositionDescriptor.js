"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonfungibleTokenPositionDescriptor = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const NonfungibleTokenPositionDescriptor_json_1 = __importDefault(require("./NonfungibleTokenPositionDescriptor.json"));
class NonfungibleTokenPositionDescriptor extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, NonfungibleTokenPositionDescriptor_json_1.default.abi, NonfungibleTokenPositionDescriptor_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, libraries, options) {
        return this.__deploy([params.WETH9, this.wallet.utils.stringToBytes32(params.nativeCurrencyLabelBytes)], Object.assign(Object.assign({}, options), { libraries, linkReferences: NonfungibleTokenPositionDescriptor_json_1.default.linkReferences }));
    }
    assign() {
        let WETH9_call = async (options) => {
            let result = await this.call('WETH9', [], options);
            return result;
        };
        this.WETH9 = WETH9_call;
        let flipRatioParams = (params) => [params.token0, params.token1, this.wallet.utils.toString(params.chainId)];
        let flipRatio_call = async (params, options) => {
            let result = await this.call('flipRatio', flipRatioParams(params), options);
            return result;
        };
        this.flipRatio = flipRatio_call;
        let nativeCurrencyLabel_call = async (options) => {
            let result = await this.call('nativeCurrencyLabel', [], options);
            return result;
        };
        this.nativeCurrencyLabel = nativeCurrencyLabel_call;
        let nativeCurrencyLabelBytes_call = async (options) => {
            let result = await this.call('nativeCurrencyLabelBytes', [], options);
            return result;
        };
        this.nativeCurrencyLabelBytes = nativeCurrencyLabelBytes_call;
        let tokenRatioPriorityParams = (params) => [params.token, this.wallet.utils.toString(params.chainId)];
        let tokenRatioPriority_call = async (params, options) => {
            let result = await this.call('tokenRatioPriority', tokenRatioPriorityParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.tokenRatioPriority = tokenRatioPriority_call;
        let tokenURIParams = (params) => [params.positionManager, this.wallet.utils.toString(params.tokenId)];
        let tokenURI_call = async (params, options) => {
            let result = await this.call('tokenURI', tokenURIParams(params), options);
            return result;
        };
        this.tokenURI = tokenURI_call;
    }
}
NonfungibleTokenPositionDescriptor._abi = NonfungibleTokenPositionDescriptor_json_1.default.abi;
exports.NonfungibleTokenPositionDescriptor = NonfungibleTokenPositionDescriptor;

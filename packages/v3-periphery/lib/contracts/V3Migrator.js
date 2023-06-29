"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.V3Migrator = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const V3Migrator_json_1 = __importDefault(require("./V3Migrator.json"));
class V3Migrator extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, V3Migrator_json_1.default.abi, V3Migrator_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.factory, params.WETH9, params.nonfungiblePositionManager], options);
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
        let nonfungiblePositionManager_call = async (options) => {
            let result = await this.call('nonfungiblePositionManager', [], options);
            return result;
        };
        this.nonfungiblePositionManager = nonfungiblePositionManager_call;
        let createAndInitializePoolIfNecessaryParams = (params) => [params.token0, params.token1, this.wallet.utils.toString(params.fee), this.wallet.utils.toString(params.sqrtPriceX96)];
        let createAndInitializePoolIfNecessary_send = async (params, options) => {
            let result = await this.send('createAndInitializePoolIfNecessary', createAndInitializePoolIfNecessaryParams(params), options);
            return result;
        };
        let createAndInitializePoolIfNecessary_call = async (params, options) => {
            let result = await this.call('createAndInitializePoolIfNecessary', createAndInitializePoolIfNecessaryParams(params), options);
            return result;
        };
        this.createAndInitializePoolIfNecessary = Object.assign(createAndInitializePoolIfNecessary_send, {
            call: createAndInitializePoolIfNecessary_call
        });
        let migrate_send = async (params, options) => {
            let result = await this.send('migrate', [[params.pair, this.wallet.utils.toString(params.liquidityToMigrate), this.wallet.utils.toString(params.percentageToMigrate), params.token0, params.token1, this.wallet.utils.toString(params.fee), this.wallet.utils.toString(params.tickLower), this.wallet.utils.toString(params.tickUpper), this.wallet.utils.toString(params.amount0Min), this.wallet.utils.toString(params.amount1Min), params.recipient, this.wallet.utils.toString(params.deadline), params.refundAsETH]], options);
            return result;
        };
        let migrate_call = async (params, options) => {
            let result = await this.call('migrate', [[params.pair, this.wallet.utils.toString(params.liquidityToMigrate), this.wallet.utils.toString(params.percentageToMigrate), params.token0, params.token1, this.wallet.utils.toString(params.fee), this.wallet.utils.toString(params.tickLower), this.wallet.utils.toString(params.tickUpper), this.wallet.utils.toString(params.amount0Min), this.wallet.utils.toString(params.amount1Min), params.recipient, this.wallet.utils.toString(params.deadline), params.refundAsETH]], options);
            return;
        };
        this.migrate = Object.assign(migrate_send, {
            call: migrate_call
        });
        let multicall_send = async (data, options) => {
            let result = await this.send('multicall', [this.wallet.utils.stringToBytes(data)], options);
            return result;
        };
        let multicall_call = async (data, options) => {
            let result = await this.call('multicall', [this.wallet.utils.stringToBytes(data)], options);
            return result;
        };
        this.multicall = Object.assign(multicall_send, {
            call: multicall_call
        });
        let selfPermitParams = (params) => [params.token, this.wallet.utils.toString(params.value), this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
        let selfPermit_send = async (params, options) => {
            let result = await this.send('selfPermit', selfPermitParams(params), options);
            return result;
        };
        let selfPermit_call = async (params, options) => {
            let result = await this.call('selfPermit', selfPermitParams(params), options);
            return;
        };
        this.selfPermit = Object.assign(selfPermit_send, {
            call: selfPermit_call
        });
        let selfPermitAllowedParams = (params) => [params.token, this.wallet.utils.toString(params.nonce), this.wallet.utils.toString(params.expiry), this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
        let selfPermitAllowed_send = async (params, options) => {
            let result = await this.send('selfPermitAllowed', selfPermitAllowedParams(params), options);
            return result;
        };
        let selfPermitAllowed_call = async (params, options) => {
            let result = await this.call('selfPermitAllowed', selfPermitAllowedParams(params), options);
            return;
        };
        this.selfPermitAllowed = Object.assign(selfPermitAllowed_send, {
            call: selfPermitAllowed_call
        });
        let selfPermitAllowedIfNecessaryParams = (params) => [params.token, this.wallet.utils.toString(params.nonce), this.wallet.utils.toString(params.expiry), this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
        let selfPermitAllowedIfNecessary_send = async (params, options) => {
            let result = await this.send('selfPermitAllowedIfNecessary', selfPermitAllowedIfNecessaryParams(params), options);
            return result;
        };
        let selfPermitAllowedIfNecessary_call = async (params, options) => {
            let result = await this.call('selfPermitAllowedIfNecessary', selfPermitAllowedIfNecessaryParams(params), options);
            return;
        };
        this.selfPermitAllowedIfNecessary = Object.assign(selfPermitAllowedIfNecessary_send, {
            call: selfPermitAllowedIfNecessary_call
        });
        let selfPermitIfNecessaryParams = (params) => [params.token, this.wallet.utils.toString(params.value), this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
        let selfPermitIfNecessary_send = async (params, options) => {
            let result = await this.send('selfPermitIfNecessary', selfPermitIfNecessaryParams(params), options);
            return result;
        };
        let selfPermitIfNecessary_call = async (params, options) => {
            let result = await this.call('selfPermitIfNecessary', selfPermitIfNecessaryParams(params), options);
            return;
        };
        this.selfPermitIfNecessary = Object.assign(selfPermitIfNecessary_send, {
            call: selfPermitIfNecessary_call
        });
    }
}
V3Migrator._abi = V3Migrator_json_1.default.abi;
exports.V3Migrator = V3Migrator;

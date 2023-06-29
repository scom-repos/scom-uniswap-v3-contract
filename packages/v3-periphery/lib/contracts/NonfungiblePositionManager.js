"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonfungiblePositionManager = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const NonfungiblePositionManager_json_1 = __importDefault(require("./NonfungiblePositionManager.json"));
class NonfungiblePositionManager extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, NonfungiblePositionManager_json_1.default.abi, NonfungiblePositionManager_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.factory, params.WETH9, params.tokenDescriptor], options);
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            approved: result.approved,
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            _event: event
        };
    }
    parseApprovalForAllEvent(receipt) {
        return this.parseEvents(receipt, "ApprovalForAll").map(e => this.decodeApprovalForAllEvent(e));
    }
    decodeApprovalForAllEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            operator: result.operator,
            approved: result.approved,
            _event: event
        };
    }
    parseCollectEvent(receipt) {
        return this.parseEvents(receipt, "Collect").map(e => this.decodeCollectEvent(e));
    }
    decodeCollectEvent(event) {
        let result = event.data;
        return {
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            recipient: result.recipient,
            amount0: new eth_contract_1.BigNumber(result.amount0),
            amount1: new eth_contract_1.BigNumber(result.amount1),
            _event: event
        };
    }
    parseDecreaseLiquidityEvent(receipt) {
        return this.parseEvents(receipt, "DecreaseLiquidity").map(e => this.decodeDecreaseLiquidityEvent(e));
    }
    decodeDecreaseLiquidityEvent(event) {
        let result = event.data;
        return {
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            liquidity: new eth_contract_1.BigNumber(result.liquidity),
            amount0: new eth_contract_1.BigNumber(result.amount0),
            amount1: new eth_contract_1.BigNumber(result.amount1),
            _event: event
        };
    }
    parseIncreaseLiquidityEvent(receipt) {
        return this.parseEvents(receipt, "IncreaseLiquidity").map(e => this.decodeIncreaseLiquidityEvent(e));
    }
    decodeIncreaseLiquidityEvent(event) {
        let result = event.data;
        return {
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            liquidity: new eth_contract_1.BigNumber(result.liquidity),
            amount0: new eth_contract_1.BigNumber(result.amount0),
            amount1: new eth_contract_1.BigNumber(result.amount1),
            _event: event
        };
    }
    parseTransferEvent(receipt) {
        return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event) {
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            _event: event
        };
    }
    assign() {
        let DOMAIN_SEPARATOR_call = async (options) => {
            let result = await this.call('DOMAIN_SEPARATOR', [], options);
            return result;
        };
        this.DOMAIN_SEPARATOR = DOMAIN_SEPARATOR_call;
        let PERMIT_TYPEHASH_call = async (options) => {
            let result = await this.call('PERMIT_TYPEHASH', [], options);
            return result;
        };
        this.PERMIT_TYPEHASH = PERMIT_TYPEHASH_call;
        let WETH9_call = async (options) => {
            let result = await this.call('WETH9', [], options);
            return result;
        };
        this.WETH9 = WETH9_call;
        let balanceOf_call = async (owner, options) => {
            let result = await this.call('balanceOf', [owner], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.balanceOf = balanceOf_call;
        let baseURI_call = async (options) => {
            let result = await this.call('baseURI', [], options);
            return result;
        };
        this.baseURI = baseURI_call;
        let factory_call = async (options) => {
            let result = await this.call('factory', [], options);
            return result;
        };
        this.factory = factory_call;
        let getApproved_call = async (tokenId, options) => {
            let result = await this.call('getApproved', [this.wallet.utils.toString(tokenId)], options);
            return result;
        };
        this.getApproved = getApproved_call;
        let isApprovedForAllParams = (params) => [params.owner, params.operator];
        let isApprovedForAll_call = async (params, options) => {
            let result = await this.call('isApprovedForAll', isApprovedForAllParams(params), options);
            return result;
        };
        this.isApprovedForAll = isApprovedForAll_call;
        let name_call = async (options) => {
            let result = await this.call('name', [], options);
            return result;
        };
        this.name = name_call;
        let ownerOf_call = async (tokenId, options) => {
            let result = await this.call('ownerOf', [this.wallet.utils.toString(tokenId)], options);
            return result;
        };
        this.ownerOf = ownerOf_call;
        let positions_call = async (tokenId, options) => {
            let result = await this.call('positions', [this.wallet.utils.toString(tokenId)], options);
            return {
                nonce: new eth_contract_1.BigNumber(result.nonce),
                operator: result.operator,
                token0: result.token0,
                token1: result.token1,
                fee: new eth_contract_1.BigNumber(result.fee),
                tickLower: new eth_contract_1.BigNumber(result.tickLower),
                tickUpper: new eth_contract_1.BigNumber(result.tickUpper),
                liquidity: new eth_contract_1.BigNumber(result.liquidity),
                feeGrowthInside0LastX128: new eth_contract_1.BigNumber(result.feeGrowthInside0LastX128),
                feeGrowthInside1LastX128: new eth_contract_1.BigNumber(result.feeGrowthInside1LastX128),
                tokensOwed0: new eth_contract_1.BigNumber(result.tokensOwed0),
                tokensOwed1: new eth_contract_1.BigNumber(result.tokensOwed1)
            };
        };
        this.positions = positions_call;
        let supportsInterface_call = async (interfaceId, options) => {
            let result = await this.call('supportsInterface', [interfaceId], options);
            return result;
        };
        this.supportsInterface = supportsInterface_call;
        let symbol_call = async (options) => {
            let result = await this.call('symbol', [], options);
            return result;
        };
        this.symbol = symbol_call;
        let tokenByIndex_call = async (index, options) => {
            let result = await this.call('tokenByIndex', [this.wallet.utils.toString(index)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.tokenByIndex = tokenByIndex_call;
        let tokenOfOwnerByIndexParams = (params) => [params.owner, this.wallet.utils.toString(params.index)];
        let tokenOfOwnerByIndex_call = async (params, options) => {
            let result = await this.call('tokenOfOwnerByIndex', tokenOfOwnerByIndexParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.tokenOfOwnerByIndex = tokenOfOwnerByIndex_call;
        let tokenURI_call = async (tokenId, options) => {
            let result = await this.call('tokenURI', [this.wallet.utils.toString(tokenId)], options);
            return result;
        };
        this.tokenURI = tokenURI_call;
        let totalSupply_call = async (options) => {
            let result = await this.call('totalSupply', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalSupply = totalSupply_call;
        let approveParams = (params) => [params.to, this.wallet.utils.toString(params.tokenId)];
        let approve_send = async (params, options) => {
            let result = await this.send('approve', approveParams(params), options);
            return result;
        };
        let approve_call = async (params, options) => {
            let result = await this.call('approve', approveParams(params), options);
            return;
        };
        this.approve = Object.assign(approve_send, {
            call: approve_call
        });
        let burn_send = async (tokenId, options) => {
            let result = await this.send('burn', [this.wallet.utils.toString(tokenId)], options);
            return result;
        };
        let burn_call = async (tokenId, options) => {
            let result = await this.call('burn', [this.wallet.utils.toString(tokenId)], options);
            return;
        };
        this.burn = Object.assign(burn_send, {
            call: burn_call
        });
        let collect_send = async (params, options) => {
            let result = await this.send('collect', [[this.wallet.utils.toString(params.tokenId), params.recipient, this.wallet.utils.toString(params.amount0Max), this.wallet.utils.toString(params.amount1Max)]], options);
            return result;
        };
        let collect_call = async (params, options) => {
            let result = await this.call('collect', [[this.wallet.utils.toString(params.tokenId), params.recipient, this.wallet.utils.toString(params.amount0Max), this.wallet.utils.toString(params.amount1Max)]], options);
            return {
                amount0: new eth_contract_1.BigNumber(result.amount0),
                amount1: new eth_contract_1.BigNumber(result.amount1)
            };
        };
        this.collect = Object.assign(collect_send, {
            call: collect_call
        });
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
        let decreaseLiquidity_send = async (params, options) => {
            let result = await this.send('decreaseLiquidity', [[this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amount0Min), this.wallet.utils.toString(params.amount1Min), this.wallet.utils.toString(params.deadline)]], options);
            return result;
        };
        let decreaseLiquidity_call = async (params, options) => {
            let result = await this.call('decreaseLiquidity', [[this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amount0Min), this.wallet.utils.toString(params.amount1Min), this.wallet.utils.toString(params.deadline)]], options);
            return {
                amount0: new eth_contract_1.BigNumber(result.amount0),
                amount1: new eth_contract_1.BigNumber(result.amount1)
            };
        };
        this.decreaseLiquidity = Object.assign(decreaseLiquidity_send, {
            call: decreaseLiquidity_call
        });
        let increaseLiquidity_send = async (params, options) => {
            let result = await this.send('increaseLiquidity', [[this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.amount0Desired), this.wallet.utils.toString(params.amount1Desired), this.wallet.utils.toString(params.amount0Min), this.wallet.utils.toString(params.amount1Min), this.wallet.utils.toString(params.deadline)]], options);
            return result;
        };
        let increaseLiquidity_call = async (params, options) => {
            let result = await this.call('increaseLiquidity', [[this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.amount0Desired), this.wallet.utils.toString(params.amount1Desired), this.wallet.utils.toString(params.amount0Min), this.wallet.utils.toString(params.amount1Min), this.wallet.utils.toString(params.deadline)]], options);
            return {
                liquidity: new eth_contract_1.BigNumber(result.liquidity),
                amount0: new eth_contract_1.BigNumber(result.amount0),
                amount1: new eth_contract_1.BigNumber(result.amount1)
            };
        };
        this.increaseLiquidity = Object.assign(increaseLiquidity_send, {
            call: increaseLiquidity_call
        });
        let mint_send = async (params, options) => {
            let result = await this.send('mint', [[params.token0, params.token1, this.wallet.utils.toString(params.fee), this.wallet.utils.toString(params.tickLower), this.wallet.utils.toString(params.tickUpper), this.wallet.utils.toString(params.amount0Desired), this.wallet.utils.toString(params.amount1Desired), this.wallet.utils.toString(params.amount0Min), this.wallet.utils.toString(params.amount1Min), params.recipient, this.wallet.utils.toString(params.deadline)]], options);
            return result;
        };
        let mint_call = async (params, options) => {
            let result = await this.call('mint', [[params.token0, params.token1, this.wallet.utils.toString(params.fee), this.wallet.utils.toString(params.tickLower), this.wallet.utils.toString(params.tickUpper), this.wallet.utils.toString(params.amount0Desired), this.wallet.utils.toString(params.amount1Desired), this.wallet.utils.toString(params.amount0Min), this.wallet.utils.toString(params.amount1Min), params.recipient, this.wallet.utils.toString(params.deadline)]], options);
            return {
                tokenId: new eth_contract_1.BigNumber(result.tokenId),
                liquidity: new eth_contract_1.BigNumber(result.liquidity),
                amount0: new eth_contract_1.BigNumber(result.amount0),
                amount1: new eth_contract_1.BigNumber(result.amount1)
            };
        };
        this.mint = Object.assign(mint_send, {
            call: mint_call
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
        let permitParams = (params) => [params.spender, this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.deadline), this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
        let permit_send = async (params, options) => {
            let result = await this.send('permit', permitParams(params), options);
            return result;
        };
        let permit_call = async (params, options) => {
            let result = await this.call('permit', permitParams(params), options);
            return;
        };
        this.permit = Object.assign(permit_send, {
            call: permit_call
        });
        let refundETH_send = async (options) => {
            let result = await this.send('refundETH', [], options);
            return result;
        };
        let refundETH_call = async (options) => {
            let result = await this.call('refundETH', [], options);
            return;
        };
        this.refundETH = Object.assign(refundETH_send, {
            call: refundETH_call
        });
        let safeTransferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId)];
        let safeTransferFrom_send = async (params, options) => {
            let result = await this.send('safeTransferFrom', safeTransferFromParams(params), options);
            return result;
        };
        let safeTransferFrom_call = async (params, options) => {
            let result = await this.call('safeTransferFrom', safeTransferFromParams(params), options);
            return;
        };
        this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
            call: safeTransferFrom_call
        });
        let safeTransferFrom_1Params = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId), this.wallet.utils.stringToBytes(params.data)];
        let safeTransferFrom_1_send = async (params, options) => {
            let result = await this.send('safeTransferFrom', safeTransferFrom_1Params(params), options);
            return result;
        };
        let safeTransferFrom_1_call = async (params, options) => {
            let result = await this.call('safeTransferFrom', safeTransferFrom_1Params(params), options);
            return;
        };
        this.safeTransferFrom_1 = Object.assign(safeTransferFrom_1_send, {
            call: safeTransferFrom_1_call
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
        let setApprovalForAllParams = (params) => [params.operator, params.approved];
        let setApprovalForAll_send = async (params, options) => {
            let result = await this.send('setApprovalForAll', setApprovalForAllParams(params), options);
            return result;
        };
        let setApprovalForAll_call = async (params, options) => {
            let result = await this.call('setApprovalForAll', setApprovalForAllParams(params), options);
            return;
        };
        this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
            call: setApprovalForAll_call
        });
        let sweepTokenParams = (params) => [params.token, this.wallet.utils.toString(params.amountMinimum), params.recipient];
        let sweepToken_send = async (params, options) => {
            let result = await this.send('sweepToken', sweepTokenParams(params), options);
            return result;
        };
        let sweepToken_call = async (params, options) => {
            let result = await this.call('sweepToken', sweepTokenParams(params), options);
            return;
        };
        this.sweepToken = Object.assign(sweepToken_send, {
            call: sweepToken_call
        });
        let transferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId)];
        let transferFrom_send = async (params, options) => {
            let result = await this.send('transferFrom', transferFromParams(params), options);
            return result;
        };
        let transferFrom_call = async (params, options) => {
            let result = await this.call('transferFrom', transferFromParams(params), options);
            return;
        };
        this.transferFrom = Object.assign(transferFrom_send, {
            call: transferFrom_call
        });
        let uniswapV3MintCallbackParams = (params) => [this.wallet.utils.toString(params.amount0Owed), this.wallet.utils.toString(params.amount1Owed), this.wallet.utils.stringToBytes(params.data)];
        let uniswapV3MintCallback_send = async (params, options) => {
            let result = await this.send('uniswapV3MintCallback', uniswapV3MintCallbackParams(params), options);
            return result;
        };
        let uniswapV3MintCallback_call = async (params, options) => {
            let result = await this.call('uniswapV3MintCallback', uniswapV3MintCallbackParams(params), options);
            return;
        };
        this.uniswapV3MintCallback = Object.assign(uniswapV3MintCallback_send, {
            call: uniswapV3MintCallback_call
        });
        let unwrapWETH9Params = (params) => [this.wallet.utils.toString(params.amountMinimum), params.recipient];
        let unwrapWETH9_send = async (params, options) => {
            let result = await this.send('unwrapWETH9', unwrapWETH9Params(params), options);
            return result;
        };
        let unwrapWETH9_call = async (params, options) => {
            let result = await this.call('unwrapWETH9', unwrapWETH9Params(params), options);
            return;
        };
        this.unwrapWETH9 = Object.assign(unwrapWETH9_send, {
            call: unwrapWETH9_call
        });
    }
}
NonfungiblePositionManager._abi = NonfungiblePositionManager_json_1.default.abi;
exports.NonfungiblePositionManager = NonfungiblePositionManager;

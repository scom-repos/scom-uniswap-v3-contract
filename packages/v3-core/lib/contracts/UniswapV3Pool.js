"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapV3Pool = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const UniswapV3Pool_json_1 = __importDefault(require("./UniswapV3Pool.json"));
class UniswapV3Pool extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, UniswapV3Pool_json_1.default.abi, UniswapV3Pool_json_1.default.bytecode);
        this.assign();
    }
    deploy(options) {
        return this.__deploy([], options);
    }
    parseBurnEvent(receipt) {
        return this.parseEvents(receipt, "Burn").map(e => this.decodeBurnEvent(e));
    }
    decodeBurnEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            tickLower: new eth_contract_1.BigNumber(result.tickLower),
            tickUpper: new eth_contract_1.BigNumber(result.tickUpper),
            amount: new eth_contract_1.BigNumber(result.amount),
            amount0: new eth_contract_1.BigNumber(result.amount0),
            amount1: new eth_contract_1.BigNumber(result.amount1),
            _event: event
        };
    }
    parseCollectEvent(receipt) {
        return this.parseEvents(receipt, "Collect").map(e => this.decodeCollectEvent(e));
    }
    decodeCollectEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            recipient: result.recipient,
            tickLower: new eth_contract_1.BigNumber(result.tickLower),
            tickUpper: new eth_contract_1.BigNumber(result.tickUpper),
            amount0: new eth_contract_1.BigNumber(result.amount0),
            amount1: new eth_contract_1.BigNumber(result.amount1),
            _event: event
        };
    }
    parseCollectProtocolEvent(receipt) {
        return this.parseEvents(receipt, "CollectProtocol").map(e => this.decodeCollectProtocolEvent(e));
    }
    decodeCollectProtocolEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            recipient: result.recipient,
            amount0: new eth_contract_1.BigNumber(result.amount0),
            amount1: new eth_contract_1.BigNumber(result.amount1),
            _event: event
        };
    }
    parseFlashEvent(receipt) {
        return this.parseEvents(receipt, "Flash").map(e => this.decodeFlashEvent(e));
    }
    decodeFlashEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            recipient: result.recipient,
            amount0: new eth_contract_1.BigNumber(result.amount0),
            amount1: new eth_contract_1.BigNumber(result.amount1),
            paid0: new eth_contract_1.BigNumber(result.paid0),
            paid1: new eth_contract_1.BigNumber(result.paid1),
            _event: event
        };
    }
    parseIncreaseObservationCardinalityNextEvent(receipt) {
        return this.parseEvents(receipt, "IncreaseObservationCardinalityNext").map(e => this.decodeIncreaseObservationCardinalityNextEvent(e));
    }
    decodeIncreaseObservationCardinalityNextEvent(event) {
        let result = event.data;
        return {
            observationCardinalityNextOld: new eth_contract_1.BigNumber(result.observationCardinalityNextOld),
            observationCardinalityNextNew: new eth_contract_1.BigNumber(result.observationCardinalityNextNew),
            _event: event
        };
    }
    parseInitializeEvent(receipt) {
        return this.parseEvents(receipt, "Initialize").map(e => this.decodeInitializeEvent(e));
    }
    decodeInitializeEvent(event) {
        let result = event.data;
        return {
            sqrtPriceX96: new eth_contract_1.BigNumber(result.sqrtPriceX96),
            tick: new eth_contract_1.BigNumber(result.tick),
            _event: event
        };
    }
    parseMintEvent(receipt) {
        return this.parseEvents(receipt, "Mint").map(e => this.decodeMintEvent(e));
    }
    decodeMintEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            owner: result.owner,
            tickLower: new eth_contract_1.BigNumber(result.tickLower),
            tickUpper: new eth_contract_1.BigNumber(result.tickUpper),
            amount: new eth_contract_1.BigNumber(result.amount),
            amount0: new eth_contract_1.BigNumber(result.amount0),
            amount1: new eth_contract_1.BigNumber(result.amount1),
            _event: event
        };
    }
    parseSetFeeProtocolEvent(receipt) {
        return this.parseEvents(receipt, "SetFeeProtocol").map(e => this.decodeSetFeeProtocolEvent(e));
    }
    decodeSetFeeProtocolEvent(event) {
        let result = event.data;
        return {
            feeProtocol0Old: new eth_contract_1.BigNumber(result.feeProtocol0Old),
            feeProtocol1Old: new eth_contract_1.BigNumber(result.feeProtocol1Old),
            feeProtocol0New: new eth_contract_1.BigNumber(result.feeProtocol0New),
            feeProtocol1New: new eth_contract_1.BigNumber(result.feeProtocol1New),
            _event: event
        };
    }
    parseSwapEvent(receipt) {
        return this.parseEvents(receipt, "Swap").map(e => this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            recipient: result.recipient,
            amount0: new eth_contract_1.BigNumber(result.amount0),
            amount1: new eth_contract_1.BigNumber(result.amount1),
            sqrtPriceX96: new eth_contract_1.BigNumber(result.sqrtPriceX96),
            liquidity: new eth_contract_1.BigNumber(result.liquidity),
            tick: new eth_contract_1.BigNumber(result.tick),
            _event: event
        };
    }
    assign() {
        let factory_call = async (options) => {
            let result = await this.call('factory', [], options);
            return result;
        };
        this.factory = factory_call;
        let fee_call = async (options) => {
            let result = await this.call('fee', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.fee = fee_call;
        let feeGrowthGlobal0X128_call = async (options) => {
            let result = await this.call('feeGrowthGlobal0X128', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.feeGrowthGlobal0X128 = feeGrowthGlobal0X128_call;
        let feeGrowthGlobal1X128_call = async (options) => {
            let result = await this.call('feeGrowthGlobal1X128', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.feeGrowthGlobal1X128 = feeGrowthGlobal1X128_call;
        let liquidity_call = async (options) => {
            let result = await this.call('liquidity', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.liquidity = liquidity_call;
        let maxLiquidityPerTick_call = async (options) => {
            let result = await this.call('maxLiquidityPerTick', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.maxLiquidityPerTick = maxLiquidityPerTick_call;
        let observations_call = async (param1, options) => {
            let result = await this.call('observations', [this.wallet.utils.toString(param1)], options);
            return {
                blockTimestamp: new eth_contract_1.BigNumber(result.blockTimestamp),
                tickCumulative: new eth_contract_1.BigNumber(result.tickCumulative),
                secondsPerLiquidityCumulativeX128: new eth_contract_1.BigNumber(result.secondsPerLiquidityCumulativeX128),
                initialized: result.initialized
            };
        };
        this.observations = observations_call;
        let observe_call = async (secondsAgos, options) => {
            let result = await this.call('observe', [this.wallet.utils.toString(secondsAgos)], options);
            return {
                tickCumulatives: result.tickCumulatives.map(e => new eth_contract_1.BigNumber(e)),
                secondsPerLiquidityCumulativeX128s: result.secondsPerLiquidityCumulativeX128s.map(e => new eth_contract_1.BigNumber(e))
            };
        };
        this.observe = observe_call;
        let positions_call = async (param1, options) => {
            let result = await this.call('positions', [this.wallet.utils.stringToBytes32(param1)], options);
            return {
                liquidity: new eth_contract_1.BigNumber(result.liquidity),
                feeGrowthInside0LastX128: new eth_contract_1.BigNumber(result.feeGrowthInside0LastX128),
                feeGrowthInside1LastX128: new eth_contract_1.BigNumber(result.feeGrowthInside1LastX128),
                tokensOwed0: new eth_contract_1.BigNumber(result.tokensOwed0),
                tokensOwed1: new eth_contract_1.BigNumber(result.tokensOwed1)
            };
        };
        this.positions = positions_call;
        let protocolFees_call = async (options) => {
            let result = await this.call('protocolFees', [], options);
            return {
                token0: new eth_contract_1.BigNumber(result.token0),
                token1: new eth_contract_1.BigNumber(result.token1)
            };
        };
        this.protocolFees = protocolFees_call;
        let slot0_call = async (options) => {
            let result = await this.call('slot0', [], options);
            return {
                sqrtPriceX96: new eth_contract_1.BigNumber(result.sqrtPriceX96),
                tick: new eth_contract_1.BigNumber(result.tick),
                observationIndex: new eth_contract_1.BigNumber(result.observationIndex),
                observationCardinality: new eth_contract_1.BigNumber(result.observationCardinality),
                observationCardinalityNext: new eth_contract_1.BigNumber(result.observationCardinalityNext),
                feeProtocol: new eth_contract_1.BigNumber(result.feeProtocol),
                unlocked: result.unlocked
            };
        };
        this.slot0 = slot0_call;
        let snapshotCumulativesInsideParams = (params) => [this.wallet.utils.toString(params.tickLower), this.wallet.utils.toString(params.tickUpper)];
        let snapshotCumulativesInside_call = async (params, options) => {
            let result = await this.call('snapshotCumulativesInside', snapshotCumulativesInsideParams(params), options);
            return {
                tickCumulativeInside: new eth_contract_1.BigNumber(result.tickCumulativeInside),
                secondsPerLiquidityInsideX128: new eth_contract_1.BigNumber(result.secondsPerLiquidityInsideX128),
                secondsInside: new eth_contract_1.BigNumber(result.secondsInside)
            };
        };
        this.snapshotCumulativesInside = snapshotCumulativesInside_call;
        let tickBitmap_call = async (param1, options) => {
            let result = await this.call('tickBitmap', [this.wallet.utils.toString(param1)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.tickBitmap = tickBitmap_call;
        let tickSpacing_call = async (options) => {
            let result = await this.call('tickSpacing', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.tickSpacing = tickSpacing_call;
        let ticks_call = async (param1, options) => {
            let result = await this.call('ticks', [this.wallet.utils.toString(param1)], options);
            return {
                liquidityGross: new eth_contract_1.BigNumber(result.liquidityGross),
                liquidityNet: new eth_contract_1.BigNumber(result.liquidityNet),
                feeGrowthOutside0X128: new eth_contract_1.BigNumber(result.feeGrowthOutside0X128),
                feeGrowthOutside1X128: new eth_contract_1.BigNumber(result.feeGrowthOutside1X128),
                tickCumulativeOutside: new eth_contract_1.BigNumber(result.tickCumulativeOutside),
                secondsPerLiquidityOutsideX128: new eth_contract_1.BigNumber(result.secondsPerLiquidityOutsideX128),
                secondsOutside: new eth_contract_1.BigNumber(result.secondsOutside),
                initialized: result.initialized
            };
        };
        this.ticks = ticks_call;
        let token0_call = async (options) => {
            let result = await this.call('token0', [], options);
            return result;
        };
        this.token0 = token0_call;
        let token1_call = async (options) => {
            let result = await this.call('token1', [], options);
            return result;
        };
        this.token1 = token1_call;
        let burnParams = (params) => [this.wallet.utils.toString(params.tickLower), this.wallet.utils.toString(params.tickUpper), this.wallet.utils.toString(params.amount)];
        let burn_send = async (params, options) => {
            let result = await this.send('burn', burnParams(params), options);
            return result;
        };
        let burn_call = async (params, options) => {
            let result = await this.call('burn', burnParams(params), options);
            return {
                amount0: new eth_contract_1.BigNumber(result.amount0),
                amount1: new eth_contract_1.BigNumber(result.amount1)
            };
        };
        this.burn = Object.assign(burn_send, {
            call: burn_call
        });
        let collectParams = (params) => [params.recipient, this.wallet.utils.toString(params.tickLower), this.wallet.utils.toString(params.tickUpper), this.wallet.utils.toString(params.amount0Requested), this.wallet.utils.toString(params.amount1Requested)];
        let collect_send = async (params, options) => {
            let result = await this.send('collect', collectParams(params), options);
            return result;
        };
        let collect_call = async (params, options) => {
            let result = await this.call('collect', collectParams(params), options);
            return {
                amount0: new eth_contract_1.BigNumber(result.amount0),
                amount1: new eth_contract_1.BigNumber(result.amount1)
            };
        };
        this.collect = Object.assign(collect_send, {
            call: collect_call
        });
        let collectProtocolParams = (params) => [params.recipient, this.wallet.utils.toString(params.amount0Requested), this.wallet.utils.toString(params.amount1Requested)];
        let collectProtocol_send = async (params, options) => {
            let result = await this.send('collectProtocol', collectProtocolParams(params), options);
            return result;
        };
        let collectProtocol_call = async (params, options) => {
            let result = await this.call('collectProtocol', collectProtocolParams(params), options);
            return {
                amount0: new eth_contract_1.BigNumber(result.amount0),
                amount1: new eth_contract_1.BigNumber(result.amount1)
            };
        };
        this.collectProtocol = Object.assign(collectProtocol_send, {
            call: collectProtocol_call
        });
        let flashParams = (params) => [params.recipient, this.wallet.utils.toString(params.amount0), this.wallet.utils.toString(params.amount1), this.wallet.utils.stringToBytes(params.data)];
        let flash_send = async (params, options) => {
            let result = await this.send('flash', flashParams(params), options);
            return result;
        };
        let flash_call = async (params, options) => {
            let result = await this.call('flash', flashParams(params), options);
            return;
        };
        this.flash = Object.assign(flash_send, {
            call: flash_call
        });
        let increaseObservationCardinalityNext_send = async (observationCardinalityNext, options) => {
            let result = await this.send('increaseObservationCardinalityNext', [this.wallet.utils.toString(observationCardinalityNext)], options);
            return result;
        };
        let increaseObservationCardinalityNext_call = async (observationCardinalityNext, options) => {
            let result = await this.call('increaseObservationCardinalityNext', [this.wallet.utils.toString(observationCardinalityNext)], options);
            return;
        };
        this.increaseObservationCardinalityNext = Object.assign(increaseObservationCardinalityNext_send, {
            call: increaseObservationCardinalityNext_call
        });
        let initialize_send = async (sqrtPriceX96, options) => {
            let result = await this.send('initialize', [this.wallet.utils.toString(sqrtPriceX96)], options);
            return result;
        };
        let initialize_call = async (sqrtPriceX96, options) => {
            let result = await this.call('initialize', [this.wallet.utils.toString(sqrtPriceX96)], options);
            return;
        };
        this.initialize = Object.assign(initialize_send, {
            call: initialize_call
        });
        let mintParams = (params) => [params.recipient, this.wallet.utils.toString(params.tickLower), this.wallet.utils.toString(params.tickUpper), this.wallet.utils.toString(params.amount), this.wallet.utils.stringToBytes(params.data)];
        let mint_send = async (params, options) => {
            let result = await this.send('mint', mintParams(params), options);
            return result;
        };
        let mint_call = async (params, options) => {
            let result = await this.call('mint', mintParams(params), options);
            return {
                amount0: new eth_contract_1.BigNumber(result.amount0),
                amount1: new eth_contract_1.BigNumber(result.amount1)
            };
        };
        this.mint = Object.assign(mint_send, {
            call: mint_call
        });
        let setFeeProtocolParams = (params) => [this.wallet.utils.toString(params.feeProtocol0), this.wallet.utils.toString(params.feeProtocol1)];
        let setFeeProtocol_send = async (params, options) => {
            let result = await this.send('setFeeProtocol', setFeeProtocolParams(params), options);
            return result;
        };
        let setFeeProtocol_call = async (params, options) => {
            let result = await this.call('setFeeProtocol', setFeeProtocolParams(params), options);
            return;
        };
        this.setFeeProtocol = Object.assign(setFeeProtocol_send, {
            call: setFeeProtocol_call
        });
        let swapParams = (params) => [params.recipient, params.zeroForOne, this.wallet.utils.toString(params.amountSpecified), this.wallet.utils.toString(params.sqrtPriceLimitX96), this.wallet.utils.stringToBytes(params.data)];
        let swap_send = async (params, options) => {
            let result = await this.send('swap', swapParams(params), options);
            return result;
        };
        let swap_call = async (params, options) => {
            let result = await this.call('swap', swapParams(params), options);
            return {
                amount0: new eth_contract_1.BigNumber(result.amount0),
                amount1: new eth_contract_1.BigNumber(result.amount1)
            };
        };
        this.swap = Object.assign(swap_send, {
            call: swap_call
        });
    }
}
UniswapV3Pool._abi = UniswapV3Pool_json_1.default.abi;
exports.UniswapV3Pool = UniswapV3Pool;

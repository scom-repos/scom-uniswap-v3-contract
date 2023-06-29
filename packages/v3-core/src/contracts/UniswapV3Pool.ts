import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./UniswapV3Pool.json";
export interface IBurnParams {tickLower:number|BigNumber;tickUpper:number|BigNumber;amount:number|BigNumber}
export interface ICollectParams {recipient:string;tickLower:number|BigNumber;tickUpper:number|BigNumber;amount0Requested:number|BigNumber;amount1Requested:number|BigNumber}
export interface ICollectProtocolParams {recipient:string;amount0Requested:number|BigNumber;amount1Requested:number|BigNumber}
export interface IFlashParams {recipient:string;amount0:number|BigNumber;amount1:number|BigNumber;data:string}
export interface IMintParams {recipient:string;tickLower:number|BigNumber;tickUpper:number|BigNumber;amount:number|BigNumber;data:string}
export interface ISetFeeProtocolParams {feeProtocol0:number|BigNumber;feeProtocol1:number|BigNumber}
export interface ISnapshotCumulativesInsideParams {tickLower:number|BigNumber;tickUpper:number|BigNumber}
export interface ISwapParams {recipient:string;zeroForOne:boolean;amountSpecified:number|BigNumber;sqrtPriceLimitX96:number|BigNumber;data:string}
export class UniswapV3Pool extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(options?: TransactionOptions): Promise<string>{
        return this.__deploy([], options);
    }
    parseBurnEvent(receipt: TransactionReceipt): UniswapV3Pool.BurnEvent[]{
        return this.parseEvents(receipt, "Burn").map(e=>this.decodeBurnEvent(e));
    }
    decodeBurnEvent(event: Event): UniswapV3Pool.BurnEvent{
        let result = event.data;
        return {
            owner: result.owner,
            tickLower: new BigNumber(result.tickLower),
            tickUpper: new BigNumber(result.tickUpper),
            amount: new BigNumber(result.amount),
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1),
            _event: event
        };
    }
    parseCollectEvent(receipt: TransactionReceipt): UniswapV3Pool.CollectEvent[]{
        return this.parseEvents(receipt, "Collect").map(e=>this.decodeCollectEvent(e));
    }
    decodeCollectEvent(event: Event): UniswapV3Pool.CollectEvent{
        let result = event.data;
        return {
            owner: result.owner,
            recipient: result.recipient,
            tickLower: new BigNumber(result.tickLower),
            tickUpper: new BigNumber(result.tickUpper),
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1),
            _event: event
        };
    }
    parseCollectProtocolEvent(receipt: TransactionReceipt): UniswapV3Pool.CollectProtocolEvent[]{
        return this.parseEvents(receipt, "CollectProtocol").map(e=>this.decodeCollectProtocolEvent(e));
    }
    decodeCollectProtocolEvent(event: Event): UniswapV3Pool.CollectProtocolEvent{
        let result = event.data;
        return {
            sender: result.sender,
            recipient: result.recipient,
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1),
            _event: event
        };
    }
    parseFlashEvent(receipt: TransactionReceipt): UniswapV3Pool.FlashEvent[]{
        return this.parseEvents(receipt, "Flash").map(e=>this.decodeFlashEvent(e));
    }
    decodeFlashEvent(event: Event): UniswapV3Pool.FlashEvent{
        let result = event.data;
        return {
            sender: result.sender,
            recipient: result.recipient,
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1),
            paid0: new BigNumber(result.paid0),
            paid1: new BigNumber(result.paid1),
            _event: event
        };
    }
    parseIncreaseObservationCardinalityNextEvent(receipt: TransactionReceipt): UniswapV3Pool.IncreaseObservationCardinalityNextEvent[]{
        return this.parseEvents(receipt, "IncreaseObservationCardinalityNext").map(e=>this.decodeIncreaseObservationCardinalityNextEvent(e));
    }
    decodeIncreaseObservationCardinalityNextEvent(event: Event): UniswapV3Pool.IncreaseObservationCardinalityNextEvent{
        let result = event.data;
        return {
            observationCardinalityNextOld: new BigNumber(result.observationCardinalityNextOld),
            observationCardinalityNextNew: new BigNumber(result.observationCardinalityNextNew),
            _event: event
        };
    }
    parseInitializeEvent(receipt: TransactionReceipt): UniswapV3Pool.InitializeEvent[]{
        return this.parseEvents(receipt, "Initialize").map(e=>this.decodeInitializeEvent(e));
    }
    decodeInitializeEvent(event: Event): UniswapV3Pool.InitializeEvent{
        let result = event.data;
        return {
            sqrtPriceX96: new BigNumber(result.sqrtPriceX96),
            tick: new BigNumber(result.tick),
            _event: event
        };
    }
    parseMintEvent(receipt: TransactionReceipt): UniswapV3Pool.MintEvent[]{
        return this.parseEvents(receipt, "Mint").map(e=>this.decodeMintEvent(e));
    }
    decodeMintEvent(event: Event): UniswapV3Pool.MintEvent{
        let result = event.data;
        return {
            sender: result.sender,
            owner: result.owner,
            tickLower: new BigNumber(result.tickLower),
            tickUpper: new BigNumber(result.tickUpper),
            amount: new BigNumber(result.amount),
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1),
            _event: event
        };
    }
    parseSetFeeProtocolEvent(receipt: TransactionReceipt): UniswapV3Pool.SetFeeProtocolEvent[]{
        return this.parseEvents(receipt, "SetFeeProtocol").map(e=>this.decodeSetFeeProtocolEvent(e));
    }
    decodeSetFeeProtocolEvent(event: Event): UniswapV3Pool.SetFeeProtocolEvent{
        let result = event.data;
        return {
            feeProtocol0Old: new BigNumber(result.feeProtocol0Old),
            feeProtocol1Old: new BigNumber(result.feeProtocol1Old),
            feeProtocol0New: new BigNumber(result.feeProtocol0New),
            feeProtocol1New: new BigNumber(result.feeProtocol1New),
            _event: event
        };
    }
    parseSwapEvent(receipt: TransactionReceipt): UniswapV3Pool.SwapEvent[]{
        return this.parseEvents(receipt, "Swap").map(e=>this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event: Event): UniswapV3Pool.SwapEvent{
        let result = event.data;
        return {
            sender: result.sender,
            recipient: result.recipient,
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1),
            sqrtPriceX96: new BigNumber(result.sqrtPriceX96),
            liquidity: new BigNumber(result.liquidity),
            tick: new BigNumber(result.tick),
            _event: event
        };
    }
    burn: {
        (params: IBurnParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IBurnParams, options?: TransactionOptions) => Promise<{amount0:BigNumber,amount1:BigNumber}>;
    }
    collect: {
        (params: ICollectParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICollectParams, options?: TransactionOptions) => Promise<{amount0:BigNumber,amount1:BigNumber}>;
    }
    collectProtocol: {
        (params: ICollectProtocolParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICollectProtocolParams, options?: TransactionOptions) => Promise<{amount0:BigNumber,amount1:BigNumber}>;
    }
    factory: {
        (options?: TransactionOptions): Promise<string>;
    }
    fee: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    feeGrowthGlobal0X128: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    feeGrowthGlobal1X128: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    flash: {
        (params: IFlashParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IFlashParams, options?: TransactionOptions) => Promise<void>;
    }
    increaseObservationCardinalityNext: {
        (observationCardinalityNext:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (observationCardinalityNext:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    initialize: {
        (sqrtPriceX96:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (sqrtPriceX96:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    liquidity: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    maxLiquidityPerTick: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    mint: {
        (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IMintParams, options?: TransactionOptions) => Promise<{amount0:BigNumber,amount1:BigNumber}>;
    }
    observations: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<{blockTimestamp:BigNumber,tickCumulative:BigNumber,secondsPerLiquidityCumulativeX128:BigNumber,initialized:boolean}>;
    }
    observe: {
        (secondsAgos:(number|BigNumber)[], options?: TransactionOptions): Promise<{tickCumulatives:BigNumber[],secondsPerLiquidityCumulativeX128s:BigNumber[]}>;
    }
    positions: {
        (param1:string, options?: TransactionOptions): Promise<{liquidity:BigNumber,feeGrowthInside0LastX128:BigNumber,feeGrowthInside1LastX128:BigNumber,tokensOwed0:BigNumber,tokensOwed1:BigNumber}>;
    }
    protocolFees: {
        (options?: TransactionOptions): Promise<{token0:BigNumber,token1:BigNumber}>;
    }
    setFeeProtocol: {
        (params: ISetFeeProtocolParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetFeeProtocolParams, options?: TransactionOptions) => Promise<void>;
    }
    slot0: {
        (options?: TransactionOptions): Promise<{sqrtPriceX96:BigNumber,tick:BigNumber,observationIndex:BigNumber,observationCardinality:BigNumber,observationCardinalityNext:BigNumber,feeProtocol:BigNumber,unlocked:boolean}>;
    }
    snapshotCumulativesInside: {
        (params: ISnapshotCumulativesInsideParams, options?: TransactionOptions): Promise<{tickCumulativeInside:BigNumber,secondsPerLiquidityInsideX128:BigNumber,secondsInside:BigNumber}>;
    }
    swap: {
        (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapParams, options?: TransactionOptions) => Promise<{amount0:BigNumber,amount1:BigNumber}>;
    }
    tickBitmap: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    tickSpacing: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    ticks: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<{liquidityGross:BigNumber,liquidityNet:BigNumber,feeGrowthOutside0X128:BigNumber,feeGrowthOutside1X128:BigNumber,tickCumulativeOutside:BigNumber,secondsPerLiquidityOutsideX128:BigNumber,secondsOutside:BigNumber,initialized:boolean}>;
    }
    token0: {
        (options?: TransactionOptions): Promise<string>;
    }
    token1: {
        (options?: TransactionOptions): Promise<string>;
    }
    private assign(){
        let factory_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('factory',[],options);
            return result;
        }
        this.factory = factory_call
        let fee_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('fee',[],options);
            return new BigNumber(result);
        }
        this.fee = fee_call
        let feeGrowthGlobal0X128_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('feeGrowthGlobal0X128',[],options);
            return new BigNumber(result);
        }
        this.feeGrowthGlobal0X128 = feeGrowthGlobal0X128_call
        let feeGrowthGlobal1X128_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('feeGrowthGlobal1X128',[],options);
            return new BigNumber(result);
        }
        this.feeGrowthGlobal1X128 = feeGrowthGlobal1X128_call
        let liquidity_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('liquidity',[],options);
            return new BigNumber(result);
        }
        this.liquidity = liquidity_call
        let maxLiquidityPerTick_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('maxLiquidityPerTick',[],options);
            return new BigNumber(result);
        }
        this.maxLiquidityPerTick = maxLiquidityPerTick_call
        let observations_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<{blockTimestamp:BigNumber,tickCumulative:BigNumber,secondsPerLiquidityCumulativeX128:BigNumber,initialized:boolean}> => {
            let result = await this.call('observations',[this.wallet.utils.toString(param1)],options);
            return {
                blockTimestamp: new BigNumber(result.blockTimestamp),
                tickCumulative: new BigNumber(result.tickCumulative),
                secondsPerLiquidityCumulativeX128: new BigNumber(result.secondsPerLiquidityCumulativeX128),
                initialized: result.initialized
            };
        }
        this.observations = observations_call
        let observe_call = async (secondsAgos:(number|BigNumber)[], options?: TransactionOptions): Promise<{tickCumulatives:BigNumber[],secondsPerLiquidityCumulativeX128s:BigNumber[]}> => {
            let result = await this.call('observe',[this.wallet.utils.toString(secondsAgos)],options);
            return {
                tickCumulatives: result.tickCumulatives.map(e=>new BigNumber(e)),
                secondsPerLiquidityCumulativeX128s: result.secondsPerLiquidityCumulativeX128s.map(e=>new BigNumber(e))
            };
        }
        this.observe = observe_call
        let positions_call = async (param1:string, options?: TransactionOptions): Promise<{liquidity:BigNumber,feeGrowthInside0LastX128:BigNumber,feeGrowthInside1LastX128:BigNumber,tokensOwed0:BigNumber,tokensOwed1:BigNumber}> => {
            let result = await this.call('positions',[this.wallet.utils.stringToBytes32(param1)],options);
            return {
                liquidity: new BigNumber(result.liquidity),
                feeGrowthInside0LastX128: new BigNumber(result.feeGrowthInside0LastX128),
                feeGrowthInside1LastX128: new BigNumber(result.feeGrowthInside1LastX128),
                tokensOwed0: new BigNumber(result.tokensOwed0),
                tokensOwed1: new BigNumber(result.tokensOwed1)
            };
        }
        this.positions = positions_call
        let protocolFees_call = async (options?: TransactionOptions): Promise<{token0:BigNumber,token1:BigNumber}> => {
            let result = await this.call('protocolFees',[],options);
            return {
                token0: new BigNumber(result.token0),
                token1: new BigNumber(result.token1)
            };
        }
        this.protocolFees = protocolFees_call
        let slot0_call = async (options?: TransactionOptions): Promise<{sqrtPriceX96:BigNumber,tick:BigNumber,observationIndex:BigNumber,observationCardinality:BigNumber,observationCardinalityNext:BigNumber,feeProtocol:BigNumber,unlocked:boolean}> => {
            let result = await this.call('slot0',[],options);
            return {
                sqrtPriceX96: new BigNumber(result.sqrtPriceX96),
                tick: new BigNumber(result.tick),
                observationIndex: new BigNumber(result.observationIndex),
                observationCardinality: new BigNumber(result.observationCardinality),
                observationCardinalityNext: new BigNumber(result.observationCardinalityNext),
                feeProtocol: new BigNumber(result.feeProtocol),
                unlocked: result.unlocked
            };
        }
        this.slot0 = slot0_call
        let snapshotCumulativesInsideParams = (params: ISnapshotCumulativesInsideParams) => [this.wallet.utils.toString(params.tickLower),this.wallet.utils.toString(params.tickUpper)];
        let snapshotCumulativesInside_call = async (params: ISnapshotCumulativesInsideParams, options?: TransactionOptions): Promise<{tickCumulativeInside:BigNumber,secondsPerLiquidityInsideX128:BigNumber,secondsInside:BigNumber}> => {
            let result = await this.call('snapshotCumulativesInside',snapshotCumulativesInsideParams(params),options);
            return {
                tickCumulativeInside: new BigNumber(result.tickCumulativeInside),
                secondsPerLiquidityInsideX128: new BigNumber(result.secondsPerLiquidityInsideX128),
                secondsInside: new BigNumber(result.secondsInside)
            };
        }
        this.snapshotCumulativesInside = snapshotCumulativesInside_call
        let tickBitmap_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('tickBitmap',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this.tickBitmap = tickBitmap_call
        let tickSpacing_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('tickSpacing',[],options);
            return new BigNumber(result);
        }
        this.tickSpacing = tickSpacing_call
        let ticks_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<{liquidityGross:BigNumber,liquidityNet:BigNumber,feeGrowthOutside0X128:BigNumber,feeGrowthOutside1X128:BigNumber,tickCumulativeOutside:BigNumber,secondsPerLiquidityOutsideX128:BigNumber,secondsOutside:BigNumber,initialized:boolean}> => {
            let result = await this.call('ticks',[this.wallet.utils.toString(param1)],options);
            return {
                liquidityGross: new BigNumber(result.liquidityGross),
                liquidityNet: new BigNumber(result.liquidityNet),
                feeGrowthOutside0X128: new BigNumber(result.feeGrowthOutside0X128),
                feeGrowthOutside1X128: new BigNumber(result.feeGrowthOutside1X128),
                tickCumulativeOutside: new BigNumber(result.tickCumulativeOutside),
                secondsPerLiquidityOutsideX128: new BigNumber(result.secondsPerLiquidityOutsideX128),
                secondsOutside: new BigNumber(result.secondsOutside),
                initialized: result.initialized
            };
        }
        this.ticks = ticks_call
        let token0_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('token0',[],options);
            return result;
        }
        this.token0 = token0_call
        let token1_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('token1',[],options);
            return result;
        }
        this.token1 = token1_call
        let burnParams = (params: IBurnParams) => [this.wallet.utils.toString(params.tickLower),this.wallet.utils.toString(params.tickUpper),this.wallet.utils.toString(params.amount)];
        let burn_send = async (params: IBurnParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('burn',burnParams(params),options);
            return result;
        }
        let burn_call = async (params: IBurnParams, options?: TransactionOptions): Promise<{amount0:BigNumber,amount1:BigNumber}> => {
            let result = await this.call('burn',burnParams(params),options);
            return {
                amount0: new BigNumber(result.amount0),
                amount1: new BigNumber(result.amount1)
            };
        }
        this.burn = Object.assign(burn_send, {
            call:burn_call
        });
        let collectParams = (params: ICollectParams) => [params.recipient,this.wallet.utils.toString(params.tickLower),this.wallet.utils.toString(params.tickUpper),this.wallet.utils.toString(params.amount0Requested),this.wallet.utils.toString(params.amount1Requested)];
        let collect_send = async (params: ICollectParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('collect',collectParams(params),options);
            return result;
        }
        let collect_call = async (params: ICollectParams, options?: TransactionOptions): Promise<{amount0:BigNumber,amount1:BigNumber}> => {
            let result = await this.call('collect',collectParams(params),options);
            return {
                amount0: new BigNumber(result.amount0),
                amount1: new BigNumber(result.amount1)
            };
        }
        this.collect = Object.assign(collect_send, {
            call:collect_call
        });
        let collectProtocolParams = (params: ICollectProtocolParams) => [params.recipient,this.wallet.utils.toString(params.amount0Requested),this.wallet.utils.toString(params.amount1Requested)];
        let collectProtocol_send = async (params: ICollectProtocolParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('collectProtocol',collectProtocolParams(params),options);
            return result;
        }
        let collectProtocol_call = async (params: ICollectProtocolParams, options?: TransactionOptions): Promise<{amount0:BigNumber,amount1:BigNumber}> => {
            let result = await this.call('collectProtocol',collectProtocolParams(params),options);
            return {
                amount0: new BigNumber(result.amount0),
                amount1: new BigNumber(result.amount1)
            };
        }
        this.collectProtocol = Object.assign(collectProtocol_send, {
            call:collectProtocol_call
        });
        let flashParams = (params: IFlashParams) => [params.recipient,this.wallet.utils.toString(params.amount0),this.wallet.utils.toString(params.amount1),this.wallet.utils.stringToBytes(params.data)];
        let flash_send = async (params: IFlashParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('flash',flashParams(params),options);
            return result;
        }
        let flash_call = async (params: IFlashParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('flash',flashParams(params),options);
            return;
        }
        this.flash = Object.assign(flash_send, {
            call:flash_call
        });
        let increaseObservationCardinalityNext_send = async (observationCardinalityNext:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('increaseObservationCardinalityNext',[this.wallet.utils.toString(observationCardinalityNext)],options);
            return result;
        }
        let increaseObservationCardinalityNext_call = async (observationCardinalityNext:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('increaseObservationCardinalityNext',[this.wallet.utils.toString(observationCardinalityNext)],options);
            return;
        }
        this.increaseObservationCardinalityNext = Object.assign(increaseObservationCardinalityNext_send, {
            call:increaseObservationCardinalityNext_call
        });
        let initialize_send = async (sqrtPriceX96:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('initialize',[this.wallet.utils.toString(sqrtPriceX96)],options);
            return result;
        }
        let initialize_call = async (sqrtPriceX96:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('initialize',[this.wallet.utils.toString(sqrtPriceX96)],options);
            return;
        }
        this.initialize = Object.assign(initialize_send, {
            call:initialize_call
        });
        let mintParams = (params: IMintParams) => [params.recipient,this.wallet.utils.toString(params.tickLower),this.wallet.utils.toString(params.tickUpper),this.wallet.utils.toString(params.amount),this.wallet.utils.stringToBytes(params.data)];
        let mint_send = async (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('mint',mintParams(params),options);
            return result;
        }
        let mint_call = async (params: IMintParams, options?: TransactionOptions): Promise<{amount0:BigNumber,amount1:BigNumber}> => {
            let result = await this.call('mint',mintParams(params),options);
            return {
                amount0: new BigNumber(result.amount0),
                amount1: new BigNumber(result.amount1)
            };
        }
        this.mint = Object.assign(mint_send, {
            call:mint_call
        });
        let setFeeProtocolParams = (params: ISetFeeProtocolParams) => [this.wallet.utils.toString(params.feeProtocol0),this.wallet.utils.toString(params.feeProtocol1)];
        let setFeeProtocol_send = async (params: ISetFeeProtocolParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setFeeProtocol',setFeeProtocolParams(params),options);
            return result;
        }
        let setFeeProtocol_call = async (params: ISetFeeProtocolParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setFeeProtocol',setFeeProtocolParams(params),options);
            return;
        }
        this.setFeeProtocol = Object.assign(setFeeProtocol_send, {
            call:setFeeProtocol_call
        });
        let swapParams = (params: ISwapParams) => [params.recipient,params.zeroForOne,this.wallet.utils.toString(params.amountSpecified),this.wallet.utils.toString(params.sqrtPriceLimitX96),this.wallet.utils.stringToBytes(params.data)];
        let swap_send = async (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swap',swapParams(params),options);
            return result;
        }
        let swap_call = async (params: ISwapParams, options?: TransactionOptions): Promise<{amount0:BigNumber,amount1:BigNumber}> => {
            let result = await this.call('swap',swapParams(params),options);
            return {
                amount0: new BigNumber(result.amount0),
                amount1: new BigNumber(result.amount1)
            };
        }
        this.swap = Object.assign(swap_send, {
            call:swap_call
        });
    }
}
export module UniswapV3Pool{
    export interface BurnEvent {owner:string,tickLower:BigNumber,tickUpper:BigNumber,amount:BigNumber,amount0:BigNumber,amount1:BigNumber,_event:Event}
    export interface CollectEvent {owner:string,recipient:string,tickLower:BigNumber,tickUpper:BigNumber,amount0:BigNumber,amount1:BigNumber,_event:Event}
    export interface CollectProtocolEvent {sender:string,recipient:string,amount0:BigNumber,amount1:BigNumber,_event:Event}
    export interface FlashEvent {sender:string,recipient:string,amount0:BigNumber,amount1:BigNumber,paid0:BigNumber,paid1:BigNumber,_event:Event}
    export interface IncreaseObservationCardinalityNextEvent {observationCardinalityNextOld:BigNumber,observationCardinalityNextNew:BigNumber,_event:Event}
    export interface InitializeEvent {sqrtPriceX96:BigNumber,tick:BigNumber,_event:Event}
    export interface MintEvent {sender:string,owner:string,tickLower:BigNumber,tickUpper:BigNumber,amount:BigNumber,amount0:BigNumber,amount1:BigNumber,_event:Event}
    export interface SetFeeProtocolEvent {feeProtocol0Old:BigNumber,feeProtocol1Old:BigNumber,feeProtocol0New:BigNumber,feeProtocol1New:BigNumber,_event:Event}
    export interface SwapEvent {sender:string,recipient:string,amount0:BigNumber,amount1:BigNumber,sqrtPriceX96:BigNumber,liquidity:BigNumber,tick:BigNumber,_event:Event}
}
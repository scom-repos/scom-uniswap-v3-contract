import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IBurnParams {
    tickLower: number | BigNumber;
    tickUpper: number | BigNumber;
    amount: number | BigNumber;
}
export interface ICollectParams {
    recipient: string;
    tickLower: number | BigNumber;
    tickUpper: number | BigNumber;
    amount0Requested: number | BigNumber;
    amount1Requested: number | BigNumber;
}
export interface ICollectProtocolParams {
    recipient: string;
    amount0Requested: number | BigNumber;
    amount1Requested: number | BigNumber;
}
export interface IFlashParams {
    recipient: string;
    amount0: number | BigNumber;
    amount1: number | BigNumber;
    data: string;
}
export interface IMintParams {
    recipient: string;
    tickLower: number | BigNumber;
    tickUpper: number | BigNumber;
    amount: number | BigNumber;
    data: string;
}
export interface ISetFeeProtocolParams {
    feeProtocol0: number | BigNumber;
    feeProtocol1: number | BigNumber;
}
export interface ISnapshotCumulativesInsideParams {
    tickLower: number | BigNumber;
    tickUpper: number | BigNumber;
}
export interface ISwapParams {
    recipient: string;
    zeroForOne: boolean;
    amountSpecified: number | BigNumber;
    sqrtPriceLimitX96: number | BigNumber;
    data: string;
}
export declare class UniswapV3Pool extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(options?: TransactionOptions): Promise<string>;
    parseBurnEvent(receipt: TransactionReceipt): UniswapV3Pool.BurnEvent[];
    decodeBurnEvent(event: Event): UniswapV3Pool.BurnEvent;
    parseCollectEvent(receipt: TransactionReceipt): UniswapV3Pool.CollectEvent[];
    decodeCollectEvent(event: Event): UniswapV3Pool.CollectEvent;
    parseCollectProtocolEvent(receipt: TransactionReceipt): UniswapV3Pool.CollectProtocolEvent[];
    decodeCollectProtocolEvent(event: Event): UniswapV3Pool.CollectProtocolEvent;
    parseFlashEvent(receipt: TransactionReceipt): UniswapV3Pool.FlashEvent[];
    decodeFlashEvent(event: Event): UniswapV3Pool.FlashEvent;
    parseIncreaseObservationCardinalityNextEvent(receipt: TransactionReceipt): UniswapV3Pool.IncreaseObservationCardinalityNextEvent[];
    decodeIncreaseObservationCardinalityNextEvent(event: Event): UniswapV3Pool.IncreaseObservationCardinalityNextEvent;
    parseInitializeEvent(receipt: TransactionReceipt): UniswapV3Pool.InitializeEvent[];
    decodeInitializeEvent(event: Event): UniswapV3Pool.InitializeEvent;
    parseMintEvent(receipt: TransactionReceipt): UniswapV3Pool.MintEvent[];
    decodeMintEvent(event: Event): UniswapV3Pool.MintEvent;
    parseSetFeeProtocolEvent(receipt: TransactionReceipt): UniswapV3Pool.SetFeeProtocolEvent[];
    decodeSetFeeProtocolEvent(event: Event): UniswapV3Pool.SetFeeProtocolEvent;
    parseSwapEvent(receipt: TransactionReceipt): UniswapV3Pool.SwapEvent[];
    decodeSwapEvent(event: Event): UniswapV3Pool.SwapEvent;
    burn: {
        (params: IBurnParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IBurnParams, options?: TransactionOptions) => Promise<{
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
    };
    collect: {
        (params: ICollectParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICollectParams, options?: TransactionOptions) => Promise<{
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
    };
    collectProtocol: {
        (params: ICollectProtocolParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICollectProtocolParams, options?: TransactionOptions) => Promise<{
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
    };
    factory: {
        (options?: TransactionOptions): Promise<string>;
    };
    fee: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    feeGrowthGlobal0X128: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    feeGrowthGlobal1X128: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    flash: {
        (params: IFlashParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IFlashParams, options?: TransactionOptions) => Promise<void>;
    };
    increaseObservationCardinalityNext: {
        (observationCardinalityNext: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (observationCardinalityNext: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    initialize: {
        (sqrtPriceX96: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (sqrtPriceX96: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    liquidity: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    maxLiquidityPerTick: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    mint: {
        (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IMintParams, options?: TransactionOptions) => Promise<{
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
    };
    observations: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<{
            blockTimestamp: BigNumber;
            tickCumulative: BigNumber;
            secondsPerLiquidityCumulativeX128: BigNumber;
            initialized: boolean;
        }>;
    };
    observe: {
        (secondsAgos: (number | BigNumber)[], options?: TransactionOptions): Promise<{
            tickCumulatives: BigNumber[];
            secondsPerLiquidityCumulativeX128s: BigNumber[];
        }>;
    };
    positions: {
        (param1: string, options?: TransactionOptions): Promise<{
            liquidity: BigNumber;
            feeGrowthInside0LastX128: BigNumber;
            feeGrowthInside1LastX128: BigNumber;
            tokensOwed0: BigNumber;
            tokensOwed1: BigNumber;
        }>;
    };
    protocolFees: {
        (options?: TransactionOptions): Promise<{
            token0: BigNumber;
            token1: BigNumber;
        }>;
    };
    setFeeProtocol: {
        (params: ISetFeeProtocolParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetFeeProtocolParams, options?: TransactionOptions) => Promise<void>;
    };
    slot0: {
        (options?: TransactionOptions): Promise<{
            sqrtPriceX96: BigNumber;
            tick: BigNumber;
            observationIndex: BigNumber;
            observationCardinality: BigNumber;
            observationCardinalityNext: BigNumber;
            feeProtocol: BigNumber;
            unlocked: boolean;
        }>;
    };
    snapshotCumulativesInside: {
        (params: ISnapshotCumulativesInsideParams, options?: TransactionOptions): Promise<{
            tickCumulativeInside: BigNumber;
            secondsPerLiquidityInsideX128: BigNumber;
            secondsInside: BigNumber;
        }>;
    };
    swap: {
        (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapParams, options?: TransactionOptions) => Promise<{
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
    };
    tickBitmap: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    tickSpacing: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    ticks: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<{
            liquidityGross: BigNumber;
            liquidityNet: BigNumber;
            feeGrowthOutside0X128: BigNumber;
            feeGrowthOutside1X128: BigNumber;
            tickCumulativeOutside: BigNumber;
            secondsPerLiquidityOutsideX128: BigNumber;
            secondsOutside: BigNumber;
            initialized: boolean;
        }>;
    };
    token0: {
        (options?: TransactionOptions): Promise<string>;
    };
    token1: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
export declare module UniswapV3Pool {
    interface BurnEvent {
        owner: string;
        tickLower: BigNumber;
        tickUpper: BigNumber;
        amount: BigNumber;
        amount0: BigNumber;
        amount1: BigNumber;
        _event: Event;
    }
    interface CollectEvent {
        owner: string;
        recipient: string;
        tickLower: BigNumber;
        tickUpper: BigNumber;
        amount0: BigNumber;
        amount1: BigNumber;
        _event: Event;
    }
    interface CollectProtocolEvent {
        sender: string;
        recipient: string;
        amount0: BigNumber;
        amount1: BigNumber;
        _event: Event;
    }
    interface FlashEvent {
        sender: string;
        recipient: string;
        amount0: BigNumber;
        amount1: BigNumber;
        paid0: BigNumber;
        paid1: BigNumber;
        _event: Event;
    }
    interface IncreaseObservationCardinalityNextEvent {
        observationCardinalityNextOld: BigNumber;
        observationCardinalityNextNew: BigNumber;
        _event: Event;
    }
    interface InitializeEvent {
        sqrtPriceX96: BigNumber;
        tick: BigNumber;
        _event: Event;
    }
    interface MintEvent {
        sender: string;
        owner: string;
        tickLower: BigNumber;
        tickUpper: BigNumber;
        amount: BigNumber;
        amount0: BigNumber;
        amount1: BigNumber;
        _event: Event;
    }
    interface SetFeeProtocolEvent {
        feeProtocol0Old: BigNumber;
        feeProtocol1Old: BigNumber;
        feeProtocol0New: BigNumber;
        feeProtocol1New: BigNumber;
        _event: Event;
    }
    interface SwapEvent {
        sender: string;
        recipient: string;
        amount0: BigNumber;
        amount1: BigNumber;
        sqrtPriceX96: BigNumber;
        liquidity: BigNumber;
        tick: BigNumber;
        _event: Event;
    }
}

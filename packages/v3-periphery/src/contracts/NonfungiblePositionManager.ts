import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./NonfungiblePositionManager.json";
export interface IDeployParams {factory:string;WETH9:string;tokenDescriptor:string}
export interface IApproveParams {to:string;tokenId:number|BigNumber}
export interface ICreateAndInitializePoolIfNecessaryParams {token0:string;token1:string;fee:number|BigNumber;sqrtPriceX96:number|BigNumber}
export interface IIsApprovedForAllParams {owner:string;operator:string}
export interface IPermitParams {spender:string;tokenId:number|BigNumber;deadline:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ISafeTransferFromParams {from:string;to:string;tokenId:number|BigNumber}
export interface ISafeTransferFrom_1Params {from:string;to:string;tokenId:number|BigNumber;data:string}
export interface ISelfPermitParams {token:string;value:number|BigNumber;deadline:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ISelfPermitAllowedParams {token:string;nonce:number|BigNumber;expiry:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ISelfPermitAllowedIfNecessaryParams {token:string;nonce:number|BigNumber;expiry:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ISelfPermitIfNecessaryParams {token:string;value:number|BigNumber;deadline:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ISetApprovalForAllParams {operator:string;approved:boolean}
export interface ISweepTokenParams {token:string;amountMinimum:number|BigNumber;recipient:string}
export interface ITokenOfOwnerByIndexParams {owner:string;index:number|BigNumber}
export interface ITransferFromParams {from:string;to:string;tokenId:number|BigNumber}
export interface IUniswapV3MintCallbackParams {amount0Owed:number|BigNumber;amount1Owed:number|BigNumber;data:string}
export interface IUnwrapWETH9Params {amountMinimum:number|BigNumber;recipient:string}
export class NonfungiblePositionManager extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.factory,params.WETH9,params.tokenDescriptor], options);
    }
    parseApprovalEvent(receipt: TransactionReceipt): NonfungiblePositionManager.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): NonfungiblePositionManager.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            approved: result.approved,
            tokenId: new BigNumber(result.tokenId),
            _event: event
        };
    }
    parseApprovalForAllEvent(receipt: TransactionReceipt): NonfungiblePositionManager.ApprovalForAllEvent[]{
        return this.parseEvents(receipt, "ApprovalForAll").map(e=>this.decodeApprovalForAllEvent(e));
    }
    decodeApprovalForAllEvent(event: Event): NonfungiblePositionManager.ApprovalForAllEvent{
        let result = event.data;
        return {
            owner: result.owner,
            operator: result.operator,
            approved: result.approved,
            _event: event
        };
    }
    parseCollectEvent(receipt: TransactionReceipt): NonfungiblePositionManager.CollectEvent[]{
        return this.parseEvents(receipt, "Collect").map(e=>this.decodeCollectEvent(e));
    }
    decodeCollectEvent(event: Event): NonfungiblePositionManager.CollectEvent{
        let result = event.data;
        return {
            tokenId: new BigNumber(result.tokenId),
            recipient: result.recipient,
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1),
            _event: event
        };
    }
    parseDecreaseLiquidityEvent(receipt: TransactionReceipt): NonfungiblePositionManager.DecreaseLiquidityEvent[]{
        return this.parseEvents(receipt, "DecreaseLiquidity").map(e=>this.decodeDecreaseLiquidityEvent(e));
    }
    decodeDecreaseLiquidityEvent(event: Event): NonfungiblePositionManager.DecreaseLiquidityEvent{
        let result = event.data;
        return {
            tokenId: new BigNumber(result.tokenId),
            liquidity: new BigNumber(result.liquidity),
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1),
            _event: event
        };
    }
    parseIncreaseLiquidityEvent(receipt: TransactionReceipt): NonfungiblePositionManager.IncreaseLiquidityEvent[]{
        return this.parseEvents(receipt, "IncreaseLiquidity").map(e=>this.decodeIncreaseLiquidityEvent(e));
    }
    decodeIncreaseLiquidityEvent(event: Event): NonfungiblePositionManager.IncreaseLiquidityEvent{
        let result = event.data;
        return {
            tokenId: new BigNumber(result.tokenId),
            liquidity: new BigNumber(result.liquidity),
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1),
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): NonfungiblePositionManager.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): NonfungiblePositionManager.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            tokenId: new BigNumber(result.tokenId),
            _event: event
        };
    }
    DOMAIN_SEPARATOR: {
        (options?: TransactionOptions): Promise<string>;
    }
    PERMIT_TYPEHASH: {
        (options?: TransactionOptions): Promise<string>;
    }
    WETH9: {
        (options?: TransactionOptions): Promise<string>;
    }
    approve: {
        (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IApproveParams, options?: TransactionOptions) => Promise<void>;
    }
    balanceOf: {
        (owner:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    baseURI: {
        (options?: TransactionOptions): Promise<string>;
    }
    burn: {
        (tokenId:number|BigNumber, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (tokenId:number|BigNumber, options?: number|BigNumber|TransactionOptions) => Promise<void>;
    }
    collect: {
        (params:{tokenId:number|BigNumber,recipient:string,amount0Max:number|BigNumber,amount1Max:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params:{tokenId:number|BigNumber,recipient:string,amount0Max:number|BigNumber,amount1Max:number|BigNumber}, options?: number|BigNumber|TransactionOptions) => Promise<{amount0:BigNumber,amount1:BigNumber}>;
    }
    createAndInitializePoolIfNecessary: {
        (params: ICreateAndInitializePoolIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICreateAndInitializePoolIfNecessaryParams, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    decreaseLiquidity: {
        (params:{tokenId:number|BigNumber,liquidity:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,deadline:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params:{tokenId:number|BigNumber,liquidity:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,deadline:number|BigNumber}, options?: number|BigNumber|TransactionOptions) => Promise<{amount0:BigNumber,amount1:BigNumber}>;
    }
    factory: {
        (options?: TransactionOptions): Promise<string>;
    }
    getApproved: {
        (tokenId:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    increaseLiquidity: {
        (params:{tokenId:number|BigNumber,amount0Desired:number|BigNumber,amount1Desired:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,deadline:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params:{tokenId:number|BigNumber,amount0Desired:number|BigNumber,amount1Desired:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,deadline:number|BigNumber}, options?: number|BigNumber|TransactionOptions) => Promise<{liquidity:BigNumber,amount0:BigNumber,amount1:BigNumber}>;
    }
    isApprovedForAll: {
        (params: IIsApprovedForAllParams, options?: TransactionOptions): Promise<boolean>;
    }
    mint: {
        (params:{token0:string,token1:string,fee:number|BigNumber,tickLower:number|BigNumber,tickUpper:number|BigNumber,amount0Desired:number|BigNumber,amount1Desired:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,recipient:string,deadline:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params:{token0:string,token1:string,fee:number|BigNumber,tickLower:number|BigNumber,tickUpper:number|BigNumber,amount0Desired:number|BigNumber,amount1Desired:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,recipient:string,deadline:number|BigNumber}, options?: number|BigNumber|TransactionOptions) => Promise<{tokenId:BigNumber,liquidity:BigNumber,amount0:BigNumber,amount1:BigNumber}>;
    }
    multicall: {
        (data:string[], options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (data:string[], options?: number|BigNumber|TransactionOptions) => Promise<string[]>;
    }
    name: {
        (options?: TransactionOptions): Promise<string>;
    }
    ownerOf: {
        (tokenId:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    permit: {
        (params: IPermitParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IPermitParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
    }
    positions: {
        (tokenId:number|BigNumber, options?: TransactionOptions): Promise<{nonce:BigNumber,operator:string,token0:string,token1:string,fee:BigNumber,tickLower:BigNumber,tickUpper:BigNumber,liquidity:BigNumber,feeGrowthInside0LastX128:BigNumber,feeGrowthInside1LastX128:BigNumber,tokensOwed0:BigNumber,tokensOwed1:BigNumber}>;
    }
    refundETH: {
        (options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: number|BigNumber|TransactionOptions) => Promise<void>;
    }
    safeTransferFrom: {
        (params: ISafeTransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISafeTransferFromParams, options?: TransactionOptions) => Promise<void>;
    }
    safeTransferFrom_1: {
        (params: ISafeTransferFrom_1Params, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISafeTransferFrom_1Params, options?: TransactionOptions) => Promise<void>;
    }
    selfPermit: {
        (params: ISelfPermitParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISelfPermitParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
    }
    selfPermitAllowed: {
        (params: ISelfPermitAllowedParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISelfPermitAllowedParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
    }
    selfPermitAllowedIfNecessary: {
        (params: ISelfPermitAllowedIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISelfPermitAllowedIfNecessaryParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
    }
    selfPermitIfNecessary: {
        (params: ISelfPermitIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISelfPermitIfNecessaryParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
    }
    setApprovalForAll: {
        (params: ISetApprovalForAllParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetApprovalForAllParams, options?: TransactionOptions) => Promise<void>;
    }
    supportsInterface: {
        (interfaceId:string, options?: TransactionOptions): Promise<boolean>;
    }
    sweepToken: {
        (params: ISweepTokenParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISweepTokenParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
    }
    symbol: {
        (options?: TransactionOptions): Promise<string>;
    }
    tokenByIndex: {
        (index:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    tokenOfOwnerByIndex: {
        (params: ITokenOfOwnerByIndexParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    tokenURI: {
        (tokenId:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    totalSupply: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    transferFrom: {
        (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<void>;
    }
    uniswapV3MintCallback: {
        (params: IUniswapV3MintCallbackParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUniswapV3MintCallbackParams, options?: TransactionOptions) => Promise<void>;
    }
    unwrapWETH9: {
        (params: IUnwrapWETH9Params, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnwrapWETH9Params, options?: number|BigNumber|TransactionOptions) => Promise<void>;
    }
    private assign(){
        let DOMAIN_SEPARATOR_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('DOMAIN_SEPARATOR',[],options);
            return result;
        }
        this.DOMAIN_SEPARATOR = DOMAIN_SEPARATOR_call
        let PERMIT_TYPEHASH_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('PERMIT_TYPEHASH',[],options);
            return result;
        }
        this.PERMIT_TYPEHASH = PERMIT_TYPEHASH_call
        let WETH9_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('WETH9',[],options);
            return result;
        }
        this.WETH9 = WETH9_call
        let balanceOf_call = async (owner:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('balanceOf',[owner],options);
            return new BigNumber(result);
        }
        this.balanceOf = balanceOf_call
        let baseURI_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('baseURI',[],options);
            return result;
        }
        this.baseURI = baseURI_call
        let factory_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('factory',[],options);
            return result;
        }
        this.factory = factory_call
        let getApproved_call = async (tokenId:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('getApproved',[this.wallet.utils.toString(tokenId)],options);
            return result;
        }
        this.getApproved = getApproved_call
        let isApprovedForAllParams = (params: IIsApprovedForAllParams) => [params.owner,params.operator];
        let isApprovedForAll_call = async (params: IIsApprovedForAllParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isApprovedForAll',isApprovedForAllParams(params),options);
            return result;
        }
        this.isApprovedForAll = isApprovedForAll_call
        let name_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('name',[],options);
            return result;
        }
        this.name = name_call
        let ownerOf_call = async (tokenId:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('ownerOf',[this.wallet.utils.toString(tokenId)],options);
            return result;
        }
        this.ownerOf = ownerOf_call
        let positions_call = async (tokenId:number|BigNumber, options?: TransactionOptions): Promise<{nonce:BigNumber,operator:string,token0:string,token1:string,fee:BigNumber,tickLower:BigNumber,tickUpper:BigNumber,liquidity:BigNumber,feeGrowthInside0LastX128:BigNumber,feeGrowthInside1LastX128:BigNumber,tokensOwed0:BigNumber,tokensOwed1:BigNumber}> => {
            let result = await this.call('positions',[this.wallet.utils.toString(tokenId)],options);
            return {
                nonce: new BigNumber(result.nonce),
                operator: result.operator,
                token0: result.token0,
                token1: result.token1,
                fee: new BigNumber(result.fee),
                tickLower: new BigNumber(result.tickLower),
                tickUpper: new BigNumber(result.tickUpper),
                liquidity: new BigNumber(result.liquidity),
                feeGrowthInside0LastX128: new BigNumber(result.feeGrowthInside0LastX128),
                feeGrowthInside1LastX128: new BigNumber(result.feeGrowthInside1LastX128),
                tokensOwed0: new BigNumber(result.tokensOwed0),
                tokensOwed1: new BigNumber(result.tokensOwed1)
            };
        }
        this.positions = positions_call
        let supportsInterface_call = async (interfaceId:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('supportsInterface',[interfaceId],options);
            return result;
        }
        this.supportsInterface = supportsInterface_call
        let symbol_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('symbol',[],options);
            return result;
        }
        this.symbol = symbol_call
        let tokenByIndex_call = async (index:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('tokenByIndex',[this.wallet.utils.toString(index)],options);
            return new BigNumber(result);
        }
        this.tokenByIndex = tokenByIndex_call
        let tokenOfOwnerByIndexParams = (params: ITokenOfOwnerByIndexParams) => [params.owner,this.wallet.utils.toString(params.index)];
        let tokenOfOwnerByIndex_call = async (params: ITokenOfOwnerByIndexParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('tokenOfOwnerByIndex',tokenOfOwnerByIndexParams(params),options);
            return new BigNumber(result);
        }
        this.tokenOfOwnerByIndex = tokenOfOwnerByIndex_call
        let tokenURI_call = async (tokenId:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('tokenURI',[this.wallet.utils.toString(tokenId)],options);
            return result;
        }
        this.tokenURI = tokenURI_call
        let totalSupply_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalSupply',[],options);
            return new BigNumber(result);
        }
        this.totalSupply = totalSupply_call
        let approveParams = (params: IApproveParams) => [params.to,this.wallet.utils.toString(params.tokenId)];
        let approve_send = async (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('approve',approveParams(params),options);
            return result;
        }
        let approve_call = async (params: IApproveParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('approve',approveParams(params),options);
            return;
        }
        this.approve = Object.assign(approve_send, {
            call:approve_call
        });
        let burn_send = async (tokenId:number|BigNumber, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('burn',[this.wallet.utils.toString(tokenId)],options);
            return result;
        }
        let burn_call = async (tokenId:number|BigNumber, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('burn',[this.wallet.utils.toString(tokenId)],options);
            return;
        }
        this.burn = Object.assign(burn_send, {
            call:burn_call
        });
        let collect_send = async (params:{tokenId:number|BigNumber,recipient:string,amount0Max:number|BigNumber,amount1Max:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('collect',[[this.wallet.utils.toString(params.tokenId),params.recipient,this.wallet.utils.toString(params.amount0Max),this.wallet.utils.toString(params.amount1Max)]],options);
            return result;
        }
        let collect_call = async (params:{tokenId:number|BigNumber,recipient:string,amount0Max:number|BigNumber,amount1Max:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<{amount0:BigNumber,amount1:BigNumber}> => {
            let result = await this.call('collect',[[this.wallet.utils.toString(params.tokenId),params.recipient,this.wallet.utils.toString(params.amount0Max),this.wallet.utils.toString(params.amount1Max)]],options);
            return {
                amount0: new BigNumber(result.amount0),
                amount1: new BigNumber(result.amount1)
            };
        }
        this.collect = Object.assign(collect_send, {
            call:collect_call
        });
        let createAndInitializePoolIfNecessaryParams = (params: ICreateAndInitializePoolIfNecessaryParams) => [params.token0,params.token1,this.wallet.utils.toString(params.fee),this.wallet.utils.toString(params.sqrtPriceX96)];
        let createAndInitializePoolIfNecessary_send = async (params: ICreateAndInitializePoolIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('createAndInitializePoolIfNecessary',createAndInitializePoolIfNecessaryParams(params),options);
            return result;
        }
        let createAndInitializePoolIfNecessary_call = async (params: ICreateAndInitializePoolIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.call('createAndInitializePoolIfNecessary',createAndInitializePoolIfNecessaryParams(params),options);
            return result;
        }
        this.createAndInitializePoolIfNecessary = Object.assign(createAndInitializePoolIfNecessary_send, {
            call:createAndInitializePoolIfNecessary_call
        });
        let decreaseLiquidity_send = async (params:{tokenId:number|BigNumber,liquidity:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,deadline:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('decreaseLiquidity',[[this.wallet.utils.toString(params.tokenId),this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amount0Min),this.wallet.utils.toString(params.amount1Min),this.wallet.utils.toString(params.deadline)]],options);
            return result;
        }
        let decreaseLiquidity_call = async (params:{tokenId:number|BigNumber,liquidity:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,deadline:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<{amount0:BigNumber,amount1:BigNumber}> => {
            let result = await this.call('decreaseLiquidity',[[this.wallet.utils.toString(params.tokenId),this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amount0Min),this.wallet.utils.toString(params.amount1Min),this.wallet.utils.toString(params.deadline)]],options);
            return {
                amount0: new BigNumber(result.amount0),
                amount1: new BigNumber(result.amount1)
            };
        }
        this.decreaseLiquidity = Object.assign(decreaseLiquidity_send, {
            call:decreaseLiquidity_call
        });
        let increaseLiquidity_send = async (params:{tokenId:number|BigNumber,amount0Desired:number|BigNumber,amount1Desired:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,deadline:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('increaseLiquidity',[[this.wallet.utils.toString(params.tokenId),this.wallet.utils.toString(params.amount0Desired),this.wallet.utils.toString(params.amount1Desired),this.wallet.utils.toString(params.amount0Min),this.wallet.utils.toString(params.amount1Min),this.wallet.utils.toString(params.deadline)]],options);
            return result;
        }
        let increaseLiquidity_call = async (params:{tokenId:number|BigNumber,amount0Desired:number|BigNumber,amount1Desired:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,deadline:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<{liquidity:BigNumber,amount0:BigNumber,amount1:BigNumber}> => {
            let result = await this.call('increaseLiquidity',[[this.wallet.utils.toString(params.tokenId),this.wallet.utils.toString(params.amount0Desired),this.wallet.utils.toString(params.amount1Desired),this.wallet.utils.toString(params.amount0Min),this.wallet.utils.toString(params.amount1Min),this.wallet.utils.toString(params.deadline)]],options);
            return {
                liquidity: new BigNumber(result.liquidity),
                amount0: new BigNumber(result.amount0),
                amount1: new BigNumber(result.amount1)
            };
        }
        this.increaseLiquidity = Object.assign(increaseLiquidity_send, {
            call:increaseLiquidity_call
        });
        let mint_send = async (params:{token0:string,token1:string,fee:number|BigNumber,tickLower:number|BigNumber,tickUpper:number|BigNumber,amount0Desired:number|BigNumber,amount1Desired:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,recipient:string,deadline:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('mint',[[params.token0,params.token1,this.wallet.utils.toString(params.fee),this.wallet.utils.toString(params.tickLower),this.wallet.utils.toString(params.tickUpper),this.wallet.utils.toString(params.amount0Desired),this.wallet.utils.toString(params.amount1Desired),this.wallet.utils.toString(params.amount0Min),this.wallet.utils.toString(params.amount1Min),params.recipient,this.wallet.utils.toString(params.deadline)]],options);
            return result;
        }
        let mint_call = async (params:{token0:string,token1:string,fee:number|BigNumber,tickLower:number|BigNumber,tickUpper:number|BigNumber,amount0Desired:number|BigNumber,amount1Desired:number|BigNumber,amount0Min:number|BigNumber,amount1Min:number|BigNumber,recipient:string,deadline:number|BigNumber}, options?: number|BigNumber|TransactionOptions): Promise<{tokenId:BigNumber,liquidity:BigNumber,amount0:BigNumber,amount1:BigNumber}> => {
            let result = await this.call('mint',[[params.token0,params.token1,this.wallet.utils.toString(params.fee),this.wallet.utils.toString(params.tickLower),this.wallet.utils.toString(params.tickUpper),this.wallet.utils.toString(params.amount0Desired),this.wallet.utils.toString(params.amount1Desired),this.wallet.utils.toString(params.amount0Min),this.wallet.utils.toString(params.amount1Min),params.recipient,this.wallet.utils.toString(params.deadline)]],options);
            return {
                tokenId: new BigNumber(result.tokenId),
                liquidity: new BigNumber(result.liquidity),
                amount0: new BigNumber(result.amount0),
                amount1: new BigNumber(result.amount1)
            };
        }
        this.mint = Object.assign(mint_send, {
            call:mint_call
        });
        let multicall_send = async (data:string[], options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('multicall',[this.wallet.utils.stringToBytes(data)],options);
            return result;
        }
        let multicall_call = async (data:string[], options?: number|BigNumber|TransactionOptions): Promise<string[]> => {
            let result = await this.call('multicall',[this.wallet.utils.stringToBytes(data)],options);
            return result;
        }
        this.multicall = Object.assign(multicall_send, {
            call:multicall_call
        });
        let permitParams = (params: IPermitParams) => [params.spender,this.wallet.utils.toString(params.tokenId),this.wallet.utils.toString(params.deadline),this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let permit_send = async (params: IPermitParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('permit',permitParams(params),options);
            return result;
        }
        let permit_call = async (params: IPermitParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('permit',permitParams(params),options);
            return;
        }
        this.permit = Object.assign(permit_send, {
            call:permit_call
        });
        let refundETH_send = async (options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('refundETH',[],options);
            return result;
        }
        let refundETH_call = async (options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('refundETH',[],options);
            return;
        }
        this.refundETH = Object.assign(refundETH_send, {
            call:refundETH_call
        });
        let safeTransferFromParams = (params: ISafeTransferFromParams) => [params.from,params.to,this.wallet.utils.toString(params.tokenId)];
        let safeTransferFrom_send = async (params: ISafeTransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('safeTransferFrom',safeTransferFromParams(params),options);
            return result;
        }
        let safeTransferFrom_call = async (params: ISafeTransferFromParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('safeTransferFrom',safeTransferFromParams(params),options);
            return;
        }
        this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
            call:safeTransferFrom_call
        });
        let safeTransferFrom_1Params = (params: ISafeTransferFrom_1Params) => [params.from,params.to,this.wallet.utils.toString(params.tokenId),this.wallet.utils.stringToBytes(params.data)];
        let safeTransferFrom_1_send = async (params: ISafeTransferFrom_1Params, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('safeTransferFrom',safeTransferFrom_1Params(params),options);
            return result;
        }
        let safeTransferFrom_1_call = async (params: ISafeTransferFrom_1Params, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('safeTransferFrom',safeTransferFrom_1Params(params),options);
            return;
        }
        this.safeTransferFrom_1 = Object.assign(safeTransferFrom_1_send, {
            call:safeTransferFrom_1_call
        });
        let selfPermitParams = (params: ISelfPermitParams) => [params.token,this.wallet.utils.toString(params.value),this.wallet.utils.toString(params.deadline),this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let selfPermit_send = async (params: ISelfPermitParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('selfPermit',selfPermitParams(params),options);
            return result;
        }
        let selfPermit_call = async (params: ISelfPermitParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('selfPermit',selfPermitParams(params),options);
            return;
        }
        this.selfPermit = Object.assign(selfPermit_send, {
            call:selfPermit_call
        });
        let selfPermitAllowedParams = (params: ISelfPermitAllowedParams) => [params.token,this.wallet.utils.toString(params.nonce),this.wallet.utils.toString(params.expiry),this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let selfPermitAllowed_send = async (params: ISelfPermitAllowedParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('selfPermitAllowed',selfPermitAllowedParams(params),options);
            return result;
        }
        let selfPermitAllowed_call = async (params: ISelfPermitAllowedParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('selfPermitAllowed',selfPermitAllowedParams(params),options);
            return;
        }
        this.selfPermitAllowed = Object.assign(selfPermitAllowed_send, {
            call:selfPermitAllowed_call
        });
        let selfPermitAllowedIfNecessaryParams = (params: ISelfPermitAllowedIfNecessaryParams) => [params.token,this.wallet.utils.toString(params.nonce),this.wallet.utils.toString(params.expiry),this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let selfPermitAllowedIfNecessary_send = async (params: ISelfPermitAllowedIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('selfPermitAllowedIfNecessary',selfPermitAllowedIfNecessaryParams(params),options);
            return result;
        }
        let selfPermitAllowedIfNecessary_call = async (params: ISelfPermitAllowedIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('selfPermitAllowedIfNecessary',selfPermitAllowedIfNecessaryParams(params),options);
            return;
        }
        this.selfPermitAllowedIfNecessary = Object.assign(selfPermitAllowedIfNecessary_send, {
            call:selfPermitAllowedIfNecessary_call
        });
        let selfPermitIfNecessaryParams = (params: ISelfPermitIfNecessaryParams) => [params.token,this.wallet.utils.toString(params.value),this.wallet.utils.toString(params.deadline),this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let selfPermitIfNecessary_send = async (params: ISelfPermitIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('selfPermitIfNecessary',selfPermitIfNecessaryParams(params),options);
            return result;
        }
        let selfPermitIfNecessary_call = async (params: ISelfPermitIfNecessaryParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('selfPermitIfNecessary',selfPermitIfNecessaryParams(params),options);
            return;
        }
        this.selfPermitIfNecessary = Object.assign(selfPermitIfNecessary_send, {
            call:selfPermitIfNecessary_call
        });
        let setApprovalForAllParams = (params: ISetApprovalForAllParams) => [params.operator,params.approved];
        let setApprovalForAll_send = async (params: ISetApprovalForAllParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setApprovalForAll',setApprovalForAllParams(params),options);
            return result;
        }
        let setApprovalForAll_call = async (params: ISetApprovalForAllParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setApprovalForAll',setApprovalForAllParams(params),options);
            return;
        }
        this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
            call:setApprovalForAll_call
        });
        let sweepTokenParams = (params: ISweepTokenParams) => [params.token,this.wallet.utils.toString(params.amountMinimum),params.recipient];
        let sweepToken_send = async (params: ISweepTokenParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('sweepToken',sweepTokenParams(params),options);
            return result;
        }
        let sweepToken_call = async (params: ISweepTokenParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('sweepToken',sweepTokenParams(params),options);
            return;
        }
        this.sweepToken = Object.assign(sweepToken_send, {
            call:sweepToken_call
        });
        let transferFromParams = (params: ITransferFromParams) => [params.from,params.to,this.wallet.utils.toString(params.tokenId)];
        let transferFrom_send = async (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferFrom',transferFromParams(params),options);
            return result;
        }
        let transferFrom_call = async (params: ITransferFromParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferFrom',transferFromParams(params),options);
            return;
        }
        this.transferFrom = Object.assign(transferFrom_send, {
            call:transferFrom_call
        });
        let uniswapV3MintCallbackParams = (params: IUniswapV3MintCallbackParams) => [this.wallet.utils.toString(params.amount0Owed),this.wallet.utils.toString(params.amount1Owed),this.wallet.utils.stringToBytes(params.data)];
        let uniswapV3MintCallback_send = async (params: IUniswapV3MintCallbackParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('uniswapV3MintCallback',uniswapV3MintCallbackParams(params),options);
            return result;
        }
        let uniswapV3MintCallback_call = async (params: IUniswapV3MintCallbackParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('uniswapV3MintCallback',uniswapV3MintCallbackParams(params),options);
            return;
        }
        this.uniswapV3MintCallback = Object.assign(uniswapV3MintCallback_send, {
            call:uniswapV3MintCallback_call
        });
        let unwrapWETH9Params = (params: IUnwrapWETH9Params) => [this.wallet.utils.toString(params.amountMinimum),params.recipient];
        let unwrapWETH9_send = async (params: IUnwrapWETH9Params, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('unwrapWETH9',unwrapWETH9Params(params),options);
            return result;
        }
        let unwrapWETH9_call = async (params: IUnwrapWETH9Params, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('unwrapWETH9',unwrapWETH9Params(params),options);
            return;
        }
        this.unwrapWETH9 = Object.assign(unwrapWETH9_send, {
            call:unwrapWETH9_call
        });
    }
}
export module NonfungiblePositionManager{
    export interface ApprovalEvent {owner:string,approved:string,tokenId:BigNumber,_event:Event}
    export interface ApprovalForAllEvent {owner:string,operator:string,approved:boolean,_event:Event}
    export interface CollectEvent {tokenId:BigNumber,recipient:string,amount0:BigNumber,amount1:BigNumber,_event:Event}
    export interface DecreaseLiquidityEvent {tokenId:BigNumber,liquidity:BigNumber,amount0:BigNumber,amount1:BigNumber,_event:Event}
    export interface IncreaseLiquidityEvent {tokenId:BigNumber,liquidity:BigNumber,amount0:BigNumber,amount1:BigNumber,_event:Event}
    export interface TransferEvent {from:string,to:string,tokenId:BigNumber,_event:Event}
}
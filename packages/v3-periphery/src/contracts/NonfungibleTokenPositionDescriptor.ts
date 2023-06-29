import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./NonfungibleTokenPositionDescriptor.json";
export interface IDeployParams {WETH9:string;nativeCurrencyLabelBytes:string}
export interface IFlipRatioParams {token0:string;token1:string;chainId:number|BigNumber}
export interface ITokenRatioPriorityParams {token:string;chainId:number|BigNumber}
export interface ITokenURIParams {positionManager:string;tokenId:number|BigNumber}
export type ILibraries = {"contracts/libraries/NFTDescriptor.sol": {"NFTDescriptor": string; }; }
export class NonfungibleTokenPositionDescriptor extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, libraries: ILibraries, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.WETH9,this.wallet.utils.stringToBytes32(params.nativeCurrencyLabelBytes)], {...options, libraries, linkReferences:Bin.linkReferences});
    }
    WETH9: {
        (options?: TransactionOptions): Promise<string>;
    }
    flipRatio: {
        (params: IFlipRatioParams, options?: TransactionOptions): Promise<boolean>;
    }
    nativeCurrencyLabel: {
        (options?: TransactionOptions): Promise<string>;
    }
    nativeCurrencyLabelBytes: {
        (options?: TransactionOptions): Promise<string>;
    }
    tokenRatioPriority: {
        (params: ITokenRatioPriorityParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    tokenURI: {
        (params: ITokenURIParams, options?: TransactionOptions): Promise<string>;
    }
    private assign(){
        let WETH9_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('WETH9',[],options);
            return result;
        }
        this.WETH9 = WETH9_call
        let flipRatioParams = (params: IFlipRatioParams) => [params.token0,params.token1,this.wallet.utils.toString(params.chainId)];
        let flipRatio_call = async (params: IFlipRatioParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('flipRatio',flipRatioParams(params),options);
            return result;
        }
        this.flipRatio = flipRatio_call
        let nativeCurrencyLabel_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('nativeCurrencyLabel',[],options);
            return result;
        }
        this.nativeCurrencyLabel = nativeCurrencyLabel_call
        let nativeCurrencyLabelBytes_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('nativeCurrencyLabelBytes',[],options);
            return result;
        }
        this.nativeCurrencyLabelBytes = nativeCurrencyLabelBytes_call
        let tokenRatioPriorityParams = (params: ITokenRatioPriorityParams) => [params.token,this.wallet.utils.toString(params.chainId)];
        let tokenRatioPriority_call = async (params: ITokenRatioPriorityParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('tokenRatioPriority',tokenRatioPriorityParams(params),options);
            return new BigNumber(result);
        }
        this.tokenRatioPriority = tokenRatioPriority_call
        let tokenURIParams = (params: ITokenURIParams) => [params.positionManager,this.wallet.utils.toString(params.tokenId)];
        let tokenURI_call = async (params: ITokenURIParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('tokenURI',tokenURIParams(params),options);
            return result;
        }
        this.tokenURI = tokenURI_call
    }
}
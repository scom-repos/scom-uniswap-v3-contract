import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./NFTDescriptor.json";
export class NFTDescriptor extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(options?: TransactionOptions): Promise<string>{
        return this.__deploy([], options);
    }
    constructTokenURI: {
        (params:{tokenId:number|BigNumber,quoteTokenAddress:string,baseTokenAddress:string,quoteTokenSymbol:string,baseTokenSymbol:string,quoteTokenDecimals:number|BigNumber,baseTokenDecimals:number|BigNumber,flipRatio:boolean,tickLower:number|BigNumber,tickUpper:number|BigNumber,tickCurrent:number|BigNumber,tickSpacing:number|BigNumber,fee:number|BigNumber,poolAddress:string}, options?: TransactionOptions): Promise<string>;
    }
    private assign(){
        let constructTokenURI_call = async (params:{tokenId:number|BigNumber,quoteTokenAddress:string,baseTokenAddress:string,quoteTokenSymbol:string,baseTokenSymbol:string,quoteTokenDecimals:number|BigNumber,baseTokenDecimals:number|BigNumber,flipRatio:boolean,tickLower:number|BigNumber,tickUpper:number|BigNumber,tickCurrent:number|BigNumber,tickSpacing:number|BigNumber,fee:number|BigNumber,poolAddress:string}, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('constructTokenURI',[[this.wallet.utils.toString(params.tokenId),params.quoteTokenAddress,params.baseTokenAddress,params.quoteTokenSymbol,params.baseTokenSymbol,this.wallet.utils.toString(params.quoteTokenDecimals),this.wallet.utils.toString(params.baseTokenDecimals),params.flipRatio,this.wallet.utils.toString(params.tickLower),this.wallet.utils.toString(params.tickUpper),this.wallet.utils.toString(params.tickCurrent),this.wallet.utils.toString(params.tickSpacing),this.wallet.utils.toString(params.fee),params.poolAddress]],options);
            return result;
        }
        this.constructTokenURI = constructTokenURI_call
    }
}
import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./TickLens.json";
export interface IGetPopulatedTicksInWordParams {pool:string;tickBitmapIndex:number|BigNumber}
export class TickLens extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(options?: TransactionOptions): Promise<string>{
        return this.__deploy([], options);
    }
    getPopulatedTicksInWord: {
        (params: IGetPopulatedTicksInWordParams, options?: TransactionOptions): Promise<{tick:BigNumber,liquidityNet:BigNumber,liquidityGross:BigNumber}[]>;
    }
    private assign(){
        let getPopulatedTicksInWordParams = (params: IGetPopulatedTicksInWordParams) => [params.pool,this.wallet.utils.toString(params.tickBitmapIndex)];
        let getPopulatedTicksInWord_call = async (params: IGetPopulatedTicksInWordParams, options?: TransactionOptions): Promise<{tick:BigNumber,liquidityNet:BigNumber,liquidityGross:BigNumber}[]> => {
            let result = await this.call('getPopulatedTicksInWord',getPopulatedTicksInWordParams(params),options);
            return (result.map(e=>(
                {
                    tick: new BigNumber(e.tick),
                    liquidityNet: new BigNumber(e.liquidityNet),
                    liquidityGross: new BigNumber(e.liquidityGross)
                }
            )));
        }
        this.getPopulatedTicksInWord = getPopulatedTicksInWord_call
    }
}
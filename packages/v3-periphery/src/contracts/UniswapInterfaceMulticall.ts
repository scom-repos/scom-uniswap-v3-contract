import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./UniswapInterfaceMulticall.json";
export class UniswapInterfaceMulticall extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(options?: TransactionOptions): Promise<string>{
        return this.__deploy([], options);
    }
    getCurrentBlockTimestamp: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    getEthBalance: {
        (addr:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    multicall: {
        (calls:{target:string,gasLimit:number|BigNumber,callData:string}[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (calls:{target:string,gasLimit:number|BigNumber,callData:string}[], options?: TransactionOptions) => Promise<{blockNumber:BigNumber,returnData:{success:boolean,gasUsed:BigNumber,returnData:string}[]}>;
    }
    private assign(){
        let getCurrentBlockTimestamp_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getCurrentBlockTimestamp',[],options);
            return new BigNumber(result);
        }
        this.getCurrentBlockTimestamp = getCurrentBlockTimestamp_call
        let getEthBalance_call = async (addr:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getEthBalance',[addr],options);
            return new BigNumber(result);
        }
        this.getEthBalance = getEthBalance_call
        let multicall_send = async (calls:{target:string,gasLimit:number|BigNumber,callData:string}[], options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('multicall',[calls.map(e=>([e.target,this.wallet.utils.toString(e.gasLimit),this.wallet.utils.stringToBytes(e.callData)]))],options);
            return result;
        }
        let multicall_call = async (calls:{target:string,gasLimit:number|BigNumber,callData:string}[], options?: TransactionOptions): Promise<{blockNumber:BigNumber,returnData:{success:boolean,gasUsed:BigNumber,returnData:string}[]}> => {
            let result = await this.call('multicall',[calls.map(e=>([e.target,this.wallet.utils.toString(e.gasLimit),this.wallet.utils.stringToBytes(e.callData)]))],options);
            return {
                blockNumber: new BigNumber(result.blockNumber),
                returnData: result.returnData.map(e=>(
                    {
                        success: e.success,
                        gasUsed: new BigNumber(e.gasUsed),
                        returnData: e.returnData
                    }
                ))
            };
        }
        this.multicall = Object.assign(multicall_send, {
            call:multicall_call
        });
    }
}
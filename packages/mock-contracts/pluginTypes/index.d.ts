/// <amd-module name="mock-contracts/contracts/MockErc20.json.ts" />
declare module "mock-contracts/contracts/MockErc20.json.ts" {
    const _default: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="mock-contracts/contracts/MockErc20.ts" />
declare module "mock-contracts/contracts/MockErc20.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
        decimals: number | BigNumber;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IBurnFromParams {
        account: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IGetRoleMemberParams {
        role: string;
        index: number | BigNumber;
    }
    export interface IGrantRoleParams {
        role: string;
        account: string;
    }
    export interface IHasRoleParams {
        role: string;
        account: string;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface IMintParams {
        to: string;
        amount: number | BigNumber;
    }
    export interface IRenounceRoleParams {
        role: string;
        account: string;
    }
    export interface IRevokeRoleParams {
        role: string;
        account: string;
    }
    export interface ITransferParams {
        to: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        amount: number | BigNumber;
    }
    export class MockErc20 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): MockErc20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): MockErc20.ApprovalEvent;
        parsePausedEvent(receipt: TransactionReceipt): MockErc20.PausedEvent[];
        decodePausedEvent(event: Event): MockErc20.PausedEvent;
        parseRoleAdminChangedEvent(receipt: TransactionReceipt): MockErc20.RoleAdminChangedEvent[];
        decodeRoleAdminChangedEvent(event: Event): MockErc20.RoleAdminChangedEvent;
        parseRoleGrantedEvent(receipt: TransactionReceipt): MockErc20.RoleGrantedEvent[];
        decodeRoleGrantedEvent(event: Event): MockErc20.RoleGrantedEvent;
        parseRoleRevokedEvent(receipt: TransactionReceipt): MockErc20.RoleRevokedEvent[];
        decodeRoleRevokedEvent(event: Event): MockErc20.RoleRevokedEvent;
        parseTransferEvent(receipt: TransactionReceipt): MockErc20.TransferEvent[];
        decodeTransferEvent(event: Event): MockErc20.TransferEvent;
        parseUnpausedEvent(receipt: TransactionReceipt): MockErc20.UnpausedEvent[];
        decodeUnpausedEvent(event: Event): MockErc20.UnpausedEvent;
        DEFAULT_ADMIN_ROLE: {
            (options?: TransactionOptions): Promise<string>;
        };
        MINTER_ROLE: {
            (options?: TransactionOptions): Promise<string>;
        };
        PAUSER_ROLE: {
            (options?: TransactionOptions): Promise<string>;
        };
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        burn: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        burnFrom: {
            (params: IBurnFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IBurnFromParams, options?: TransactionOptions) => Promise<void>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        getRoleAdmin: {
            (role: string, options?: TransactionOptions): Promise<string>;
        };
        getRoleMember: {
            (params: IGetRoleMemberParams, options?: TransactionOptions): Promise<string>;
        };
        getRoleMemberCount: {
            (role: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        grantRole: {
            (params: IGrantRoleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IGrantRoleParams, options?: TransactionOptions) => Promise<void>;
        };
        hasRole: {
            (params: IHasRoleParams, options?: TransactionOptions): Promise<boolean>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        mint: {
            (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IMintParams, options?: TransactionOptions) => Promise<void>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        pause: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        paused: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        renounceRole: {
            (params: IRenounceRoleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRenounceRoleParams, options?: TransactionOptions) => Promise<void>;
        };
        revokeRole: {
            (params: IRevokeRoleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRevokeRoleParams, options?: TransactionOptions) => Promise<void>;
        };
        supportsInterface: {
            (interfaceId: string, options?: TransactionOptions): Promise<boolean>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        unpause: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module MockErc20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface PausedEvent {
            account: string;
            _event: Event;
        }
        interface RoleAdminChangedEvent {
            role: string;
            previousAdminRole: string;
            newAdminRole: string;
            _event: Event;
        }
        interface RoleGrantedEvent {
            role: string;
            account: string;
            sender: string;
            _event: Event;
        }
        interface RoleRevokedEvent {
            role: string;
            account: string;
            sender: string;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
        interface UnpausedEvent {
            account: string;
            _event: Event;
        }
    }
}
/// <amd-module name="mock-contracts/contracts/WETH9.json.ts" />
declare module "mock-contracts/contracts/WETH9.json.ts" {
    const _default_1: {
        abi: ({
            constant: boolean;
            inputs: {
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            payable: boolean;
            stateMutability: string;
            type: string;
            constant?: undefined;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
            anonymous?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            constant?: undefined;
            outputs?: undefined;
            payable?: undefined;
            stateMutability?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="mock-contracts/contracts/WETH9.ts" />
declare module "mock-contracts/contracts/WETH9.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IApproveParams {
        guy: string;
        wad: number | BigNumber;
    }
    export interface ITransferFromParams {
        src: string;
        dst: string;
        wad: number | BigNumber;
    }
    export interface ITransferParams {
        dst: string;
        wad: number | BigNumber;
    }
    export interface IAllowanceParams {
        param1: string;
        param2: string;
    }
    export class WETH9 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): WETH9.ApprovalEvent[];
        decodeApprovalEvent(event: Event): WETH9.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): WETH9.TransferEvent[];
        decodeTransferEvent(event: Event): WETH9.TransferEvent;
        parseDepositEvent(receipt: TransactionReceipt): WETH9.DepositEvent[];
        decodeDepositEvent(event: Event): WETH9.DepositEvent;
        parseWithdrawalEvent(receipt: TransactionReceipt): WETH9.WithdrawalEvent[];
        decodeWithdrawalEvent(event: Event): WETH9.WithdrawalEvent;
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        withdraw: {
            (wad: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (wad: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        balanceOf: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        };
        deposit: {
            (options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: number | BigNumber | TransactionOptions) => Promise<void>;
        };
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        private assign;
    }
    export module WETH9 {
        interface ApprovalEvent {
            src: string;
            guy: string;
            wad: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            src: string;
            dst: string;
            wad: BigNumber;
            _event: Event;
        }
        interface DepositEvent {
            dst: string;
            wad: BigNumber;
            _event: Event;
        }
        interface WithdrawalEvent {
            src: string;
            wad: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="mock-contracts/contracts/index.ts" />
declare module "mock-contracts/contracts/index.ts" {
    export { MockErc20 } from "mock-contracts/contracts/MockErc20.ts";
    export { WETH9 } from "mock-contracts/contracts/WETH9.ts";
}
/// <amd-module name="mock-contracts" />
declare module "mock-contracts" {
    export * as Contract from "mock-contracts/contracts/index.ts";
}

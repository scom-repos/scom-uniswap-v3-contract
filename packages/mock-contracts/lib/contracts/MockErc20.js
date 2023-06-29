"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockErc20 = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const MockErc20_json_1 = __importDefault(require("./MockErc20.json"));
class MockErc20 extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, MockErc20_json_1.default.abi, MockErc20_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.name, params.symbol, this.wallet.utils.toString(params.decimals)], options);
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new eth_contract_1.BigNumber(result.value),
            _event: event
        };
    }
    parsePausedEvent(receipt) {
        return this.parseEvents(receipt, "Paused").map(e => this.decodePausedEvent(e));
    }
    decodePausedEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    parseRoleAdminChangedEvent(receipt) {
        return this.parseEvents(receipt, "RoleAdminChanged").map(e => this.decodeRoleAdminChangedEvent(e));
    }
    decodeRoleAdminChangedEvent(event) {
        let result = event.data;
        return {
            role: result.role,
            previousAdminRole: result.previousAdminRole,
            newAdminRole: result.newAdminRole,
            _event: event
        };
    }
    parseRoleGrantedEvent(receipt) {
        return this.parseEvents(receipt, "RoleGranted").map(e => this.decodeRoleGrantedEvent(e));
    }
    decodeRoleGrantedEvent(event) {
        let result = event.data;
        return {
            role: result.role,
            account: result.account,
            sender: result.sender,
            _event: event
        };
    }
    parseRoleRevokedEvent(receipt) {
        return this.parseEvents(receipt, "RoleRevoked").map(e => this.decodeRoleRevokedEvent(e));
    }
    decodeRoleRevokedEvent(event) {
        let result = event.data;
        return {
            role: result.role,
            account: result.account,
            sender: result.sender,
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
            value: new eth_contract_1.BigNumber(result.value),
            _event: event
        };
    }
    parseUnpausedEvent(receipt) {
        return this.parseEvents(receipt, "Unpaused").map(e => this.decodeUnpausedEvent(e));
    }
    decodeUnpausedEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    assign() {
        let DEFAULT_ADMIN_ROLE_call = async (options) => {
            let result = await this.call('DEFAULT_ADMIN_ROLE', [], options);
            return result;
        };
        this.DEFAULT_ADMIN_ROLE = DEFAULT_ADMIN_ROLE_call;
        let MINTER_ROLE_call = async (options) => {
            let result = await this.call('MINTER_ROLE', [], options);
            return result;
        };
        this.MINTER_ROLE = MINTER_ROLE_call;
        let PAUSER_ROLE_call = async (options) => {
            let result = await this.call('PAUSER_ROLE', [], options);
            return result;
        };
        this.PAUSER_ROLE = PAUSER_ROLE_call;
        let allowanceParams = (params) => [params.owner, params.spender];
        let allowance_call = async (params, options) => {
            let result = await this.call('allowance', allowanceParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.allowance = allowance_call;
        let balanceOf_call = async (account, options) => {
            let result = await this.call('balanceOf', [account], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.balanceOf = balanceOf_call;
        let decimals_call = async (options) => {
            let result = await this.call('decimals', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.decimals = decimals_call;
        let getRoleAdmin_call = async (role, options) => {
            let result = await this.call('getRoleAdmin', [this.wallet.utils.stringToBytes32(role)], options);
            return result;
        };
        this.getRoleAdmin = getRoleAdmin_call;
        let getRoleMemberParams = (params) => [this.wallet.utils.stringToBytes32(params.role), this.wallet.utils.toString(params.index)];
        let getRoleMember_call = async (params, options) => {
            let result = await this.call('getRoleMember', getRoleMemberParams(params), options);
            return result;
        };
        this.getRoleMember = getRoleMember_call;
        let getRoleMemberCount_call = async (role, options) => {
            let result = await this.call('getRoleMemberCount', [this.wallet.utils.stringToBytes32(role)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getRoleMemberCount = getRoleMemberCount_call;
        let hasRoleParams = (params) => [this.wallet.utils.stringToBytes32(params.role), params.account];
        let hasRole_call = async (params, options) => {
            let result = await this.call('hasRole', hasRoleParams(params), options);
            return result;
        };
        this.hasRole = hasRole_call;
        let name_call = async (options) => {
            let result = await this.call('name', [], options);
            return result;
        };
        this.name = name_call;
        let paused_call = async (options) => {
            let result = await this.call('paused', [], options);
            return result;
        };
        this.paused = paused_call;
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
        let totalSupply_call = async (options) => {
            let result = await this.call('totalSupply', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalSupply = totalSupply_call;
        let approveParams = (params) => [params.spender, this.wallet.utils.toString(params.amount)];
        let approve_send = async (params, options) => {
            let result = await this.send('approve', approveParams(params), options);
            return result;
        };
        let approve_call = async (params, options) => {
            let result = await this.call('approve', approveParams(params), options);
            return result;
        };
        this.approve = Object.assign(approve_send, {
            call: approve_call
        });
        let burn_send = async (amount, options) => {
            let result = await this.send('burn', [this.wallet.utils.toString(amount)], options);
            return result;
        };
        let burn_call = async (amount, options) => {
            let result = await this.call('burn', [this.wallet.utils.toString(amount)], options);
            return;
        };
        this.burn = Object.assign(burn_send, {
            call: burn_call
        });
        let burnFromParams = (params) => [params.account, this.wallet.utils.toString(params.amount)];
        let burnFrom_send = async (params, options) => {
            let result = await this.send('burnFrom', burnFromParams(params), options);
            return result;
        };
        let burnFrom_call = async (params, options) => {
            let result = await this.call('burnFrom', burnFromParams(params), options);
            return;
        };
        this.burnFrom = Object.assign(burnFrom_send, {
            call: burnFrom_call
        });
        let decreaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.subtractedValue)];
        let decreaseAllowance_send = async (params, options) => {
            let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params), options);
            return result;
        };
        let decreaseAllowance_call = async (params, options) => {
            let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params), options);
            return result;
        };
        this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
            call: decreaseAllowance_call
        });
        let grantRoleParams = (params) => [this.wallet.utils.stringToBytes32(params.role), params.account];
        let grantRole_send = async (params, options) => {
            let result = await this.send('grantRole', grantRoleParams(params), options);
            return result;
        };
        let grantRole_call = async (params, options) => {
            let result = await this.call('grantRole', grantRoleParams(params), options);
            return;
        };
        this.grantRole = Object.assign(grantRole_send, {
            call: grantRole_call
        });
        let increaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.addedValue)];
        let increaseAllowance_send = async (params, options) => {
            let result = await this.send('increaseAllowance', increaseAllowanceParams(params), options);
            return result;
        };
        let increaseAllowance_call = async (params, options) => {
            let result = await this.call('increaseAllowance', increaseAllowanceParams(params), options);
            return result;
        };
        this.increaseAllowance = Object.assign(increaseAllowance_send, {
            call: increaseAllowance_call
        });
        let mintParams = (params) => [params.to, this.wallet.utils.toString(params.amount)];
        let mint_send = async (params, options) => {
            let result = await this.send('mint', mintParams(params), options);
            return result;
        };
        let mint_call = async (params, options) => {
            let result = await this.call('mint', mintParams(params), options);
            return;
        };
        this.mint = Object.assign(mint_send, {
            call: mint_call
        });
        let pause_send = async (options) => {
            let result = await this.send('pause', [], options);
            return result;
        };
        let pause_call = async (options) => {
            let result = await this.call('pause', [], options);
            return;
        };
        this.pause = Object.assign(pause_send, {
            call: pause_call
        });
        let renounceRoleParams = (params) => [this.wallet.utils.stringToBytes32(params.role), params.account];
        let renounceRole_send = async (params, options) => {
            let result = await this.send('renounceRole', renounceRoleParams(params), options);
            return result;
        };
        let renounceRole_call = async (params, options) => {
            let result = await this.call('renounceRole', renounceRoleParams(params), options);
            return;
        };
        this.renounceRole = Object.assign(renounceRole_send, {
            call: renounceRole_call
        });
        let revokeRoleParams = (params) => [this.wallet.utils.stringToBytes32(params.role), params.account];
        let revokeRole_send = async (params, options) => {
            let result = await this.send('revokeRole', revokeRoleParams(params), options);
            return result;
        };
        let revokeRole_call = async (params, options) => {
            let result = await this.call('revokeRole', revokeRoleParams(params), options);
            return;
        };
        this.revokeRole = Object.assign(revokeRole_send, {
            call: revokeRole_call
        });
        let transferParams = (params) => [params.to, this.wallet.utils.toString(params.amount)];
        let transfer_send = async (params, options) => {
            let result = await this.send('transfer', transferParams(params), options);
            return result;
        };
        let transfer_call = async (params, options) => {
            let result = await this.call('transfer', transferParams(params), options);
            return result;
        };
        this.transfer = Object.assign(transfer_send, {
            call: transfer_call
        });
        let transferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.amount)];
        let transferFrom_send = async (params, options) => {
            let result = await this.send('transferFrom', transferFromParams(params), options);
            return result;
        };
        let transferFrom_call = async (params, options) => {
            let result = await this.call('transferFrom', transferFromParams(params), options);
            return result;
        };
        this.transferFrom = Object.assign(transferFrom_send, {
            call: transferFrom_call
        });
        let unpause_send = async (options) => {
            let result = await this.send('unpause', [], options);
            return result;
        };
        let unpause_call = async (options) => {
            let result = await this.call('unpause', [], options);
            return;
        };
        this.unpause = Object.assign(unpause_send, {
            call: unpause_call
        });
    }
}
MockErc20._abi = MockErc20_json_1.default.abi;
exports.MockErc20 = MockErc20;

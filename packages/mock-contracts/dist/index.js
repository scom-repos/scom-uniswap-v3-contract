define("mock-contracts/contracts/MockErc20.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='mock-contracts/contracts/MockErc20.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "uint8", "name": "_decimals_", "type": "uint8" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" }], "name": "RoleAdminChanged", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleGranted", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleRevoked", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" },
            { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "MINTER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "PAUSER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleAdmin", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getRoleMember", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleMemberCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "hasRole", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60a06040523480156200001157600080fd5b506040516200260c3803806200260c833981016040819052620000349162000302565b82828181600562000046838262000415565b50600662000055828262000415565b50506007805460ff19169055506200006f600033620000d8565b6200009b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000d8565b620000c77f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33620000d8565b505060ff1660805250620004e19050565b620000e48282620000e8565b5050565b620000ff82826200012b60201b62000ac41760201c565b60008281526001602090815260409091206200012691839062000bb4620001cb821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000e4576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001873390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001e2836001600160a01b038416620001eb565b90505b92915050565b60008181526001830160205260408120546200023457508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620001e5565b506000620001e5565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200026557600080fd5b81516001600160401b03808211156200028257620002826200023d565b604051601f8301601f19908116603f01168101908282118183101715620002ad57620002ad6200023d565b81604052838152602092508683858801011115620002ca57600080fd5b600091505b83821015620002ee5785820183015181830184015290820190620002cf565b600093810190920192909252949350505050565b6000806000606084860312156200031857600080fd5b83516001600160401b03808211156200033057600080fd5b6200033e8783880162000253565b945060208601519150808211156200035557600080fd5b50620003648682870162000253565b925050604084015160ff811681146200037c57600080fd5b809150509250925092565b600181811c908216806200039c57607f821691505b602082108103620003bd57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200012657600081815260208120601f850160051c81016020861015620003ec5750805b601f850160051c820191505b818110156200040d57828155600101620003f8565b505050505050565b81516001600160401b038111156200043157620004316200023d565b620004498162000442845462000387565b84620003c3565b602080601f831160018114620004815760008415620004685750858301515b600019600386901b1c1916600185901b1785556200040d565b600085815260208120601f198616915b82811015620004b25788860151825594840194600190910190840162000491565b5085821015620004d15787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805161210f620004fd600039600061027d015261210f6000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063a457c2d711610097578063d539139311610071578063d53913931461041c578063d547741f14610443578063dd62ed3e14610456578063e63ab1e91461049c57600080fd5b8063a457c2d7146103e3578063a9059cbb146103f6578063ca15c8731461040957600080fd5b80639010d07c116100d35780639010d07c1461035757806391d148541461038f57806395d89b41146103d3578063a217fddf146103db57600080fd5b806370a082311461030657806379cc67901461033c5780638456cb591461034f57600080fd5b8063313ce567116101665780633f4ba83a116101405780633f4ba83a146102cd57806340c10f19146102d557806342966c68146102e85780635c975abb146102fb57600080fd5b8063313ce5671461027657806336568abe146102a757806339509351146102ba57600080fd5b806318160ddd116101a257806318160ddd1461021957806323b872dd1461022b578063248a9ca31461023e5780632f2ff15d1461026157600080fd5b806301ffc9a7146101c957806306fdde03146101f1578063095ea7b314610206575b600080fd5b6101dc6101d7366004611ce5565b6104c3565b60405190151581526020015b60405180910390f35b6101f961051f565b6040516101e89190611d4b565b6101dc610214366004611dc5565b6105b1565b6004545b6040519081526020016101e8565b6101dc610239366004611def565b6105c9565b61021d61024c366004611e2b565b60009081526020819052604090206001015490565b61027461026f366004611e44565b6105ed565b005b60405160ff7f00000000000000000000000000000000000000000000000000000000000000001681526020016101e8565b6102746102b5366004611e44565b610617565b6101dc6102c8366004611dc5565b6106cf565b61027461071b565b6102746102e3366004611dc5565b6107db565b6102746102f6366004611e2b565b61089b565b60075460ff166101dc565b61021d610314366004611e70565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b61027461034a366004611dc5565b6108a8565b6102746108bd565b61036a610365366004611e8b565b61097b565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101e8565b6101dc61039d366004611e44565b60009182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b6101f961099a565b61021d600081565b6101dc6103f1366004611dc5565b6109a9565b6101dc610404366004611dc5565b610a7a565b61021d610417366004611e2b565b610a88565b61021d7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b610274610451366004611e44565b610a9f565b61021d610464366004611ead565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260036020908152604080832093909416825291909152205490565b61021d7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f5a05180f000000000000000000000000000000000000000000000000000000001480610519575061051982610bd6565b92915050565b60606005805461052e90611ed7565b80601f016020809104026020016040519081016040528092919081815260200182805461055a90611ed7565b80156105a75780601f1061057c576101008083540402835291602001916105a7565b820191906000526020600020905b81548152906001019060200180831161058a57829003601f168201915b5050505050905090565b6000336105bf818585610c6d565b5060019392505050565b6000336105d7858285610e20565b6105e2858585610ef7565b506001949350505050565b600082815260208190526040902060010154610608816111b5565b61061283836111bf565b505050565b73ffffffffffffffffffffffffffffffffffffffff811633146106c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6106cb82826111e1565b5050565b33600081815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906105bf9082908690610716908790611f59565b610c6d565b6107457f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3361039d565b6107d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603960248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20756e70617573650000000000000060648201526084016106b8565b6107d9611203565b565b6108057f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63361039d565b610891576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f7665206d696e74657220726f6c6520746f206d696e740000000000000000000060648201526084016106b8565b6106cb8282611280565b6108a533826113ac565b50565b6108b3823383610e20565b6106cb82826113ac565b6108e77f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3361039d565b610973576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20706175736500000000000000000060648201526084016106b8565b6107d96115a5565b60008281526001602052604081206109939083611600565b9392505050565b60606006805461052e90611ed7565b33600081815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015610a6d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016106b8565b6105e28286868403610c6d565b6000336105bf818585610ef7565b60008181526001602052604081206105199061160c565b600082815260208190526040902060010154610aba816111b5565b61061283836111e1565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166106cb5760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055610b563390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006109938373ffffffffffffffffffffffffffffffffffffffff8416611616565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061051957507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610519565b73ffffffffffffffffffffffffffffffffffffffff8316610d0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016106b8565b73ffffffffffffffffffffffffffffffffffffffff8216610db2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016106b8565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600360209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610ef15781811015610ee4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016106b8565b610ef18484848403610c6d565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f9a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016106b8565b73ffffffffffffffffffffffffffffffffffffffff821661103d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016106b8565b611048838383611665565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260026020526040902054818110156110fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016106b8565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260026020526040808220858503905591851681529081208054849290611142908490611f59565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111a891815260200190565b60405180910390a3610ef1565b6108a58133611670565b6111c98282610ac4565b60008281526001602052604090206106129082610bb4565b6111eb8282611740565b600082815260016020526040902061061290826117f7565b61120b611819565b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b73ffffffffffffffffffffffffffffffffffffffff82166112fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016106b8565b61130960008383611665565b806004600082825461131b9190611f59565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604081208054839290611355908490611f59565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff821661144f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016106b8565b61145b82600083611665565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604090205481811015611511576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016106b8565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260026020526040812083830390556004805484929061154d908490611f6c565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6115ad611885565b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586112563390565b600061099383836118f2565b6000610519825490565b600081815260018301602052604081205461165d57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610519565b506000610519565b61061283838361191c565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166106cb576116c68173ffffffffffffffffffffffffffffffffffffffff1660146119af565b6116d18360206119af565b6040516020016116e2929190611f7f565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a00000000000000000000000000000000000000000000000000000000082526106b891600401611d4b565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16156106cb5760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006109938373ffffffffffffffffffffffffffffffffffffffff8416611bf2565b60075460ff166107d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016106b8565b60075460ff16156107d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016106b8565b600082600001828154811061190957611909612000565b9060005260206000200154905092915050565b60075460ff1615610612576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e7366657220776860448201527f696c65207061757365640000000000000000000000000000000000000000000060648201526084016106b8565b606060006119be83600261202f565b6119c9906002611f59565b67ffffffffffffffff8111156119e1576119e1612046565b6040519080825280601f01601f191660200182016040528015611a0b576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611a4257611a42612000565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611aa557611aa5612000565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000611ae184600261202f565b611aec906001611f59565b90505b6001811115611b89577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611b2d57611b2d612000565b1a60f81b828281518110611b4357611b43612000565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611b8281612075565b9050611aef565b508315610993576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016106b8565b60008181526001830160205260408120548015611cdb576000611c16600183611f6c565b8554909150600090611c2a90600190611f6c565b9050818114611c8f576000866000018281548110611c4a57611c4a612000565b9060005260206000200154905080876000018481548110611c6d57611c6d612000565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611ca057611ca06120aa565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610519565b6000915050610519565b600060208284031215611cf757600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461099357600080fd5b60005b83811015611d42578181015183820152602001611d2a565b50506000910152565b6020815260008251806020840152611d6a816040850160208701611d27565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611dc057600080fd5b919050565b60008060408385031215611dd857600080fd5b611de183611d9c565b946020939093013593505050565b600080600060608486031215611e0457600080fd5b611e0d84611d9c565b9250611e1b60208501611d9c565b9150604084013590509250925092565b600060208284031215611e3d57600080fd5b5035919050565b60008060408385031215611e5757600080fd5b82359150611e6760208401611d9c565b90509250929050565b600060208284031215611e8257600080fd5b61099382611d9c565b60008060408385031215611e9e57600080fd5b50508035926020909101359150565b60008060408385031215611ec057600080fd5b611ec983611d9c565b9150611e6760208401611d9c565b600181811c90821680611eeb57607f821691505b602082108103611f24577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082018082111561051957610519611f2a565b8181038181111561051957610519611f2a565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611fb7816017850160208801611d27565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351611ff4816028840160208801611d27565b01602801949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b808202811582820484141761051957610519611f2a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008161208457612084611f2a565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea264697066735822122002099fe338a166695a9e6d50ed96eb371d1b235c84ba8de809592cc8d9370d2164736f6c63430008120033"
    };
});
define("mock-contracts/contracts/MockErc20.ts", ["require", "exports", "@ijstech/eth-contract", "mock-contracts/contracts/MockErc20.json.ts"], function (require, exports, eth_contract_1, MockErc20_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MockErc20 = void 0;
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
});
define("mock-contracts/contracts/WETH9.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='mock-contracts/contracts/WETH9.json.ts'/> 
    exports.default = {
        "abi": [
            { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" },
            { "constant": false, "inputs": [{ "name": "guy", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" },
            { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
            { "constant": false, "inputs": [{ "name": "src", "type": "address" }, { "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" },
            { "constant": false, "inputs": [{ "name": "wad", "type": "uint256" }], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" },
            { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" },
            { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
            { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" },
            { "constant": false, "inputs": [{ "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" },
            { "constant": false, "inputs": [], "name": "deposit", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" },
            { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
            { "payable": true, "stateMutability": "payable", "type": "fallback" },
            { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "guy", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Deposit", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Withdrawal", "type": "event" }
        ],
        "bytecode": "60c0604052600d60808190527f577261707065642045746865720000000000000000000000000000000000000060a090815261003e91600091906100a3565b506040805180820190915260048082527f57455448000000000000000000000000000000000000000000000000000000006020909201918252610083916001916100a3565b506002805460ff1916601217905534801561009d57600080fd5b5061013e565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100e457805160ff1916838001178555610111565b82800160010185558215610111579182015b828111156101115782518255916020019190600101906100f6565b5061011d929150610121565b5090565b61013b91905b8082111561011d5760008155600101610127565b90565b6107688061014d6000396000f3006080604052600436106100ae5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100b8578063095ea7b31461014257806318160ddd1461018757806323b872dd146101ae5780632e1a7d4d146101e5578063313ce567146101fd57806370a082311461022857806395d89b4114610256578063a9059cbb1461026b578063d0e30db0146100ae578063dd62ed3e1461029c575b6100b66102d0565b005b3480156100c457600080fd5b506100cd61031f565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101075781810151838201526020016100ef565b50505050905090810190601f1680156101345780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561014e57600080fd5b5061017373ffffffffffffffffffffffffffffffffffffffff600435166024356103cb565b604080519115158252519081900360200190f35b34801561019357600080fd5b5061019c61043e565b60408051918252519081900360200190f35b3480156101ba57600080fd5b5061017373ffffffffffffffffffffffffffffffffffffffff60043581169060243516604435610443565b3480156101f157600080fd5b506100b66004356105e3565b34801561020957600080fd5b50610212610678565b6040805160ff9092168252519081900360200190f35b34801561023457600080fd5b5061019c73ffffffffffffffffffffffffffffffffffffffff60043516610681565b34801561026257600080fd5b506100cd610693565b34801561027757600080fd5b5061017373ffffffffffffffffffffffffffffffffffffffff6004351660243561070b565b3480156102a857600080fd5b5061019c73ffffffffffffffffffffffffffffffffffffffff6004358116906024351661071f565b33600081815260036020908152604091829020805434908101909155825190815291517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9281900390910190a2565b6000805460408051602060026001851615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f810184900484028201840190925281815292918301828280156103c35780601f10610398576101008083540402835291602001916103c3565b820191906000526020600020905b8154815290600101906020018083116103a657829003601f168201915b505050505081565b33600081815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b303190565b73ffffffffffffffffffffffffffffffffffffffff831660009081526003602052604081205482111561047557600080fd5b73ffffffffffffffffffffffffffffffffffffffff841633148015906104eb575073ffffffffffffffffffffffffffffffffffffffff841660009081526004602090815260408083203384529091529020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff14155b156105655773ffffffffffffffffffffffffffffffffffffffff8416600090815260046020908152604080832033845290915290205482111561052d57600080fd5b73ffffffffffffffffffffffffffffffffffffffff841660009081526004602090815260408083203384529091529020805483900390555b73ffffffffffffffffffffffffffffffffffffffff808516600081815260036020908152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060019392505050565b336000908152600360205260409020548111156105ff57600080fd5b33600081815260036020526040808220805485900390555183156108fc0291849190818181858888f1935050505015801561063e573d6000803e3d6000fd5b5060408051828152905133917f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65919081900360200190a250565b60025460ff1681565b60036020526000908152604090205481565b60018054604080516020600284861615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f810184900484028201840190925281815292918301828280156103c35780601f10610398576101008083540402835291602001916103c3565b6000610718338484610443565b9392505050565b6004602090815260009283526040808420909152908252902054815600a165627a7a723058208c02cba27f26a6eb39520b2d0c1fd7eaa990df3d0320424c55aaca840c1b28750029"
    };
});
define("mock-contracts/contracts/WETH9.ts", ["require", "exports", "@ijstech/eth-contract", "mock-contracts/contracts/WETH9.json.ts"], function (require, exports, eth_contract_2, WETH9_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WETH9 = void 0;
    class WETH9 extends eth_contract_2.Contract {
        constructor(wallet, address) {
            super(wallet, address, WETH9_json_1.default.abi, WETH9_json_1.default.bytecode);
            this.assign();
        }
        deploy(options) {
            return this.__deploy([], options);
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                src: result.src,
                guy: result.guy,
                wad: new eth_contract_2.BigNumber(result.wad),
                _event: event
            };
        }
        parseTransferEvent(receipt) {
            return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
            let result = event.data;
            return {
                src: result.src,
                dst: result.dst,
                wad: new eth_contract_2.BigNumber(result.wad),
                _event: event
            };
        }
        parseDepositEvent(receipt) {
            return this.parseEvents(receipt, "Deposit").map(e => this.decodeDepositEvent(e));
        }
        decodeDepositEvent(event) {
            let result = event.data;
            return {
                dst: result.dst,
                wad: new eth_contract_2.BigNumber(result.wad),
                _event: event
            };
        }
        parseWithdrawalEvent(receipt) {
            return this.parseEvents(receipt, "Withdrawal").map(e => this.decodeWithdrawalEvent(e));
        }
        decodeWithdrawalEvent(event) {
            let result = event.data;
            return {
                src: result.src,
                wad: new eth_contract_2.BigNumber(result.wad),
                _event: event
            };
        }
        assign() {
            let name_call = async (options) => {
                let result = await this.call('name', [], options);
                return result;
            };
            this.name = name_call;
            let totalSupply_call = async (options) => {
                let result = await this.call('totalSupply', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.totalSupply = totalSupply_call;
            let decimals_call = async (options) => {
                let result = await this.call('decimals', [], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.decimals = decimals_call;
            let balanceOf_call = async (param1, options) => {
                let result = await this.call('balanceOf', [param1], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let symbol_call = async (options) => {
                let result = await this.call('symbol', [], options);
                return result;
            };
            this.symbol = symbol_call;
            let allowanceParams = (params) => [params.param1, params.param2];
            let allowance_call = async (params, options) => {
                let result = await this.call('allowance', allowanceParams(params), options);
                return new eth_contract_2.BigNumber(result);
            };
            this.allowance = allowance_call;
            let approveParams = (params) => [params.guy, this.wallet.utils.toString(params.wad)];
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
            let transferFromParams = (params) => [params.src, params.dst, this.wallet.utils.toString(params.wad)];
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
            let withdraw_send = async (wad, options) => {
                let result = await this.send('withdraw', [this.wallet.utils.toString(wad)], options);
                return result;
            };
            let withdraw_call = async (wad, options) => {
                let result = await this.call('withdraw', [this.wallet.utils.toString(wad)], options);
                return;
            };
            this.withdraw = Object.assign(withdraw_send, {
                call: withdraw_call
            });
            let transferParams = (params) => [params.dst, this.wallet.utils.toString(params.wad)];
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
            let deposit_send = async (options) => {
                let result = await this.send('deposit', [], options);
                return result;
            };
            let deposit_call = async (options) => {
                let result = await this.call('deposit', [], options);
                return;
            };
            this.deposit = Object.assign(deposit_send, {
                call: deposit_call
            });
        }
    }
    WETH9._abi = WETH9_json_1.default.abi;
    exports.WETH9 = WETH9;
});
define("mock-contracts/contracts/index.ts", ["require", "exports", "mock-contracts/contracts/MockErc20.ts", "mock-contracts/contracts/WETH9.ts"], function (require, exports, MockErc20_1, WETH9_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WETH9 = exports.MockErc20 = void 0;
    Object.defineProperty(exports, "MockErc20", { enumerable: true, get: function () { return MockErc20_1.MockErc20; } });
    Object.defineProperty(exports, "WETH9", { enumerable: true, get: function () { return WETH9_1.WETH9; } });
});
define("mock-contracts", ["require", "exports", "mock-contracts/contracts/index.ts"], function (require, exports, Contract) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Contract = void 0;
    exports.Contract = Contract;
});

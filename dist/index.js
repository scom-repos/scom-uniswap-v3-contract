define("@scom/demo-contract", ["require", "exports", "v3-core", "v3-periphery", "swap-router-contracts", "v3-core", "v3-periphery", "swap-router-contracts", "@ijstech/eth-wallet"], function (require, exports, v3_core_1, v3_periphery_1, swap_router_contracts_1, v3_core_2, v3_periphery_2, swap_router_contracts_2, eth_wallet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toSqrtX96 = exports.fromDeployResult = exports.deploy = exports.DefaultDeployOptions = exports.SwapRouterContract = exports.PeripheryContract = exports.CoreContract = void 0;
    Object.defineProperty(exports, "CoreContract", { enumerable: true, get: function () { return v3_core_2.Contract; } });
    Object.defineProperty(exports, "PeripheryContract", { enumerable: true, get: function () { return v3_periphery_2.Contract; } });
    Object.defineProperty(exports, "SwapRouterContract", { enumerable: true, get: function () { return swap_router_contracts_2.Contract; } });
    ;
    ;
    var progressHandler;
    exports.DefaultDeployOptions = {
        weth: ''
    };
    async function deploy(wallet, options, onProgress) {
        onProgress('1/9 Deploy UniswapV3Factory contract');
        let factory = new v3_core_1.Contract.UniswapV3Factory(wallet);
        await factory.deploy();
        onProgress(`factory: ${factory.address}`);
        onProgress('2/9 Deploy TickLens contract');
        let tickLens = new v3_periphery_1.Contract.TickLens(wallet);
        await tickLens.deploy();
        onProgress(`tickLens: ${tickLens.address}`);
        onProgress('3/9 Deploy Quoter contract');
        let quoter = new v3_periphery_1.Contract.Quoter(wallet);
        await quoter.deploy({ factory: factory.address, WETH9: options.weth });
        onProgress(`quoter: ${quoter.address}`);
        onProgress('4/9 Deploy SwapRouter contract');
        let router = new v3_periphery_1.Contract.SwapRouter(wallet);
        await router.deploy({ factory: factory.address, WETH9: options.weth });
        onProgress(`router: ${router.address}`);
        onProgress('5/9 Deploy NFTDescriptor contract');
        let nftDesc = new v3_periphery_1.Contract.NFTDescriptor(wallet);
        await nftDesc.deploy();
        onProgress(`nftDesc: ${nftDesc.address}`);
        onProgress('6/9 Deploy NonfungibleTokenPositionDescriptor contract');
        let nftPosDesc = new v3_periphery_1.Contract.NonfungibleTokenPositionDescriptor(wallet);
        let label = await (new eth_wallet_1.Erc20(wallet, options.weth).symbol);
        label = label.substring(0, 31);
        label = eth_wallet_1.Utils.stringToBytes32(label);
        await nftPosDesc.deploy({ WETH9: options.weth, nativeCurrencyLabelBytes: label }, { "contracts/libraries/NFTDescriptor.sol": { "NFTDescriptor": nftDesc.address } });
        onProgress(`nftPosDesc: ${nftPosDesc.address}`);
        onProgress('7/9 Deploy NonfungiblePositionManager contract');
        let nftPosMngr = new v3_periphery_1.Contract.NonfungiblePositionManager(wallet);
        await nftPosMngr.deploy({ factory: factory.address, WETH9: options.weth, tokenDescriptor: nftDesc.address });
        onProgress(`nftPosMngr: ${nftPosMngr.address}`);
        onProgress('8/9 Deploy QuoterV2 contract');
        let quoterV2 = new v3_periphery_1.Contract.QuoterV2(wallet);
        await quoterV2.deploy({ factory: factory.address, WETH9: options.weth });
        onProgress(`quoter2: ${quoterV2.address}`);
        onProgress('9/9 Deploy SwapRouter02 contract');
        let router02 = new swap_router_contracts_1.Contract.SwapRouter02(wallet);
        await router02.deploy({ factoryV2: eth_wallet_1.Utils.nullAddress, factoryV3: factory.address, positionManager: nftPosMngr.address, WETH9: options.weth });
        onProgress(`router2: ${router02.address}`);
        return {
            factory: factory,
            tickLens: tickLens,
            quoter: quoter,
            router: router,
            nftDesc: nftDesc,
            nftPosDesc: nftPosDesc,
            nftPosMngr: nftPosMngr,
            quoterV2: quoterV2,
            router02: router02
        };
    }
    exports.deploy = deploy;
    ;
    function fromDeployResult(wallet, result) {
        return {
            factory: new v3_core_1.Contract.UniswapV3Factory(wallet, result.factory),
            tickLens: new v3_periphery_1.Contract.TickLens(wallet, result.tickLens),
            quoter: new v3_periphery_1.Contract.Quoter(wallet, result.quoter),
            router: new v3_periphery_1.Contract.SwapRouter(wallet, result.router),
            nftDesc: new v3_periphery_1.Contract.NFTDescriptor(wallet, result.nftDesc),
            nftPosDesc: new v3_periphery_1.Contract.NonfungibleTokenPositionDescriptor(wallet, result.nftPosDesc),
            nftPosMngr: new v3_periphery_1.Contract.NonfungiblePositionManager(wallet, result.nftPosMngr),
            quoterV2: new v3_periphery_1.Contract.QuoterV2(wallet, result.quoterV2),
            router02: new swap_router_contracts_1.Contract.SwapRouter02(wallet, result.router02)
        };
    }
    exports.fromDeployResult = fromDeployResult;
    const X96 = new eth_wallet_1.BigNumber(2).pow(96);
    function toSqrtX96(n) {
        return n.sqrt().times(X96).dp(0, eth_wallet_1.BigNumber.ROUND_FLOOR);
    }
    exports.toSqrtX96 = toSqrtX96;
    exports.default = {
        CoreContract: v3_core_1.Contract,
        PeripheryContract: v3_periphery_1.Contract,
        SwapRouterContract: swap_router_contracts_1.Contract,
        DefaultDeployOptions: exports.DefaultDeployOptions,
        deploy,
        fromDeployResult,
        toSqrtX96
    };
    ;
});

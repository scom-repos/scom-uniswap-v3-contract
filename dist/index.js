define("@scom/scom-uniswap-v3-contract", ["require", "exports", "v3-core", "v3-periphery", "swap-router-contracts", "v3-core", "v3-periphery", "swap-router-contracts", "@ijstech/eth-wallet"], function (require, exports, v3_core_1, v3_periphery_1, swap_router_contracts_1, v3_core_2, v3_periphery_2, swap_router_contracts_2, eth_wallet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertPathFromStringToArr = exports.getExactAmountInRoutes = exports.getExactAmountOutRoutes = exports.toSqrtX96 = exports.fromDeployResult = exports.deploy = exports.DefaultDeployOptions = exports.SwapRouterContracts = exports.PeripheryContracts = exports.CoreContracts = void 0;
    Object.defineProperty(exports, "CoreContracts", { enumerable: true, get: function () { return v3_core_2.Contracts; } });
    Object.defineProperty(exports, "PeripheryContracts", { enumerable: true, get: function () { return v3_periphery_2.Contracts; } });
    Object.defineProperty(exports, "SwapRouterContracts", { enumerable: true, get: function () { return swap_router_contracts_2.Contracts; } });
    ;
    ;
    var progressHandler;
    exports.DefaultDeployOptions = {
        weth: ''
    };
    async function deploy(wallet, options, onProgress) {
        onProgress('1/9 Deploy UniswapV3Factory contract');
        let factory = new v3_core_1.Contracts.UniswapV3Factory(wallet);
        await factory.deploy();
        onProgress(`factory: ${factory.address}`);
        onProgress('2/9 Deploy TickLens contract');
        let tickLens = new v3_periphery_1.Contracts.TickLens(wallet);
        await tickLens.deploy();
        onProgress(`tickLens: ${tickLens.address}`);
        onProgress('3/9 Deploy Quoter contract');
        let quoter = new v3_periphery_1.Contracts.Quoter(wallet);
        await quoter.deploy({ factory: factory.address, WETH9: options.weth });
        onProgress(`quoter: ${quoter.address}`);
        onProgress('4/9 Deploy SwapRouter contract');
        let router = new v3_periphery_1.Contracts.SwapRouter(wallet);
        await router.deploy({ factory: factory.address, WETH9: options.weth });
        onProgress(`router: ${router.address}`);
        onProgress('5/9 Deploy NFTDescriptor contract');
        let nftDesc = new v3_periphery_1.Contracts.NFTDescriptor(wallet);
        await nftDesc.deploy();
        onProgress(`nftDesc: ${nftDesc.address}`);
        onProgress('6/9 Deploy NonfungibleTokenPositionDescriptor contract');
        let nftPosDesc = new v3_periphery_1.Contracts.NonfungibleTokenPositionDescriptor(wallet);
        let label = await (new eth_wallet_1.Erc20(wallet, options.weth).symbol);
        label = label.substring(0, 31);
        label = eth_wallet_1.Utils.stringToBytes32(label);
        await nftPosDesc.deploy({ WETH9: options.weth, nativeCurrencyLabelBytes: label }, { "contracts/libraries/NFTDescriptor.sol": { "NFTDescriptor": nftDesc.address } });
        onProgress(`nftPosDesc: ${nftPosDesc.address}`);
        onProgress('7/9 Deploy NonfungiblePositionManager contract');
        let nftPosMngr = new v3_periphery_1.Contracts.NonfungiblePositionManager(wallet);
        await nftPosMngr.deploy({ factory: factory.address, WETH9: options.weth, tokenDescriptor: nftDesc.address });
        onProgress(`nftPosMngr: ${nftPosMngr.address}`);
        onProgress('8/9 Deploy QuoterV2 contract');
        let quoterV2 = new v3_periphery_1.Contracts.QuoterV2(wallet);
        await quoterV2.deploy({ factory: factory.address, WETH9: options.weth });
        onProgress(`quoter2: ${quoterV2.address}`);
        onProgress('9/9 Deploy SwapRouter02 contract');
        let router02 = new swap_router_contracts_1.Contracts.SwapRouter02(wallet);
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
            factory: new v3_core_1.Contracts.UniswapV3Factory(wallet, result.factory),
            tickLens: new v3_periphery_1.Contracts.TickLens(wallet, result.tickLens),
            quoter: new v3_periphery_1.Contracts.Quoter(wallet, result.quoter),
            router: new v3_periphery_1.Contracts.SwapRouter(wallet, result.router),
            nftDesc: new v3_periphery_1.Contracts.NFTDescriptor(wallet, result.nftDesc),
            nftPosDesc: new v3_periphery_1.Contracts.NonfungibleTokenPositionDescriptor(wallet, result.nftPosDesc),
            nftPosMngr: new v3_periphery_1.Contracts.NonfungiblePositionManager(wallet, result.nftPosMngr),
            quoterV2: new v3_periphery_1.Contracts.QuoterV2(wallet, result.quoterV2),
            router02: new swap_router_contracts_1.Contracts.SwapRouter02(wallet, result.router02)
        };
    }
    exports.fromDeployResult = fromDeployResult;
    const X96 = new eth_wallet_1.BigNumber(2).pow(96);
    function toSqrtX96(n) {
        return n.sqrt().times(X96).dp(0, eth_wallet_1.BigNumber.ROUND_FLOOR);
    }
    exports.toSqrtX96 = toSqrtX96;
    // SDK for front-end 
    const fees = [100, 500, 3000, 10000]; // default pool fee
    // Get Exact Amount Out for UniV3
    const getExactAmountOutRoutes = async (param) => {
        const { wallet, quoterAddress, tokenIn, tokenOut, exactAmountOut, path } = param;
        const quoter = new v3_periphery_1.Contracts.Quoter(wallet, quoterAddress);
        // Single hop
        let exactAmountOutArr = await Promise.all(fees.map(async (fee) => {
            try {
                const amountIn = await quoter.quoteExactOutputSingle.call({
                    tokenIn,
                    tokenOut,
                    fee,
                    amountOut: exactAmountOut,
                    sqrtPriceLimitX96: 0
                });
                let path = "0x" +
                    tokenIn.toLowerCase().replace("0x", "") +
                    eth_wallet_1.Utils.numberToBytes32(fee).substring(58, 64) +
                    tokenOut.toLowerCase().replace("0x", "");
                return {
                    tokenIn,
                    tokenOut,
                    path,
                    amountIn,
                    exactAmountOut
                };
            }
            catch (err) {
                // pair not exists
            }
        }));
        // Multi hop
        if (path) {
            const amountIn = await quoter.quoteExactOutput.call({ path, amountOut: exactAmountOut });
            exactAmountOutArr.push({
                tokenIn,
                tokenOut,
                amountIn,
                path,
                exactAmountOut
            });
        }
        exactAmountOutArr = exactAmountOutArr.filter(v => v !== undefined).sort((a, b) => a.amountIn.minus(b.amountIn).toNumber());
        return exactAmountOutArr;
    };
    exports.getExactAmountOutRoutes = getExactAmountOutRoutes;
    // Get Exact Amount In for UniV3
    const getExactAmountInRoutes = async (param) => {
        const { wallet, quoterAddress, tokenIn, tokenOut, exactAmountIn, path } = param;
        const quoter = new v3_periphery_1.Contracts.Quoter(wallet, quoterAddress);
        // Single hop
        let exactAmountInArr = await Promise.all(fees.map(async (fee) => {
            try {
                const amountOut = await quoter.quoteExactInputSingle.call({
                    tokenIn,
                    tokenOut,
                    fee,
                    amountIn: exactAmountIn,
                    sqrtPriceLimitX96: 0
                });
                let path = "0x" +
                    tokenIn.toLowerCase().replace("0x", "") +
                    eth_wallet_1.Utils.numberToBytes32(fee).substring(58, 64) +
                    tokenOut.toLowerCase().replace("0x", "");
                return {
                    tokenIn,
                    tokenOut,
                    fee: fee,
                    path,
                    exactAmountIn,
                    amountOut
                };
            }
            catch (err) {
                // pair not exists
            }
        }));
        // Multi hop
        if (path) {
            const amountOut = await quoter.quoteExactInput.call({ path, amountIn: exactAmountIn });
            exactAmountInArr.push({
                path,
                tokenIn,
                tokenOut,
                exactAmountIn,
                amountOut
            });
        }
        exactAmountInArr = exactAmountInArr.filter(v => v !== undefined).sort((a, b) => b.amountOut.minus(a.amountOut).toNumber());
        return exactAmountInArr;
    };
    exports.getExactAmountInRoutes = getExactAmountInRoutes;
    const convertPathFromStringToArr = (path) => {
        if (!path)
            return null;
        let arr = [];
        // Remove "0x"
        path = path.substring(2, path.length);
        while (path.length !== 40) {
            // Add token address to arr
            arr.push("0x" + path.substring(0, 40));
            path = path.substring(40, path.length);
            // Add fee to arr
            arr.push(parseInt(path.substring(0, 6), 16));
            path = path.substring(6, path.length);
        }
        // Add last token address to arr
        arr.push("0x" + path);
        return arr;
    };
    exports.convertPathFromStringToArr = convertPathFromStringToArr;
    exports.default = {
        CoreContracts: v3_core_1.Contracts,
        PeripheryContracts: v3_periphery_1.Contracts,
        SwapRouterContracts: swap_router_contracts_1.Contracts,
        DefaultDeployOptions: exports.DefaultDeployOptions,
        deploy,
        fromDeployResult,
        toSqrtX96,
        getExactAmountInRoutes: exports.getExactAmountInRoutes,
        getExactAmountOutRoutes: exports.getExactAmountOutRoutes,
        convertPathFromStringToArr: exports.convertPathFromStringToArr
    };
    ;
});

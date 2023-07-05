## Contract Addresses
[https://docs.uniswap.org/contracts/v3/reference/deployments](https://docs.uniswap.org/contracts/v3/reference/deployments)  

| Contract | Address |
| - | - |
| UniswapV3Factory | [0x1F98431c8aD98523631AE4a59f267346ea31F984](https://etherscan.io/address/0x1F98431c8aD98523631AE4a59f267346ea31F984) |
| Multicall2 | [0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696](https://etherscan.io/address/0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696) |
| ProxyAdmin | [0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2](https://etherscan.io/address/0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2) |
| TickLens | [0xbfd8137f7d1516D3ea5cA83523914859ec47F573](https://etherscan.io/address/0xbfd8137f7d1516D3ea5cA83523914859ec47F573) |
| Quoter | [0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6](https://etherscan.io/address/0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6) |
| SwapRouter | [0xE592427A0AEce92De3Edee1F18E0157C05861564](https://etherscan.io/address/0xE592427A0AEce92De3Edee1F18E0157C05861564) |
| NFTDescriptor | [0x42B24A95702b9986e82d421cC3568932790A48Ec](https://etherscan.io/address/0x42B24A95702b9986e82d421cC3568932790A48Ec) |
| NonfungibleTokenPositionDescriptor | [0x91ae842A5Ffd8d12023116943e72A606179294f3](https://etherscan.io/address/0x91ae842A5Ffd8d12023116943e72A606179294f3) |
| NonfungiblePositionManager | [0xC36442b4a4522E871399CD717aBDD847Ab11FE88](https://etherscan.io/address/0xC36442b4a4522E871399CD717aBDD847Ab11FE88) |
| TransparentUpgradeableProxy | [0xEe6A57eC80ea46401049E92587E52f5Ec1c24785](https://etherscan.io/address/0xEe6A57eC80ea46401049E92587E52f5Ec1c24785) |
| V3Migrator | [0xA5644E29708357803b5A882D272c41cC0dF92B34](https://etherscan.io/address/0xA5644E29708357803b5A882D272c41cC0dF92B34) |
| QuoterV2 | [0x61fFE014bA17989E743c5F6cB21bF9697530B21e](https://etherscan.io/address/0x61fFE014bA17989E743c5F6cB21bF9697530B21e) |
| SwapRouter02 | [0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45](https://etherscan.io/address/0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45) |
| Permit2 | [0x000000000022d473030f116ddee9f6b43ac78ba3](https://etherscan.io/address/0x000000000022d473030f116ddee9f6b43ac78ba3) |
---  
  
## Uniswap's own Deployer
[0x6c9fc64a53c1b71fb3f9af64d1ae3a4931a5f4e9](https://etherscan.io/address/0x6c9fc64a53c1b71fb3f9af64d1ae3a4931a5f4e9)

## Notes on calling uniswap router swap function:
1. Prices are always based on token0 (token with smaller address); independent of in-token / out-token direction.
2. sqrtPriceLimitX96 can be set to 0 to trade at the slot0 price
3. sqrtPriceLimitX96 should be highter then the slot0 price for exact-in, or smaller then the slot 0 price for exact-out.
4. ETH input is automatically wrapped.
5. To get native ETH output: 1. set router as the recipient in swap paramters, 2. use router.multicall() with router.unwrapWETH9() as the second call.
6. For ETH input and router.exactOut(): use router.multicall() with router.refundETH() as the second call to get excess ETH back.
7. For multi-hop exactOut, path are reversed (token-out is the first in the list and token-in is the last).

## Notes on logarithm
1. log<sub>1.0001</sub>(X) = log(X) / log(1.0001)
2. log<sub>10</sub>(big_X) = log<sub>10</sub>(x*1eY) = Y + log<sub>10</sub>(x)

## Resources
- https://uniswap.org/whitepaper-v3.pdf
- https://github.com/Uniswap/v3-core
- https://github.com/Uniswap/v3-periphery
- https://github.com/Uniswap/swap-router-contracts
- https://docs.uniswap.org/contracts/v3/overview
- https://uniswapv3book.com/

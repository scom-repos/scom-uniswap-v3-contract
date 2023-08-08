import { HardhatUserConfig } from "hardhat/config";
import "solidity-coverage";
import "@nomiclabs/hardhat-web3";

const config: HardhatUserConfig = {
  solidity: {
    compilers:[
      {
        version: "0.8.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999
          }
        }
      }
    ]
  },
  paths: {
    root: "../",
    sources: "./contracts", 
    tests: "./test",
    cache: "./hardhat/cache",
    artifacts: "./hardhat/artifacts"
  },
  mocha: {
    timeout: 1000000
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true
    }
  }
};

export default config;

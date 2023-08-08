const DEFAULT_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 1_000_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
}
export default {
  solidity: {
    compilers: [DEFAULT_COMPILER_SETTINGS]
  },
  paths: {
    root: "./swap-router-contracts",
    sources: "./contracts",
    artifacts: "../artifacts",
    cache: "../cache"
  }
};

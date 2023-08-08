export default {
  solidity: {
    compilers: [
    {
      "version": "0.7.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 800
        },
        metadata: {
          bytecodeHash: 'none',
        }
      }
    }
    ]
  },
  paths: {
    root: "./v3-core",
    sources: "./contracts",
    artifacts: "../artifacts",
    cache: "../cache"
  }
};

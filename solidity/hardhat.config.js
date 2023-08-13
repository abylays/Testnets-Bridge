require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require("dotenv").config();
module.exports = {
  solidity: "0.8.18",
  networks: {
    // ETH side of the bridge
    origin: {
      //url: process.env.DEPLOY_ENDPOINT_ORIGIN,
      url: process.env.RPC_URL,
      accounts: [process.env.DEPLOY_ACC_KEY],
    },
    // Polygon side of the bridge
    destination: {
      url: process.env.DEPLOY_ENDPOINT_DESTINATION,
      accounts: [process.env.DEPLOY_ACC_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

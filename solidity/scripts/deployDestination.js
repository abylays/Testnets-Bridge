const hre = require("hardhat");
require("dotenv").config();

const main = async () => {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with account: ", deployer.address);

  let contractFactory = await hre.ethers.getContractFactory("DOutpeerDollars");
  let contract = await contractFactory.deploy(process.env.BRIDGE_WALLET);

  await contract.deployed();

  console.log(
    "contract DOutpeerDollars deployed to address: ",
    contract.getAddress
  );
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();

//0x73BB2681786B64988336ba599c424366B8761b72

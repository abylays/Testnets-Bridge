const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const tokenContract = await hre.ethers.deployContract("OutpeerDollars");
  await tokenContract.waitForDeployment();
  console.log(
    "token OutpeerDollars deployed to address: ",
    tokenContract.target
  );

  await sleep(30 * 1000);

  await hre.run("verify:verify", {
    address: tokenContract.target,
    constructorArguments: [],
    contract: "contracts/originToken.sol:OutpeerDollars",
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0x0c17ecfC378eE8D1053e2203471ddCF6bC2425c7

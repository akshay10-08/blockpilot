const hre = require("hardhat");

async function main() {
  const BlockPilot = await hre.ethers.getContractFactory("BlockPilot");
  const blockPilot = await BlockPilot.deploy();

  await blockPilot.deployed();
  console.log(`BlockPilot deployed to: ${blockPilot.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { ethers } from "hardhat";

async function main() {
  console.log("Deploying BeeNFT contract...");

  const BeeNFT = await ethers.getContractFactory("BeeNFT");
  const beeNFT = await BeeNFT.deploy();

  await beeNFT.waitForDeployment();

  console.log(`BeeNFT deployed to: ${await beeNFT.getAddress()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 
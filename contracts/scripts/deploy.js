const hre = require("hardhat");
const sendDataToFrontend = require("../utils/sendDataToFrontend");

async function main() {
  const Blockchain = await hre.ethers.deployContract("Blockchain");
  const response = await Blockchain.waitForDeployment();

  console.log(` deployed to ${Blockchain}`);
  console.log(response);
  const address = response.target;

  sendDataToFrontend(address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// npx hardhat compile
// npx hardhat node
// npx hardhat run scripts/deploy.js --network localhost
// npx hardhat test

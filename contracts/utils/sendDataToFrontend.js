const contractData = require("../artifacts/contracts/Blockchain.sol/Blockchain.json");
const fs = require("fs");

function sendDataToFrontend(contractAddresses) {
  console.log("sending data to frontend...");

  const contractName = "localhost";
  const abi = contractData.abi;
  const bytecode = contractData.bytecode;
  const contractAddress = contractAddresses;

  fs.writeFileSync(
    "../frontend/constants/abi.json",
    `{ "${contractName}": ${JSON.stringify(abi)}}`
  );
  fs.writeFileSync(
    "../frontend/constants/bytecode.json",
    `{ "${contractName}": ${JSON.stringify(bytecode)}}`
  );
  fs.writeFileSync(
    "../frontend/constants/contractAddress.json",
    `{ "${contractName}":"${contractAddress}"}`
  );

  console.log("data sent to frontend!");
}

module.exports = sendDataToFrontend;

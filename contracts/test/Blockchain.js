const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Blockchain", function () {
  let Blockchain;
  let blockchain;

  beforeEach(async function () {
    console.log("Working the contract!");
    Blockchain = await ethers.getContractFactory("Blockchain");
    console.log("Waiting for the contract to be deploy!");
    blockchain = await Blockchain.deploy();
    console.log("The contract to be deployed!");
  });

  it("should start with genesis block", async function () {
    const [index, hash, previousHash, timestamp, data] =
      await blockchain.getBlock(0);

    expect(hash).to.equal("0x0000000000000000000000000000000000000002");
    expect(previousHash).to.equal("0x0000000000000000000000000000000000000001");
    expect(data).to.equal("Genesis Block");
  });

  it("should add a new block", async function () {
    const newHash = "0x0000000000000000000000000000000000000004";
    const newPreviousHash = "0x0000000000000000000000000000000000000003";
    const newData = "New block";

    await blockchain.addBlock(newHash, newPreviousHash, newData);

    const [index, hash, previousHash, timestamp, data] =
      await blockchain.getBlock(1);

    expect(hash).to.equal(newHash);
    expect(previousHash).to.equal(newPreviousHash);
    expect(data).to.equal(newData);
  });
});

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

contract Blockchain {
    struct Block {
        uint256 index;
        string hash;
        string previousHash;
        uint256 timestamp;
        string data;
    }

    Block[] public blocks;

    constructor() {
        addBlock(
            "0x0000000000000000000000000000000000000002",
            "0x0000000000000000000000000000000000000001",
            "Genesis Block"
        );
    }

    function addBlock(
        string memory _hash,
        string memory _previousHash,
        string memory _data
    ) public {
        uint256 newIndex = blocks.length + 1;
        uint256 newTimestamp = block.timestamp;

        Block memory newBlock = Block({
            index: newIndex,
            hash: _hash,
            previousHash: _previousHash,
            timestamp: newTimestamp,
            data: _data
        });

        blocks.push(newBlock);
    }

    function getBlock(uint256 _index) external view returns (Block memory) {
        require(_index < blocks.length, "Block does not exist");
        return blocks[_index];
    }

    function getBlocksCount() external view returns (uint256) {
        return blocks.length;
    }
}

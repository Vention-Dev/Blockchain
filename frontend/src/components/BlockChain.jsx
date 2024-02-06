"use client";
import React, { useState, useEffect } from "react";
import useContracts from "@/hooks/useContracts";
import classes from "@/styles/blockChain.module.css";
import { useNetwork } from "wagmi";

const BlockChain = () => {
  const { chain } = useNetwork();
  const chainId = chain?.id;

  const [index, setIndex] = useState(0);
  const { addBlock, getBlock, getBlocksCount } = useContracts();

  const [Allblock, setAllBlock] = useState([]);
  const [blockCount, setBlockCount] = useState(0);

  const handleAddBlock = async () => {
    const date = new Date();
    await addBlock({
      hash: "0x0000000000000000000000000000000000000002",
      previousHash: "0x0000000000000000000000000000000000000001",
      data: `This is a new block created at ${
        date.toDateString() + " " + date.toLocaleTimeString()
      }`,
    });
  };

  const handleGetBlock = async () => {
    const response = await getBlock(index);
    if (response === undefined) return;
    setAllBlock([...Allblock, response]);
  };

  const handlegetBlocksCount = async () => {
    const response = await getBlocksCount();
    setBlockCount(Number(response));
  };

  useEffect(() => {
    if (chainId === undefined) return;
    handlegetBlocksCount();
    handleGetBlock(0);
  }, [chainId]);

  if (chainId === undefined)
    return (
      <div className={classes["container"]}>
        <h1>
          BlockChain <span>Explorer</span>
        </h1>
        <h1>Please connect to a network to view the blockchain data</h1>
      </div>
    );

  return (
    <div className={classes["container"]}>
      <h1>
        BlockChain <span>Explorer</span>
      </h1>
      <div className={classes["box"]}>
        <h2>Chain ID: {chainId}</h2>
        <button onClick={handleAddBlock}>Add Block</button>
        <button onClick={() => handleGetBlock()}>Get Block</button>
        <button onClick={handlegetBlocksCount}>Get Blocks Count</button>
      </div>
      <div className={classes["box-data"]}>
        <input
          min={0}
          max={blockCount - 1}
          type="number"
          onChange={(e) => setIndex(e.target.value)}
          value={index}
          placeholder="Enter the block index to get the block data"
        />
        <h2>Block Count: {blockCount}</h2>
        <div className={classes["blockdata"]}>
          <h2>Block Data</h2>
          <ul>
            {Allblock.map((block, index) => {
              return (
                <li key={index}>
                  <p>Index: {Number(block.index)}</p>
                  <p>Hash: {block.hash}</p>
                  <p>Previous Hash: {block.previousHash}</p>
                  <p>
                    Timestamp :
                    {new Date(Number(block.timestamp) * 1000).toString()}
                  </p>
                  <p>Data: {block.data}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlockChain;

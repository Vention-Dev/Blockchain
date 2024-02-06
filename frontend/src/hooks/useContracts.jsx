"use client";
import useHandleContractWrite from "./useHandleContractWrite";
import useHandleContractRead from "./useHandleContractRead";
import { useNotification } from "./useNotification";
import { useState } from "react";
const useContracts = () => {
  const { NotificationHandler } = useNotification();

  // Add Block to the blockchain
  const {
    data: dataBlock,
    isLoading: isLoadingBlock,
    isSuccess: isSuccessBlock,
    write: writeBlock,
  } = useHandleContractWrite({
    functionName: "addBlock",
  });
  const addBlock = async (block) => {
    try {
      const response = await writeBlock({
        args: [block.hash, block.previousHash, block.data],
        value: 0,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // Get the data of the block from the blockchain
  const [blockId, setBlockId] = useState(0);
  const {
    data: datagetBlock,
    isLoading: isLoadinggetBlock,
    isSuccess: isSuccessgetBlock,
    refetch: refetchgetBlock,
  } = useHandleContractRead({
    functionName: "getBlock",
    args: [blockId],
  });
  const getBlock = async (id) => {
    setBlockId(id);
    try {
      const response = await refetchgetBlock(
        {
          args: [blockId],
        },
        { force: true }
      );
      console.log(response.data);
      if (response.data === undefined) {
        NotificationHandler(
          "Block Not Found",
          `Block with id ${id} not found in the blockchain`,
          "Error"
        );
      }
      return response.data;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  };

  // Get the length of the blockchain
  const {
    data: datagetBlocksCount,
    isLoading: isLoadinggetBlocksCount,
    isSuccess: isSuccessgetBlocksCount,
    refetch: refetchgetBlocksCount,
  } = useHandleContractRead({
    functionName: "getBlocksCount",
    args: [],
  });
  const getBlocksCount = async () => {
    try {
      const response = await refetchgetBlocksCount(
        {
          args: [],
        },
        { force: true }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return 0;
    }
  };

  return {
    addBlock,
    dataBlock,
    isLoadingBlock,
    isSuccessBlock,
    getBlock,
    datagetBlock,
    isLoadinggetBlock,
    isSuccessgetBlock,
    getBlocksCount,
    datagetBlocksCount,
    isLoadinggetBlocksCount,
    isSuccessgetBlocksCount,
  };
};

export default useContracts;

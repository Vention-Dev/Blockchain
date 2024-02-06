import React from "react";
import { contractAddress, abi } from "../../constants";
import { useContractWrite } from "wagmi";

const useHandleContractWrite = ({ functionName }) => {
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: contractAddress.localhost,
    abi: abi.localhost,
    functionName: functionName,
  });

  return {
    data,
    isLoading,
    isSuccess,
    write,
  };
};

export default useHandleContractWrite;

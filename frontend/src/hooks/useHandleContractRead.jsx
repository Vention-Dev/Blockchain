import React from "react";
import { contractAddress, abi } from "../../constants";
import { useContractRead } from "wagmi";

const useHandleContractRead = ({ functionName, args }) => {
  const { data, isLoading, isSuccess, refetch } = useContractRead({
    address: contractAddress.localhost,
    abi: abi.localhost,
    functionName: functionName,
    args: args,
  });

  return {
    data,
    isLoading,
    isSuccess,
    refetch,
  };
};

export default useHandleContractRead;

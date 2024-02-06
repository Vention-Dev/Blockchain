"use client";
import React, { useState, useEffect } from "react";
import { useAccount, useSignMessage } from "wagmi";
import useDatabase from "@/hooks/useDatabase";
import classes from "@/styles/popUpsignMessage.module.css";
import Image from "next/image";

const PopUpsignMessage = ({ setPopUp, popUp }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    contactNumber: "",
    profilePicture: "/user.jpg",
    walletAddress: "",
    creatingDate: "",
  });

  const { getUser, isloadingGetUser, updateUser, isloadingUpdateUser } =
    useDatabase();
  const { address, isConnecting, isDisconnected } = useAccount();

  const {
    data: signaturedata,
    isError,
    isLoading,
    isSuccess,
    signMessage,
  } = useSignMessage({
    message: "Sign this message to view the blockchain data",
  });

  useEffect(() => {
    const fun = async () => {
      const response = await getUser(address);
      const userData = response.userData;
      delete userData.__v;
      delete userData._id;
      setUser(userData);
      setPopUp(response.popUp);
    };
    if (address && !isloadingGetUser) fun();
  }, [address?.toLowerCase()]);

  const handelSubmit = async () => {
    const signing = await signMessage();
  };

  useEffect(() => {
    const fun = async () => {
      const response = await updateUser(address, user, signaturedata);
      if (response) setPopUp(false);
    };
    if (isSuccess) fun();
  }, [isSuccess]);

  if (!popUp) return null;

  console.log(user);

  return (
    <div className={classes["container"]}>
      <div className={classes["box"]}>
        <div className={classes["left"]}>
          <Image
            src={user.profilePicture}
            width={300}
            height={300}
            alt="image"
          />
        </div>
        <div className={classes["right"]}>
          {Object.keys(user).map((key) => (
            <div key={key} className={classes["input-area"]}>
              <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
              <input
                type="text"
                value={user[key]}
                onChange={(e) => setUser({ ...user, [key]: e.target.value })}
                disabled={key == "walletAddress" || key == "creatingDate"}
              />
            </div>
          ))}
          <div className={classes["sign-message"]}>
            <button onClick={handelSubmit}>Sign Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpsignMessage;

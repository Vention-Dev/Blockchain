"use client";
import { useState } from "react";
import { useNotification } from "./useNotification";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function useDatabase() {
  const { NotificationHandler } = useNotification();
  const { getLocalStorage, setLocalStorage, updateLocalStorage } =
    useLocalStorage();
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
  console.log("useDatabase function called!");

  const [isloadingCreateUser, setIsloadingCreateUser] = useState(false);
  const [isloadingGetUser, setIsloadingGetUser] = useState(false);
  const [isloadingUpdateUser, setIsloadingUpdateUser] = useState(false);

  async function createUser(data) {
    const userDat = getLocalStorage("userdata");
    if (userDat?.userdata?.walletAddress == data.walletAddress) {
      console.log("User already exists and token is present!");
      return userDat?.userdata;
    }
    try {
      setIsloadingCreateUser(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/create`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const responsedata = await response.json();
      setIsloadingCreateUser(false);
      return responsedata.user;
    } catch (err) {
      console.log(err);
      setIsloadingCreateUser(false);
      return "Error during user creation";
    }
  }

  async function getUser(address) {
    const userData = getLocalStorage("userdata");
    if (userData && userData?.userdata?.walletAddress == address) {
      console.log("User already exists and token is present!");
      return {
        userData: userData.userdata,
        popUp: false,
      };
    }
    try {
      setIsloadingGetUser(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${address}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const responsedata = await response.json();
      setIsloadingGetUser(false);
      return { userData: responsedata.response[0], popUp: true };
    } catch (err) {
      console.log(err.message);
      setIsloadingGetUser(false);
      return {
        name: "",
        email: "",
        contactNumber: "",
        profilePicture: "/user.jpg",
        walletAddress: "",
        creatingDate: "",
      };
    }
  }

  async function updateUser(address, data, signaturedata) {
    try {
      setIsloadingUpdateUser(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${address}/${signaturedata}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const responsedata = await response.json();
      setIsloadingUpdateUser(false);
      if (responsedata.type == "Success") {
        NotificationHandler(
          "User Updated",
          "User data has been updated successfully and signed!",
          "Success"
        );
        updateLocalStorage({ userdata: data }, "userdata");
        updateLocalStorage({ token: responsedata.token }, "token");
      }
      return true;
    } catch (err) {
      console.log(err.message);
      setIsloadingUpdateUser(false);
      NotificationHandler(
        "Error during user Updated!",
        "Error during user data update!",
        "Error"
      );
      return false;
    }
  }

  return {
    createUser,
    isloadingCreateUser,
    getUser,
    isloadingGetUser,
    updateUser,
    isloadingUpdateUser,
  };
}

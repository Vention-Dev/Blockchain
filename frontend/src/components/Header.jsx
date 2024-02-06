"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import classes from "@/styles/header.module.css";

const Header = () => {
  return (
    <div className={classes["container"]}>
      <ConnectButton showBalance={false} chainStatus="icon" />
    </div>
  );
};

export default Header;

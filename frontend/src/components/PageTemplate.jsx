"use client";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useAccount } from "wagmi";
import useDatabase from "@/hooks/useDatabase";
import PopUpsignMessage from "./PopUpsignMessage";

function PageTemplate({ children }) {
  const { createUser, isloadingCreateUser } = useDatabase();
  const { address, isConnecting, isDisconnected } = useAccount();
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    if (address && !isloadingCreateUser) {
      createUser({ walletAddress: address });
    }
  }, [address?.toLowerCase()]);

  return (
    <div className="page-container">
      <div className="page-box">
        <div
          onClick={() => {
            setPopUp((prev) => !prev);
          }}
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "100",
            background: "var(--primary-color)",
            padding: "8px",
            cursor: "pointer",
            margin: "1rem",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            textTransform: "uppercase",
          }}
        >
          User
        </div>
        <div className="pop-up">
          <PopUpsignMessage setPopUp={setPopUp} popUp={popUp} />
        </div>
        <div className="page-header">
          <Header />
        </div>
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
}

export default PageTemplate;

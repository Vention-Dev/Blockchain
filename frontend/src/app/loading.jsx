import React from "react";
import PageTemplate from "@/components/PageTemplate";
const Loading = () => {
  return (
    <>
      <PageTemplate>
        <div
          className="loading"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div className="spin-wrapper">
            <div
              className="spin"
              style={{
                height: "50px",
                width: "50px",
              }}
            ></div>
          </div>
        </div>
      </PageTemplate>
    </>
  );
};

export default Loading;

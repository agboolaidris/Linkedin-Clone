import React from "react";
import { BarLoader } from "react-spinners";
import { css } from "@emotion/react";
import { useSelector } from "react-redux";

function Loading() {
  const isLoading = useSelector((state) => state.Auth.isLoading);
  const loading = {
    position: "absolute",
    background: "$white",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const isloadNone = {
    display: "none",
  };
  //   const overide = css`
  //     position: absolute;
  //   `;
  //   return <BarLoader loading={true} color="blue" />;

  return (
    <div className={isLoading ? "loading" : "loading-false"}>
      <BarLoader loading={true} />
    </div>
  );
}

export default Loading;

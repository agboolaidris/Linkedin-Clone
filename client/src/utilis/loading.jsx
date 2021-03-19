import React from "react";
import { CircleLoader, PacmanLoader, RingLoader } from "react-spinners";
import { css } from "@emotion/react";
import { useSelector } from "react-redux";

function Loading() {
  const isLoading = useSelector((state) => state.Auth.isLoading);

  return (
    <div className={isLoading ? "loading" : "loading-false"}>
      <RingLoader loading={true} size={100} color="#112d4e" />
    </div>
  );
}

export default Loading;

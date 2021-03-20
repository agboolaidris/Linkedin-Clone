import React from "react";
import { RingLoader } from "react-spinners";

function Loading({ isLoading }) {
  return (
    <div className={isLoading ? "loading" : "loading-false"}>
      <RingLoader loading={isLoading} size={100} color="#112d4e" />
    </div>
  );
}

export default Loading;

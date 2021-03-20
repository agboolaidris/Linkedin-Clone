import React from "react";
import { RingLoader } from "react-spinners";

function Loading({ isLoading }) {
  return <RingLoader loading={isLoading} size={100} color="#112d4e" />;
}

export default Loading;

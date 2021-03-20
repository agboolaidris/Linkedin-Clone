import React from "react";
import { RingLoader } from "react-spinners";
import { css } from "@emotion/react";
function Loading({ isLoading }) {
  const override = css`
    display: block;
    margin: 40vh auto;
  `;

  return (
    <RingLoader loading={isLoading} size={100} color="#112d4e" css={override} />
  );
}

export default Loading;

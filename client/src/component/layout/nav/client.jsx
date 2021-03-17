import React from "react";
import { Link } from "react-router-dom";
function Client() {
  return (
    <>
      <li className="">
        <Link to="/">Join now</Link>
      </li>
      <li className="">
        <Link to="/">Sign in</Link>
      </li>
    </>
  );
}

export default Client;

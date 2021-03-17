import React from "react";
import { Link } from "react-router-dom";
function Guest({ setharmburger }) {
  return (
    <>
      <li className="btn-guest" onClick={() => setharmburger(false)}>
        <Link to="/">Home</Link>
      </li>
      <li className="btn-guest" onClick={() => setharmburger(false)}>
        <Link to="/">Join now</Link>
      </li>
      <li className="btn-signin">
        <Link to="/signin" onClick={() => setharmburger(false)}>
          Sign in
        </Link>
      </li>
    </>
  );
}

export default Guest;

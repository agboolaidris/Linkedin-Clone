import React from "react";
import { Link } from "react-router-dom";
function Guest({ setharmburger }) {
  return (
    <>
      <li className="gue-nav-link" onClick={() => setharmburger(false)}>
        <Link to="/">Home</Link>
      </li>
      <li className="gue-nav-link" onClick={() => setharmburger(false)}>
        <Link to="/signup">Join now</Link>
      </li>
      <li className="gue-nav-link signin-nav-link">
        <Link to="/signin" onClick={() => setharmburger(false)}>
          Sign in
        </Link>
      </li>
    </>
  );
}

export default Guest;

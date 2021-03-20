import React from "react";
import { Link } from "react-router-dom";
import ProfileNav from "./profileNav";
function Guest({ setharmburger }) {
  return (
    <>
      <li className="btn-nav" onClick={() => setharmburger(false)}>
        <Link to="/">Home</Link>
      </li>
      <li className="btn-nav" onClick={() => setharmburger(false)}>
        <Link to="/signup">Join now</Link>
      </li>
      <li className="btn-signin">
        <Link to="/signin" onClick={() => setharmburger(false)}>
          Sign in
        </Link>
      </li>

      <li className="dropdown">
        Test
        <ProfileNav />
      </li>
    </>
  );
}

export default Guest;

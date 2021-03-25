import React from "react";
import { Link } from "react-router-dom";
function Guest({ setharmburger, harmburger }) {
  return (
    <ul className={!harmburger ? "guest-nav" : "guest-nav guestNav-mobile"}>
      <li onClick={() => setharmburger(false)}>
        <Link to="/">Home</Link>
      </li>
      <li onClick={() => setharmburger(false)}>
        <Link to="/signup">Join now</Link>
      </li>
      <li className="link-border">
        <Link to="/signin" onClick={() => setharmburger(false)}>
          Sign in
        </Link>
      </li>
    </ul>
  );
}

export default Guest;

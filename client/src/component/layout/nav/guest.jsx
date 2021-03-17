import React from "react";
import { Link } from "react-router-dom";
function Guest() {
  return (
    <ul className="guest ul">
      <li className="signup">
        <Link to="/">Join now</Link>
      </li>
      <li className="signin">
        <Link to="/">Sign in</Link>
      </li>
    </ul>
  );
}

export default Guest;

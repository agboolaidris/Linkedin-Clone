import React from "react";
import { Link } from "react-router-dom";
import { faHome, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user from "../../../img/user.svg";
import ProfileNav from "./profileNav";
function Client() {
  return (
    <>
      <li className="cli-nav-li">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
          Home
        </Link>
      </li>
      <li className="dropdown">
        <div>
          <img src={user} />
          <span>
            Me <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </div>

        <ProfileNav />
      </li>
    </>
  );
}

export default Client;

import React from "react";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user from "../../../img/user.svg";
import ProfileNav from "./profileNav";
function Client() {
  return (
    <>
      <li className="">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
          <br />
          Home
        </Link>
      </li>
      <li className="dropdown">
        <img src={user} />
        <ProfileNav />
      </li>
    </>
  );
}

export default Client;

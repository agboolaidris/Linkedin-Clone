import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faHome, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user from "../../../assets/img/user.svg";
import ProfileNav from "./profile-nav/profileNav";

function Client({ setharmburger }) {
  const [toggleDropdown, settoggleDropdown] = useState(false);
  return (
    <ul className="client-nav">
      <li onClick={() => setharmburger(false)}>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </Link>
      </li>

      {/* display the profile-nav on click */}
      <li className="dropdown-link">
        <span>
          <img src={user} />
          <i>
            Me <FontAwesomeIcon icon={faCaretDown} />
          </i>
        </span>

        <ProfileNav
          toggleDropdown={toggleDropdown}
          setharmburger={setharmburger}
        />
      </li>
    </ul>
  );
}

export default Client;

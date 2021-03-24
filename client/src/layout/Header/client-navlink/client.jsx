import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faHome, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user from "../../../assets/img/user.svg";
import ProfileNav from "./profileNav";

function Client({ setharmburger }) {
  const [toggleDropdown, settoggleDropdown] = useState(false);
  return (
    <>
      <li className="cli-nav-link" onClick={() => setharmburger(false)}>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </Link>
      </li>

      <li
        className="dropdown cli-nav-link"
        onClick={() =>
          toggleDropdown ? settoggleDropdown(false) : settoggleDropdown(true)
        }
      >
        <div>
          <img src={user} />
          <span>
            Me <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </div>

        <ProfileNav
          toggleDropdown={toggleDropdown}
          setharmburger={setharmburger}
        />
      </li>
    </>
  );
}

export default Client;

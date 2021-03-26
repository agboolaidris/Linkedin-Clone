import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faHome, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user from "../../../assets/img/user.svg";
import ProfileNav from "./profile-nav/profileNav";
import Imgbox from "../../../components/commons/img-box/imgbox";

function Client({ setharmburger, harmburger }) {
  const [toggleDropdown, settoggleDropdown] = useState(false);
  return (
    <ul className={harmburger ? "client-nav client-nav-mobile " : "client-nav"}>
      <li onClick={() => setharmburger(false)}>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </Link>
      </li>

      {/* display the profile-nav on click, it only show on desktop screen*/}
      <li
        className="dropdown-link"
        onClick={() =>
          toggleDropdown ? settoggleDropdown(false) : settoggleDropdown(true)
        }
      >
        <span>
          <Imgbox height="40px" width="40px" imgSize="25px" />
          <i>
            Me <FontAwesomeIcon icon={faCaretDown} />
          </i>
        </span>

        <ProfileNav
          toggleDropdown={toggleDropdown}
          setharmburger={setharmburger}
        />
      </li>

      {/* replacement of the dropdown on mobile */}
      <li className="dropdown-replace-mobile">
        <ProfileNav setharmburger={setharmburger} />
      </li>
    </ul>
  );
}

export default Client;

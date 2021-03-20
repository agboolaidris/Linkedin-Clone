import React from "react";
import user from "../../../img/user.svg";
function ProfileNav({ toggleDropdown, setharmburger }) {
  return (
    <ul className={toggleDropdown ? "sub-menu sub-menu-show" : "sub-menu"}>
      <li className="user-info">
        <img src={user} alt="" />
        <div>
          <p>Idris I Agboola</p>

          <p>Software Developer</p>
        </div>
      </li>

      <li className="view-profile-link" onClick={() => setharmburger(false)}>
        <a hfef="#">View Profile</a>
      </li>
      <div className="underline"></div>
      <li className="logout" onClick={() => setharmburger(false)}>
        Sign out
      </li>
    </ul>
  );
}

export default ProfileNav;

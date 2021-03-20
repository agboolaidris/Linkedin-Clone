import React from "react";
import user from "../../../img/user.svg";
function ProfileNav({ toggleDropdown }) {
  return (
    <ul className={toggleDropdown ? "sub-menu sub-menu-show" : "sub-menu"}>
      <li className="user-info">
        <img src={user} alt="" />
        <div>
          <p>Idris I Agboola</p>

          <p>Software Developer</p>
        </div>
      </li>

      <li className="view-profile-link">
        <a hfef="#">View Profile</a>
      </li>
      <div className="underline"></div>
      <li className="logout">Sign out</li>
    </ul>
  );
}

export default ProfileNav;

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

//action middleware
import { logout } from "../../../../redux/action/auth";
import { clearUserProfile } from "../../../../redux/action/profile";

//import static file
import user from "../../../../assets/img/user.svg";

function ProfileNav({ toggleDropdown, setharmburger }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    setharmburger(false);
    dispatch(logout());
    dispatch(clearUserProfile());
  };

  return (
    <div
      className={
        toggleDropdown ? "profile-nav profile-nav-display" : "profile-nav"
      }
    >
      <li className="user-info">
        <img src={user} alt="user" width="40px" height="40px" />
        <div>
          <p>Idris I Agboola</p>
          <p>Software Developer</p>
        </div>
      </li>

      <li className="profile-link" onClick={() => setharmburger(false)}>
        <Link to="/">View Profile</Link>
      </li>
      <div className="underline"></div>
      <li className="logout" onClick={handleLogout}>
        Sign out
      </li>
    </div>
  );
}

export default ProfileNav;

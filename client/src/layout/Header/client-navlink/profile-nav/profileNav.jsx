import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//action middleware
import { logout } from "../../../../redux/action/auth";
import { clearUserProfile } from "../../../../redux/action/profile";

//import static file
import Imgbox from "../../../../components/commons/imgbox";

function ProfileNav({ toggleDropdown, setharmburger }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.Auth.user);

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
        <Imgbox width="50px" height="50px" imgSize="30px" img={user?.avater} />
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

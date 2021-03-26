import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
function UserInfo({ profile }) {
  return (
    <div className="profile-user-info">
      <h3 className="username">Idris Agboola</h3>
      <p className="job">Software Developer</p>
      <p className="bio">
        Junior software developer train as a MERN stack passionate about
        javascript
      </p>
      <p className="location">Lagos, Lagos, Nigeria.</p>
      <div className="pen">
        <Link to="/">
          <FontAwesomeIcon icon={faPen} />
        </Link>
      </div>
    </div>
  );
}

export default UserInfo;

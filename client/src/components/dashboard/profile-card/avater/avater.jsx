import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUpload } from "@fortawesome/free-solid-svg-icons";
function Avater({ profile }) {
  return (
    <div className="avater">
      <div className="img-box">
        {profile?.avater ? (
          <img src={profile?.avater} alt={profile?.username} />
        ) : (
          <span>
            <FontAwesomeIcon icon={faUser} size="lg" />
          </span>
        )}
      </div>
      <div className="input-box">
        <label htmlFor="file">
          <FontAwesomeIcon icon={faUpload} />
        </label>
        <input type="file" id="file" />
      </div>
    </div>
  );
}

export default Avater;

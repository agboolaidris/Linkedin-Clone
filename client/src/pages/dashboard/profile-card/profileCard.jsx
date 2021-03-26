import React from "react";
import Avater from "../../../containers/dashboard/profile-card/avater";

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="top-background"></div>
      <div className="profile-info">
        <div className="img-wrapper">
          <Avater />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

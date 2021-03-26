import React from "react";
import Avater from "../../../containers/dashboard/profile-card/avater";
import UserInfo from "../../../containers/dashboard/profile-card/user-Info";

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="top-background"></div>
      <div className="profile-img-wrapper">
        <div className="img-wrapper">
          <Avater />
        </div>
      </div>
      <div className="profile-user-info">
        <UserInfo />
      </div>
    </div>
  );
}

export default ProfileCard;

import React from "react";
import Avater from "./avater/avater";

function ProfileCard({ profile }) {
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

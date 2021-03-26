import React from "react";

function Avater({}) {
  return (
    <div className="img-box">
      <img src={profile?.avater} alt={profile?.username} />
    </div>
  );
}

export default Avater;

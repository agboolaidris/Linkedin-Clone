import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../utilis/loading";

function Profileform() {
  const isLoading = useSelector((state) => state.Profile.isLoading);

  return (
    <>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="profile-form">
          <div className="user"></div>
          <div className="profile"></div>
        </div>
      )}
    </>
  );
}

export default Profileform;

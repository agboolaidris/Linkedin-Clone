import React from "react";
import { useSelector } from "react-redux";
import ProfileFormContainer from "../../containers/profileForm";
import Loading from "../../utilis/loading";

function Profileform() {
  const isLoading = useSelector((state) => state.Profile.isLoading);

  return (
    <>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="profile-form-wrapper">
          <div className="profile-form">
            <ProfileFormContainer />
          </div>
        </div>
      )}
    </>
  );
}

export default Profileform;

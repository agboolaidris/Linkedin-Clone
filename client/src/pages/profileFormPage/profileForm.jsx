import React from "react";
import { useSelector } from "react-redux";
import UserFormContainer from "../../containers/profileForm/userForm";
import Loading from "../../utilis/loading";

function Profileform() {
  const isLoading = useSelector((state) => state.Profile.isLoading);

  return (
    <>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="profile-form">
          <UserFormContainer />

          <div className="profile-user-form"></div>
        </div>
      )}
    </>
  );
}

export default Profileform;

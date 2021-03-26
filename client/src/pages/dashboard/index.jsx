import React from "react";
import { useSelector } from "react-redux";
import ProfileCardContainer from "../../containers/dashboard/profile-card";
import Loading from "../../utilis/loading";
function Dashboard() {
  const isLoading = useSelector((state) => state.Profile.isLoading);

  return (
    <>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="dashboard">
          <div className="profile">
            <ProfileCardContainer />
          </div>
          <div className="post"></div>
          <div className="users"></div>
        </div>
      )}
    </>
  );
}

export default Dashboard;

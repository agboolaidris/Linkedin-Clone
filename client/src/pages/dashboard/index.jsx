import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../utilis/loading";
import ProfileCard from "./profile-card/profileCard";

function Dashboard() {
  const isLoading = useSelector((state) => state.Profile.isLoading);

  return (
    <>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="dashboard">
          <div className="profile">
            <ProfileCard />
          </div>
          <div className="post"></div>
          <div className="users"></div>
        </div>
      )}
    </>
  );
}

export default Dashboard;

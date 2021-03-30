import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../utilis/loading";
import DashboardContainer from "../../containers/dashboard";

function Dashboard() {
  const isLoading = useSelector((state) => state.Profile.isLoading);

  return (
    <>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="dashboard">
          <DashboardContainer />
        </div>
      )}
    </>
  );
}

export default Dashboard;

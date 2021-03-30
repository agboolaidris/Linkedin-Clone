import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../utilis/loading";
import DashboardContainer from "../../containers/dashboard";
import { getUserProfile } from "../../redux/action/profile";
function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, []);
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

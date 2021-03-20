import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../utilis/loading";
import { getUserProfile } from "../../redux/action/profile";
function Dashboard() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.Profile.isLoading);
  console.log(isLoading);
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="dashboard">
          <div className="profile"></div>
          <div className="post"></div>
          <div className="users"></div>
        </div>
      )}
    </>
  );
}

export default Dashboard;

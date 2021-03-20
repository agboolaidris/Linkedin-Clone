import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/action/auth";
import { getUserProfile } from "../../redux/action/profile";
function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);
  return (
    <div className="dashboard">
      Dashboard <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default Dashboard;

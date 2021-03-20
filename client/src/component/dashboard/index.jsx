import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/action/auth";
function Dashboard() {
  const dispatch = useDispatch();
  return (
    <div>
      Dashboard <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default Dashboard;

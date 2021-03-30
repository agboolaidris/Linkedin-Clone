import React, { useEffect, useState } from "react";
import ProfileCard from "../components/dashboard/profileCard/profileCardComponent";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../redux/action/profile";
function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <>
      <ProfileCard />
    </>
  );
}

export default Dashboard;

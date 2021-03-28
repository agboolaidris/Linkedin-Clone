import React from "react";
import Dashboard from "../../pages/dashboard";
import ProfileForm from "../../pages/profileFormPage/profileForm";
import Route from "./index";

function Private() {
  return (
    <>
      <Route exact component={Dashboard} path="/dashboard" />
      <Route exact component={ProfileForm} path="/profile" />
    </>
  );
}

export default Private;

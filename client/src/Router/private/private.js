import React from "react";
import Dashboard from "../../component/dashboard";
import Route from "./index";

function Private() {
  return (
    <>
      <Route component={Dashboard} path="/dashboard" />
    </>
  );
}

export default Private;

import React from "react";
import Home from "../../component/layout/landingpage/home";
import Route from "./index";

function Public() {
  return <Route exact component={Home} path="/" />;
}

export default Public;

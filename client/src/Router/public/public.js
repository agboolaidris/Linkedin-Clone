import React from "react";
import Signin from "../../component/auth/signin/signin";
import Home from "../../component/layout/landingpage/home";
import Route from "./index";

function Public() {
  return (
    <>
      <Route exact component={Home} path="/" />
      <Route exact component={Signin} path="/signin" />
    </>
  );
}

export default Public;

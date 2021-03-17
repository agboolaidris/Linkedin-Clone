import React from "react";
import Signin from "../../component/auth/signin/signin";
import Signup from "../../component/auth/signup/signup";
import Home from "../../component/layout/landingpage/home";
import Route from "./index";

function Public() {
  return (
    <>
      <Route exact component={Home} path="/" />
      <Route exact component={Signin} path="/signin" />
      <Route exact component={Signup} path="/signup" />
    </>
  );
}

export default Public;

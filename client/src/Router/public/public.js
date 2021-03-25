import React from "react";
import Signin from "../../pages/signin/signin";
import Signup from "../../pages/signup/signup";
import Home from "../../pages/landingpage/home";
import Route from "./index";

function Public() {
  return (
    <>
      <Route exact component={Home} path="/" />
      <Route exact component={Signin} path="/signin" />
      {/* <Route exact component={Signup} path="/signup" />  */}
    </>
  );
}

export default Public;

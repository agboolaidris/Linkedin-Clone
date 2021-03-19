import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function Index({ component: Component, ...rest }) {
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} {...rest} />;
        } else {
          return <Redirect to={{ pathname: "/" }} />;
        }
      }}
    />
  );
}

export default Index;

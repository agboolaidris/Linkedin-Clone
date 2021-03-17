import React from "react";
import { Route, Redirect } from "react-router-dom";
function Index() {
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

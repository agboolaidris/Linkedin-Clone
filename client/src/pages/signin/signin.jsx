import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../utilis/loading";
import SigninContainer from "../../containers/signin";

function Signin() {
  const isLoading = useSelector((state) => state.Auth.isLoading);

  return (
    <>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="signin">
          <div className="div">
            <div>
              <h1>Sign in</h1>
              <p>Stay updated on your professional world</p>
            </div>
            <SigninContainer />
          </div>
          <div className="register-link">
            New to LinkediIn? <Link to="/signup">Join now</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Signin;

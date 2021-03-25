import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../utilis/loading";

function Signup() {
  const isLoading = useSelector((state) => state.Auth.isLoading);

  return (
    <>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="signup ">
          <h1>Make the most of your professional life</h1>

          <div className="signin-link">
            Already have an account? <Link to="/signin">Sign In</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Signup;

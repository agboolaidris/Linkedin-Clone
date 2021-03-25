import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/action/auth";
import Loading from "../../../utilis/loading";
function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Step1 from "./step1";
import Step2 from "./step2";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/action/auth";
import { toast } from "react-toastify";
import Loading from "../../../utilis/loading";
function Signup() {
  const [state, setstate] = useState({
    step: 1,
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector((state) => state.Auth.isLoading);

  const nextstep = () => {
    setstate({
      ...state,
      step: state.step + 1,
    });
  };

  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password.length < 6) {
      toast.warning("password most be greater than 6 characters");
    } else if (state.password !== state.password2) {
      toast.warning("password does not match");
    } else {
      dispatch(register(state, history));
    }
  };

  return (
    <div className="signup container">
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <>
          <h1>Make the most of your professional life</h1>
          <form className="form" onSubmit={handleSubmit}>
            {state.step === 1 ? (
              <Step1
                nextstep={nextstep}
                handleChange={handleChange}
                setstate={setstate}
                state={state}
              />
            ) : (
              <Step2
                nextstep={nextstep}
                handleChange={handleChange}
                setstate={setstate}
                state={state}
              />
            )}
          </form>
          <div className="signin-link">
            Already have an account? <Link to="/signin">Sign In</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Signup;

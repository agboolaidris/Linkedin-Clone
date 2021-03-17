import React, { useState } from "react";
import { Link } from "react-router-dom";
import Step1 from "./step1";
import Step2 from "./step2";
function Signup() {
  const [state, setstate] = useState({
    step: 1,
    username: "",
    email: "",
    password: "",
    password2: "",
  });

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
  return (
    <div className="signup container">
      <h1>Make the most of your professional life</h1>
      <form className="form">
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
    </div>
  );
}

export default Signup;

import React, { useState } from "react";
import SignupComponent from "../components/signup/signup-component";
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

  return <SignupComponent />;
}

export default Signup;

import React, { useState } from "react";
import SignupComponent from "../components/signup/signup-component";
import { step1Validator } from "../helpers/validator/signup-validator";

function Signup() {
  const [state, setstate] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [step, setstep] = useState(1);

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const handleStep1Logic = (e) => {
    e.preventDefault();
    if (step1Validator(state.email, state.username)) {
      nextStep();
    }
  };

  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleStep2Logic = (e) => {
    e.preventDefault();
  };

  return (
    <SignupComponent
      handleChange={handleChange}
      handleStep2Logic={handleStep2Logic}
      handleStep1Logic={handleStep1Logic}
      prevStep={prevStep}
      step={step}
      state={state}
    />
  );
}

export default Signup;

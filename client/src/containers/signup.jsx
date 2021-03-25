import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { register } from "../redux/action/auth";
import SignupComponent from "../components/signup/signup-component";
import {
  step1Validator,
  step2Validator,
} from "../helpers/validator/signup-validator";

function Signup() {
  const [state, setstate] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [step, setstep] = useState(1);

  const dispatch = useDispatch();
  const history = useHistory();

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleStep1Logic = (e) => {
    e.preventDefault();
    if (step1Validator(state.email, state.username)) {
      nextStep();
    }
  };

  const handleStep2Logic = (e) => {
    e.preventDefault();
    if (step2Validator(state.password, state.password2)) {
      console.log(state);
      dispatch(register(state, history));
    }
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

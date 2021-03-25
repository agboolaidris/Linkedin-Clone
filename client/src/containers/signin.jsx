import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { login } from "../redux/action/auth";
import SignComponent from "../components/signin/signin-component";

function Signin() {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setstate({ ...state, [e.target.id]: e.target.value });
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(state, history));
  };

  return (
    <SignComponent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      state={state}
    />
  );
}

export default Signin;

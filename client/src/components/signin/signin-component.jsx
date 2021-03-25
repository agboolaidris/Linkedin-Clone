import React from "react";
import { Link } from "react-router-dom";
import InputFieldGroup from "../commons/inputFieldGroup/inputFieldGroup";

function sign({ handleChange, state, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="signin-form">
      <InputFieldGroup
        label="Email"
        placeholder="Email address"
        value={state.email}
        onChange={handleChange}
        required={true}
        autoComplete={true}
        type="email"
        id="email"
      />

      <InputFieldGroup
        placeholder="enter password"
        value={state.password}
        label="Password"
        onChange={handleChange}
        autoComplete={true}
        required={true}
        id="password"
        type="password"
      />

      <Link to="/signin">Forget Password?</Link>

      <button>Sign in</button>
    </form>
  );
}

export default sign;

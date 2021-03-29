import React from "react";
import { Link } from "react-router-dom";
import ButtonGroup from "../commons/buttonGroup";
import InputFieldGroup from "../commons/inputFieldGroup";

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

      <ButtonGroup type="submit" name="Sign in" className="submit-btn" />
    </form>
  );
}

export default sign;

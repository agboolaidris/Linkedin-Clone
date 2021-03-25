import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import TextFieldGroup from "../commons/inputFieldGroup/inputFieldGroup";

function Step2({ handleChange, state, handleStep2Logic, prevStep }) {
  return (
    <form onSubmit={handleStep2Logic}>
      <button type="button" onClick={prevStep}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </button>

      <TextFieldGroup
        label="Password"
        type="password"
        required={true}
        placeholder="enter password"
        value={state.password}
        id="password"
        onChange={handleChange}
      />

      <TextFieldGroup
        label="Confirm Password"
        required={true}
        placeholder="confirm password"
        value={state.password2}
        id="password2"
        type="password"
        onChange={handleChange}
      />

      <p>
        By clicking Agree & Join, you agree to the LinkedIn User Agreement,
        Privacy Policy, and Cookie Policy.
      </p>

      <button type="submit">Agree and Join</button>
    </form>
  );
}

export default Step2;

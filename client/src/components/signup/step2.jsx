import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import TextFieldGroup from "../commons/inputFieldGroup";
import ButtonGroup from "../commons/buttonGroup/buttonGroup";

function Step2({ handleChange, state, handleStep2Logic, prevStep }) {
  return (
    <form onSubmit={handleStep2Logic}>
      <ButtonGroup name="Back" type="button" onClick={prevStep}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </ButtonGroup>

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

      <ButtonGroup type="submit" name="Agree and Join" />
    </form>
  );
}

export default Step2;

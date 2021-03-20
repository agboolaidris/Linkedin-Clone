import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import TextFieldGroup from "../../../common/testFieldGroup/testFieldGroup";
function Step2({ setstate, handleChange, nextstep, state }) {
  const prevstep = () => {
    setstate({ ...state, step: state.step - 1 });
  };
  return (
    <>
      <button onClick={prevstep} className="back-btn">
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

      <button className="submit-btn">Agree and Join</button>
    </>
  );
}

export default Step2;

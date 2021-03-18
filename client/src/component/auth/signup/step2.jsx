import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
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
      <div className="input">
        <label htmlFor="">password</label>
        <input
          type="password"
          required
          placeholder="password most be greater than six characters"
          onChange={handleChange}
          value={state.password}
          id="password"
        />
      </div>
      <div className="input">
        <label htmlFor="">confirm password</label>
        <input
          type="password"
          required
          placeholder="confirm password"
          onChange={handleChange}
          value={state.password2}
          id="password2"
        />
      </div>

      <p>
        By clicking Agree & Join, you agree to the LinkedIn User Agreement,
        Privacy Policy, and Cookie Policy.
      </p>

      <button className="submit-btn">Agree and Join</button>
    </>
  );
}

export default Step2;

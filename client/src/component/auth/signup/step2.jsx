import React from "react";

function Step2({ setstate, handleChange, nextstep, state }) {
  const handleClick = () => {
    setstate({ ...state, step: state.step - 1 });
  };
  return (
    <>
      <button onClick={handleClick} className="back-btn">
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

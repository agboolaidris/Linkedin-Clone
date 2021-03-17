import React from "react";

function Step1({ setstate, handleChange, nextstep, state }) {
  const handleClick = () => {
    console.log(state);
  };
  return (
    <>
      <div className="input">
        <label htmlFor="">Email</label>
        <input
          type="email"
          required
          placeholder="email most be valid"
          onChange={handleChange}
          value={state.email}
          id="email"
        />
      </div>
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

      <p>
        By clicking Agree & Join, you agree to the LinkedIn User Agreement,
        Privacy Policy, and Cookie Policy.
      </p>

      <button onClick={handleClick}>Agree and Join</button>
    </>
  );
}

export default Step1;

import React from "react";

function Step1() {
  return (
    <>
      <div className="input">
        <label htmlFor="">Email</label>
        <input type="email" required placeholder="email most be valid" />
      </div>
      <div className="input">
        <label htmlFor="">password</label>
        <input
          type="password"
          required
          placeholder="password most be greater than six characters"
        />
      </div>

      <p>
        By clicking Agree & Join, you agree to the LinkedIn User Agreement,
        Privacy Policy, and Cookie Policy.
      </p>

      <button>Agree and Join</button>
    </>
  );
}

export default Step1;

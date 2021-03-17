import React from "react";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="signup container">
      <h1>Make the most of your professional life</h1>
      <form action="">
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
      </form>
      <div className="signin-link">
        Already have an account? <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
}

export default Signup;

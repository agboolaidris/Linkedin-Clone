import React from "react";
import { Link } from "react-router-dom";
function Signin() {
  return (
    <div className="signin container">
      <form action="">
        <div className="form-content">
          <h1>Sign in</h1>
          <p>Stay updated on your professional world</p>
        </div>
        <div className="input">
          <label htmlFor="">Email</label>
          <input type="email" required />
        </div>
        <div className="input">
          <label htmlFor="">password</label>
          <input type="password" required />
        </div>

        <Link>Forget Password?</Link>

        <button>Sign in</button>
      </form>
      <div className="register-link">
        New to LinkediIn? <Link to="/register">Join now</Link>
      </div>
    </div>
  );
}

export default Signin;

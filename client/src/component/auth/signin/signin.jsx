import React from "react";
import { Link } from "react-router-dom";
function Signin() {
  return (
    <div>
      <form action="">
        <div>
          <h2>Sign in</h2>
          <p>Stay updated on your professional world</p>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" required />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input type="password" required />
        </div>
        <div>
          <Link>Forget Password?</Link>
        </div>
        <div>
          <button>Sign in</button>
        </div>
      </form>
      <div>
        New to LinkediIn? <Link to="/register">Join now</Link>
      </div>
    </div>
  );
}

export default Signin;

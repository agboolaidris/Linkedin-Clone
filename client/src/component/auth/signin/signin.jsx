import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, register } from "../../../redux/action/auth";
function Signin() {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setstate({ ...state, [e.target.id]: e.target.value });
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(state, history));
  };

  return (
    <div className="signin container">
      <form onSubmit={handleSubmit}>
        <div className="form-content">
          <h1>Sign in</h1>
          <p>Stay updated on your professional world</p>
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            autoComplete="true"
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
            autoComplete="true"
            onChange={handleChange}
            value={state.password}
            id="password"
          />
        </div>

        <Link>Forget Password?</Link>

        <button>Sign in</button>
      </form>
      <div className="register-link">
        New to LinkediIn? <Link to="/signup">Join now</Link>
      </div>
    </div>
  );
}

export default Signin;

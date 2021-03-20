import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/action/auth";
import Loading from "../../../utilis/loading";
import TextFieldGroup from "../../../common/testFieldGroup/testFieldGroup";

function Signin() {
  const isLoading = useSelector((state) => state.Auth.isLoading);
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
    <div className="signin">
      <form onSubmit={handleSubmit}>
        <div className="form-content">
          <h1>Sign in</h1>
          <p>Stay updated on your professional world</p>
        </div>

        <TextFieldGroup
          label="Email"
          placeholder="Email address"
          value={state.email}
          onChange={handleChange}
          required={true}
          autoComplete={true}
          type="email"
          id="email"
        />

        <TextFieldGroup
          placeholder="enter password"
          value={state.password}
          label="Password"
          onChange={handleChange}
          autoComplete={true}
          required={true}
          id="password"
          type="password"
        />

        <Link to="/signin">Forget Password?</Link>

        <button>Sign in</button>
      </form>
      <div className="register-link">
        New to LinkediIn? <Link to="/signup">Join now</Link>
      </div>
      <Loading isLoading={isLoading} />
    </div>
  );
}

export default Signin;

import React from "react";
import { toast } from "react-toastify";
function Step1({ setstate, handleChange, nextstep, state }) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleClick = () => {
    if (!state.email) {
      toast.warning("the email is required");
    } else if (!/\S/.test(state.username)) {
      toast.warning("the username is required");
    } else if (!re.test(String(state.email).toLowerCase())) {
      toast.warning("the email is not valid");
    } else if (state.username.length < 6) {
      toast.warning("the username must be greater than 5 characters");
    } else {
      nextstep();
    }
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
        <label htmlFor="">username</label>
        <input
          type="text"
          required
          placeholder="username most be unique"
          onChange={handleChange}
          value={state.username}
          id="username"
        />
      </div>

      <button onClick={handleClick} type="button" className="submit-btn">
        Join Professionals
      </button>
    </>
  );
}

export default Step1;

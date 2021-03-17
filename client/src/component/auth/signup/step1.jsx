import React from "react";

function Step1({ setstate, handleChange, nextstep, state }) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleClick = () => {
    if (
      !state.email ||
      !state.username ||
      !re.test(String(state.email).toLowerCase()) ||
      state.username.length < 6
    ) {
      alert("the field is required");
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

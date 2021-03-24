import React, { useState } from "react";

function Signup() {
  const [state, setstate] = useState({
    step: 1,
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const nextstep = () => {
    setstate({
      ...state,
      step: state.step + 1,
    });
  };

  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password.length < 6) {
      toast.warning("password most be greater than 6 characters");
    } else if (state.password !== state.password2) {
      toast.warning("password does not match");
    } else {
      dispatch(register(state, history));
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {state.step === 1 ? (
        <Step1
          nextstep={nextstep}
          handleChange={handleChange}
          setstate={setstate}
          state={state}
        />
      ) : (
        <Step2
          nextstep={nextstep}
          handleChange={handleChange}
          setstate={setstate}
          state={state}
        />
      )}
    </form>
  );
}

export default Signup;

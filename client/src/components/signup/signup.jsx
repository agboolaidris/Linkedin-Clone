import React from "react";

function Signup() {
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

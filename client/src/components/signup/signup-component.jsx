import React from "react";
import Step1 from "./step1";
import Step2 from "./step2";

//Multi-step level format
function Signup({
  handleChange,
  state,
  step,
  handleStep1Logic,
  handleStep2Logic,
  prevStep,
}) {
  return (
    <div>
      {step === 1 ? (
        <Step1
          handleChange={handleChange}
          state={state}
          handleStep1Logic={handleStep1Logic}
        />
      ) : (
        <Step2
          handleChange={handleChange}
          prevStep={prevStep}
          handleStep2Logic={handleStep2Logic}
          state={state}
        />
      )}
    </div>
  );
}

export default Signup;

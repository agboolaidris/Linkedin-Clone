import React from "react";
import { toast } from "react-toastify";
import TextFieldGroup from "../../../common/testFieldGroup/testFieldGroup";
function Step1({ setstate, handleChange, nextstep, state }) {
  const handleClick = () => {};
  return (
    <>
      <TextFieldGroup
        label="Email"
        required={true}
        placeholder="Email most be valid"
        onChange={handleChange}
        value={state.email}
        id="email"
      />
      <TextFieldGroup
        label="Username"
        required={true}
        placeholder="username most be unique"
        onChange={handleChange}
        value={state.username}
        id="username"
      />

      <button onClick={handleClick} type="button" className="submit-btn">
        Join Professionals
      </button>
    </>
  );
}

export default Step1;

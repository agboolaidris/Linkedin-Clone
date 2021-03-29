import React from "react";
import ButtonGroup from "../commons/buttonGroup";
import TextFieldGroup from "../commons/inputFieldGroup";

function Step1({ handleChange, state, handleStep1Logic }) {
  return (
    <form onSubmit={handleStep1Logic}>
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

      <ButtonGroup type="submit" name="Join Professionals" />
    </form>
  );
}

export default Step1;

import React from "react";
import ButtonGroup from "../../commons/buttonGroup/buttonGroup";
import TextFieldGroup from "../../commons/inputFieldGroup";
import Avater from "./avater/avater";

function UserForm() {
  return (
    <form className="user-form">
      <div className="background"></div>
      <div className="img-wrapper">
        <div className="imgbox">
          <Avater />
        </div>
      </div>
      <div className="user-input-wrapper">
        <TextFieldGroup label="username" />
        <TextFieldGroup label="Email" />
      </div>
      <ButtonGroup type="submit" name="Save" width="50px" />
    </form>
  );
}

export default UserForm;

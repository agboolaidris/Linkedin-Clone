import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ButtonGroup from "../commons/buttonGroup";
import TextFieldGroup from "../commons/inputFieldGroup";
import Avater from "./avater/avater";

function ProfileForm({ state, handleChange, handleSubmit }) {
  console.log(state);
  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="background"></div>
      <div className="img-wrapper">
        <div className="imgbox">
          <Avater value={state.avater} handleChange={handleChange} />
        </div>
      </div>
      <div className="user-input-wrapper">
        <TextFieldGroup
          label="username"
          value={state.username}
          onChange={handleChange}
          id="username"
        />
        <TextFieldGroup
          label="Email"
          value={state.email}
          onChange={handleChange}
          id="email"
        />
      </div>

      <div className="profile-user-form">
        <div className="profile-title">
          Add other Credentails <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="profile-input-wrapper">
          <TextFieldGroup />
          <TextFieldGroup />
          <TextFieldGroup className="full" />
        </div>
      </div>

      <ButtonGroup
        type="submit"
        name="Save"
        width="200px"
        className="save-btn"
      />
    </form>
  );
}

export default ProfileForm;

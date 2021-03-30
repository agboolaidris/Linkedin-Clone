import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import ButtonGroup from "../commons/buttonGroup";
import TextFieldGroup from "../commons/inputFieldGroup";
import Avater from "./avater/avater";

function ProfileForm({ state, handleChange, handleSubmit }) {
  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="back-link">
        <Link to="/dashboard">
          <FontAwesomeIcon icon={faTimes} />
        </Link>
      </div>
      <div className className="form-context">
        <div className="background"></div>
        <div className="img-wrapper">
          <div className="imgbox">
            <Avater value={state.avater} handleChange={handleChange} />
          </div>
        </div>
        <div className="input-wrapper">
          <div className="grid">
            <TextFieldGroup
              label="username"
              value={state.username}
              onChange={handleChange}
            />
            <TextFieldGroup
              label="Email"
              value={state.email}
              onChange={handleChange}
            />
          </div>

          <div className="profile-title">
            Add other Credentails <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className="grid">
            <TextFieldGroup />
            <TextFieldGroup />
          </div>
          <TextFieldGroup />
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

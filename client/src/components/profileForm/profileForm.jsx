import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import ButtonGroup from "../commons/buttonGroup";
import TextFieldGroup from "../commons/inputFieldGroup";
import Avater from "./avater/avater";
import TextAreaGroup from "../commons/textAreaGroup";
import SelectListGroup from "../commons/selectListGroup";

function ProfileForm({ state, handleChange, handleSubmit, listOption }) {
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
            <TextFieldGroup
              label="handle"
              value={state.handle}
              placeholder="handle most be unique"
              id="handle"
              onChange={handleChange}
            />
            <SelectListGroup
              onChange={handleChange}
              value={state.status}
              option={listOption}
            />
          </div>
          <TextAreaGroup
            label="bio"
            id="bio"
            placeholder="summary about your profession"
            height="100px"
          />

          <div className="grid">
            <TextFieldGroup
              label="Company"
              value={state.company}
              placeholder="enter your comapny name"
              id="company"
              onChange={handleChange}
            />
            <TextFieldGroup
              label="website"
              id="website"
              placeholder="enter website Url"
              onChange={handleChange}
            />
          </div>
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

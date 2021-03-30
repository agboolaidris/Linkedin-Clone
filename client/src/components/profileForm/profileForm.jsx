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
            <Avater value={state.avater} onChange={handleChange} />
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
              id="status"
            />
          </div>
          <TextAreaGroup
            label="bio"
            id="bio"
            placeholder="summary about your profession"
            height="100px"
            onChange={handleChange}
            value={state.bio}
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
              value={state.website}
              onChange={handleChange}
            />
          </div>

          <div className="grid">
            <TextFieldGroup
              label="Skills"
              value={state.skills}
              placeholder="Enter your skills"
              id="skills"
              onChange={handleChange}
            />
            <TextFieldGroup
              label="Github Url"
              id="github"
              value={state.github}
              placeholder="enter github Url link"
              onChange={handleChange}
            />
          </div>

          <div className="grid">
            <TextFieldGroup
              label="facebook Url"
              value={state.facebook}
              placeholder="Enter facebook Url link"
              id="facebook"
              onChange={handleChange}
            />
            <TextFieldGroup
              label="twiter Url"
              id="twiter"
              value={state.twiter}
              placeholder="enter twiter Url link"
              onChange={handleChange}
            />
          </div>
          <div className="grid">
            <TextFieldGroup
              label="Instagram Url"
              value={state.instagram}
              placeholder="Enter instagram Url link"
              id="instagram"
              onChange={handleChange}
            />
            <TextFieldGroup
              label="linkedin Url"
              id="linkedin"
              value={state.linkedin}
              placeholder="enter linkedin Url link"
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

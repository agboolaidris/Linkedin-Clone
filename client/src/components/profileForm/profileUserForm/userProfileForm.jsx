import React from "react";
import TextFieldGroup from "../../commons/inputFieldGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ButtonGroup from "../../commons/buttonGroup";
function UserProfileForm() {
  return (
    <form className="profile-user-form">
      <div className="profile-title">
        Add other Credentails <FontAwesomeIcon icon={faPlus} />
      </div>
      <div className="profile-input-wrapper">
        <TextFieldGroup />
        <TextFieldGroup />
        <TextFieldGroup className="full" />
      </div>

      <ButtonGroup className="save-btn" name="Save" type="submit" />
    </form>
  );
}

export default UserProfileForm;

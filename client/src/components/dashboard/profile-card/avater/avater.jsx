import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUpload } from "@fortawesome/free-solid-svg-icons";
import Imgbox from "../../../commons/img-box/imgbox";
function Avater({ profile }) {
  return (
    <div className="avater">
      <Imgbox
        height="150px"
        height="150px"
        img={profile?.avater}
        imgSize="70px"
        className="img-box"
      />
      <div className="input-box">
        <label htmlFor="file">
          <FontAwesomeIcon icon={faUpload} />
        </label>
        <input type="file" id="file" />
      </div>
    </div>
  );
}

export default Avater;

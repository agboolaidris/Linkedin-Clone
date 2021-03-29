import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import Imgbox from "../../commons/imgbox";
function Avater({ value, handleChange }) {
  return (
    <div className="avater">
      <Imgbox
        height="150px"
        height="150px"
        img={value}
        imgSize="70px"
        className="img-box"
      />
      <div className="input-box">
        <label htmlFor="avater">
          <FontAwesomeIcon icon={faUpload} />
        </label>
        <input type="file" id="avater" value={value} onChange={handleChange} />
      </div>
    </div>
  );
}

export default Avater;

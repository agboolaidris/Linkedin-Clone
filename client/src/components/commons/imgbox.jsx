import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
function Imgbox({ className, width, height, img, imgSize }) {
  
  const imgBox = {
    width: width ? width : "100%",
    height: height ? height : "100%",
    borderRadius: "50%",
  };
  const span = {
    fontSize: imgSize,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  };

  return (
    <div className={className} style={imgBox}>
      {img ? (
        <img src={img} alt="user" />
      ) : (
        <span style={span}>
          <FontAwesomeIcon icon={faUser} />
        </span>
      )}
    </div>
  );
}

export default Imgbox;

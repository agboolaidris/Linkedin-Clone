import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Navbar() {
  const harmburger = false;
  return (
    <header className="container">
      <nav>
        <div className="harmburger">
          {harmburger ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </div>
        <div className="logo">
          <span>Linked</span> <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

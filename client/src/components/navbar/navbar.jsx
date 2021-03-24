import React from "react";

function Navbar() {
  return (
    <header className={isAuthenticated ? "header" : ""}>
      <nav className="nav">
        <div className="harmburger" onClick={handleHarmbuger}>
          {harmburger ? (
            <FontAwesomeIcon icon={faTimes} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </div>
        <div className="logo">
          <span>Linked</span>
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <ul className={harmburger ? "menu menu-mobile " : " menu"}>
          {!isAuthenticated ? (
            <Guest setharmburger={setharmburger} />
          ) : (
            <Client setharmburger={setharmburger} />
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

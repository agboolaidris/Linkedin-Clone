import React, { useState } from "react";
import { useSelector } from "react-redux";
import NavComponent from "../components/navbar/navbar";

function Navbar() {
  const [harmburger, setharmburger] = useState(false);
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);

  const handleHarmbuger = () => {
    if (harmburger) {
      setharmburger(false);
    } else {
      setharmburger(true);
    }
  };

  return (
    <NavComponent
      handleHarmbuger={handleHarmbuger}
      harmburger={harmburger}
      isAuthenticated={isAuthenticated}
    />
  );
}

export default Navbar;

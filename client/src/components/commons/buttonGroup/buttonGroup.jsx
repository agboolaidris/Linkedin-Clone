import React from "react";

function ButtonGroup({ name, type, onClick, children }) {
  return (
    <button type={type} onClick={onClick}>
      {children}
      {name}
    </button>
  );
}

export default ButtonGroup;

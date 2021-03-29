import React from "react";

function ButtonGroup({ name, type, onClick, children, className }) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
      {name}
    </button>
  );
}

export default ButtonGroup;

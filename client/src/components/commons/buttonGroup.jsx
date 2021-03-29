import React from "react";

function ButtonGroup({ name, type, onClick, children, width, className }) {
  const submit = {
    marginTop: "1em",
    display: "block",
    width: width ? width : "100%",
    padding: "0.8em",
    borderRadius: "30px",
    border: "none",
    outline: "none",
    fontSize: "1.3em",
    backgroundColor: "#112d4e",
    color: "#f9f7f7",
    transition: "all 0.3s ease-out",
  };

  const button = {
    border: "none",
    outline: "none",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      style={type == "button" ? button : submit}
      className={className}
    >
      {children}
      {name}
    </button>
  );
}

export default ButtonGroup;

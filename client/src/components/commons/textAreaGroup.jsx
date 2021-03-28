import React from "react";
import PropTypes from "prop-types";
function TextAreaGroup({
  required,
  value,
  onChange,
  id,
  placeholder,
  label,
  className,
  width,
}) {
  const div = {
    margin: "0.6em auto",
    width: width ? width : "100%",
    border: "1px solid hsl(213, 47%, 47%)",
    borderRadius: "5px",
    padding: "0.2em",
  };

  const input = {
    padding: "0.3em 0",
    display: "block",
    width: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: "15px",
  };

  const labels = {
    fontWeight: "bolder",
  };
  return (
    <div className={className} style={div}>
      <label htmlFor="email" style={labels}>
        {label}
      </label>
      <textarea
        style={input}
        required={required}
        onChange={onChange}
        value={value}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

TextAreaGroup.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default TextAreaGroup;

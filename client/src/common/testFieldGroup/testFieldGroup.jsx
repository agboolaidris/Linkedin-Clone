import React from "react";
import PropTypes from "prop-types";
function TextFieldGroup({
  required,
  type,
  value,
  autoComplete,
  onChange,
  id,
  placeholder,
  label,
}) {
  return (
    <div className="input">
      <label htmlFor="email">{label}</label>
      <input
        type={type}
        required={required}
        autoComplete={autoComplete.toString()}
        onChange={onChange}
        value={value}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

TextFieldGroup.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.bool,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

TextFieldGroup.defaultProps = {
  type: "text",
};

export default TextFieldGroup;

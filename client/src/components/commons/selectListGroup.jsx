import React from "react";
import PropTypes from "prop-types";
function SelectListGroup({
  required,
  value,
  onChange,
  id,
  option,
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
      <select
        style={input}
        required={required}
        onChange={onChange}
        value={value}
        id={id}
      >
        {option?.map((opt) => {
          return (
            <option key={opt.label} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

SelectListGroup.propTypes = {
  option: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
};

export default SelectListGroup;

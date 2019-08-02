import React from "react";
import PropTypes from "prop-types";
import "./TextBox.scss";

const TextBox = ({
  className = "",
  id,
  name,
  onChange,
  onFocus,
  onBlur,
  style = {},
  value,
  type,
  placeholder
}) => {
  return (
    <input
      className={`TextBox ${className}`}
      id={id}
      name={name}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      style={style}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
};

TextBox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

export default TextBox;

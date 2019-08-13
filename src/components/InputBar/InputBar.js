import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./InputBar.scss";

const InputBar = ({
  className = "",
  id,
  name,
  onChange,
  onFocus = () => {},
  onBlur = () => {},
  style = {},
  value,
  type,
  placeholder,
  leftAttachments = [],
  rightAttachments = []
}) => {
  const [hasFocus, setHasFocus] = useState(false);
  const _classNames = classNames({
    InputBar: true,
    "has-focus": hasFocus
  });
  const handleFocus = e => {
    setHasFocus(true);
    onFocus(e);
  };
  const handleBlur = e => {
    setHasFocus(false);
    onBlur(e);
  };

  return (
    <div className={`${_classNames} ${className}`} style={style}>
      <div className="InputBar__attachments">{leftAttachments}</div>
      <input
        className="InputBar_input"
        id={id}
        name={name}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        type={type}
        placeholder={placeholder}
      />
      <div className="InputBar__attachments">{rightAttachments}</div>
    </div>
  );
};

InputBar.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  leftAttachments: PropTypes.arrayOf(PropTypes.node),
  rightAttachments: PropTypes.arrayOf(PropTypes.node)
};

export default InputBar;

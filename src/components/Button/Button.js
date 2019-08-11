import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.scss";

/** Triggers an action on when pressed */
const Button = ({ children, className, onClick, icon, isUnstyled }) => {
  const _className = classNames({
    Button: true,
    "is-icon": icon,
    "is-unstyled": isUnstyled,
    [`${className}`]: true
  });
  return (
    <button className={_className} onClick={onClick}>
      {icon || children}
    </button>
  );
};

Button.defaultProps = {
  className: "",
  isUnstyled: false
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  isUnstyled: PropTypes.bool
};

export default Button;

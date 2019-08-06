import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Text.scss";

const Text = ({
  children,
  className = "",
  style = {},
  isSubdued = false,
  isStrong = false
}) => {
  const _classNames = classNames({
    Text: true,
    "is-subdued": isSubdued,
    "is-strong": isStrong
  });
  return (
    <span className={`${_classNames} ${className}`} style={style}>
      {children}
    </span>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  isSubdued: PropTypes.bool,
  isStrong: PropTypes.bool
};

export default Text;

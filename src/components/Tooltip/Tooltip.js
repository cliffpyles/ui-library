import React from "react";
import PropTypes from "prop-types";
import "./Tooltip.scss";

const Tooltip = ({ children, className = "", style = {}, toggle }) => {
  return (
    <div className={`Tooltip ${className}`} style={style}>
      <div className="Tooltip__toggle">{toggle}</div>
      <div className="Tooltip__main">{children}</div>
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  toggle: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Tooltip;

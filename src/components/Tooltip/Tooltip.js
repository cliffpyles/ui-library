import React from "react";
import PropTypes from "prop-types";
import "./Tooltip.scss";

const Tooltip = ({ children, className = "", onClick, style = {}, toggle }) => {
  return (
    <div className={`Tooltip ${className}`} onClick={onClick} style={style}>
      <div className="Tooltip__toggle">{toggle}</div>
      <div className="Tooltip__main">{children}</div>
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  toggle: PropTypes.node
};

export default Tooltip;

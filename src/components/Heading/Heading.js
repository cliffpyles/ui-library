import React from "react";
import PropTypes from "prop-types";
import "./Heading.scss";

const Heading = ({ children, className = "", element = "h2", style = {} }) => {
  const Element = element;
  return (
    <Element className={`Heading is-${element} ${className}`} style={style}>
      {children}
    </Element>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  element: PropTypes.string
};

export default Heading;

import React from "react";
import PropTypes from "prop-types";
import "./Bullseye.scss";

const defaultStyle = {
  root: null,
  main: null
};
const Bullseye = ({ children, className = "", style = defaultStyle }) => {
  return (
    <div className={`Bullseye ${className}`} style={style.root}>
      <div className="Bullseye__main" style={style.main}>
        {children}
      </div>
    </div>
  );
};

Bullseye.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Bullseye;

import React from "react";
import PropTypes from "prop-types";
import "./Classic.scss";

const Classic = ({ children, className = "", style = {} }) => {
  return (
    <div className={`Classic ${className}`} style={style}>
      {children}
    </div>
  );
};

Classic.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export const ClassicHeader = ({ children, className = "", style = {} }) => {
  return (
    <div className={`Classic__header ${className}`} style={style}>
      {children}
    </div>
  );
};

ClassicHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export const ClassicFooter = ({ children, className = "", style = {} }) => {
  return (
    <div className={`Classic__footer ${className}`} style={style}>
      {children}
    </div>
  );
};

ClassicFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export const ClassicPrimary = ({ children, className = "", style = {} }) => {
  return (
    <div className={`Classic__primary ${className}`} style={style}>
      {children}
    </div>
  );
};

ClassicPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export const ClassicSecondary = ({ children, className = "", style = {} }) => {
  return (
    <div className={`Classic__secondary ${className}`} style={style}>
      {children}
    </div>
  );
};

ClassicSecondary.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Classic;

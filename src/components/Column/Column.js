import React from "react";
import PropTypes from "prop-types";
import "./Column.scss";

const Column = ({ children, className = "", style = {} }) => {
  return (
    <div className={`Column ${className}`} style={style}>
      {children}
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export const ColumnHeader = ({ children, className = "", style = {} }) => {
  return (
    <div className={`Column__header ${className}`} style={style}>
      {children}
    </div>
  );
};

ColumnHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export const ColumnMain = ({ children, className = "", style = {} }) => {
  return (
    <div className={`Column__main ${className}`} style={style}>
      {children}
    </div>
  );
};

ColumnMain.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export const ColumnFooter = ({ children, className = "", style = {} }) => {
  return (
    <div className={`Column__footer ${className}`} style={style}>
      {children}
    </div>
  );
};

ColumnFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Column;

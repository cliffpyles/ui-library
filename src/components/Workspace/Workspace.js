import React from "react";
import PropTypes from "prop-types";
import "./Workspace.scss";

const Workspace = ({ children, className = "", style = {} }) => {
  return (
    <div className={`Workspace ${className}`} style={style}>
      {children}
    </div>
  );
};

Workspace.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export const WorkspaceHeader = ({ children, className = "", style = {} }) => {
  return (
    <div className={`Workspace__header ${className}`} style={style}>
      {children}
    </div>
  );
};

WorkspaceHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export const WorkspaceToolbar = ({ children, className = "", style = {} }) => {
  return (
    <div className={`Workspace__toolbar ${className}`} style={style}>
      {children}
    </div>
  );
};

WorkspaceToolbar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export const WorkspaceMain = ({ children, className = "", style = {} }) => {
  return (
    <div className={`Workspace__main ${className}`} style={style}>
      {children}
    </div>
  );
};

WorkspaceMain.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export const WorkspaceDetails = ({ children, className = "", style = {} }) => {
  return (
    <div className={`Workspace__details ${className}`} style={style}>
      {children}
    </div>
  );
};

WorkspaceDetails.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export const WorkspaceContext = ({ children, className = "", style = {} }) => {
  return (
    <div className={`Workspace__context ${className}`} style={style}>
      {children}
    </div>
  );
};

WorkspaceContext.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export const WorkspaceFooter = ({ children, className = "", style = {} }) => {
  return (
    <div className={`Workspace__footer ${className}`} style={style}>
      {children}
    </div>
  );
};

WorkspaceFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Workspace;

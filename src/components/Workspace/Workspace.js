import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Workspace.scss";

const Workspace = ({
  children,
  className = "",
  style = {},
  isFullScreen = false
}) => {
  const _classNames = classNames({
    Workspace: true,
    "is-full-screen": isFullScreen
  });
  return (
    <div className={`${_classNames} ${className}`} style={style}>
      {children}
    </div>
  );
};

Workspace.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  isFullScreen: PropTypes.bool
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

export const WorkspaceDrawer = ({ children, className = "", style = {} }) => {
  return (
    <div className={`Workspace__drawer ${className}`} style={style}>
      {children}
    </div>
  );
};

WorkspaceDrawer.propTypes = {
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

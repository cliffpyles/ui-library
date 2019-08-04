import React from "react";
import PropTypes from "prop-types";
import Workspace, {
  WorkspaceContext,
  WorkspaceDetails,
  WorkspaceFooter,
  WorkspaceHeader,
  WorkspaceMain,
  WorkspaceToolbar
} from "../../components/Workspace";
import "./Chat.scss";

const Chat = ({ children, className = "", style = {} }) => {
  return (
    <div className={`Chat ${className}`} style={style}>
      <Workspace>
        <WorkspaceHeader>placeholder</WorkspaceHeader>
        <WorkspaceToolbar>placeholder</WorkspaceToolbar>
        <WorkspaceContext>placeholder</WorkspaceContext>
        <WorkspaceMain>placeholder</WorkspaceMain>
        <WorkspaceFooter>placeholder</WorkspaceFooter>
        <WorkspaceDetails>placeholder</WorkspaceDetails>
      </Workspace>
    </div>
  );
};

Chat.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Chat;

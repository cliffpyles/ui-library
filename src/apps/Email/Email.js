import React from "react";
import PropTypes from "prop-types";
import { IoIosAttach, IoIosAt, IoIosHappy, IoIosAdd } from "react-icons/io";
import Workspace, {
  WorkspaceContext,
  WorkspaceFooter,
  WorkspaceHeader,
  WorkspaceMain,
  WorkspaceToolbar
} from "../../components/Workspace";
import Heading from "../../components/Heading";
import Comment from "../../components/Comment";
import Menu from "../../components/Menu";
import InputBar from "../../components/InputBar";
import "./Email.scss";

const Email = ({
  className = "",
  style = {},
  heading,
  folders = [],
  emails = [],
  labels = []
}) => {
  return (
    <div className={`Email ${className}`} style={style}>
      <Workspace isFullScreen>
        <WorkspaceContext>
          <p>Context</p>
        </WorkspaceContext>
        <WorkspaceHeader>
          <p>Header</p>
        </WorkspaceHeader>
        <WorkspaceToolbar>
          <p>Toolbar</p>
        </WorkspaceToolbar>
        <WorkspaceMain>
          <p>Main</p>
        </WorkspaceMain>
        <WorkspaceFooter>
          <p>Footer</p>
        </WorkspaceFooter>
      </Workspace>
    </div>
  );
};

Email.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  folders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      unreadCount: PropTypes.number
    })
  ),
  labels: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string
    })
  ),
  emails: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        avatar: PropTypes.node
      }),
      recipients: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          email: PropTypes.string,
          avatar: PropTypes.node
        })
      ),
      isUnread: PropTypes.bool,
      subject: PropTypes.string,
      message: PropTypes.string,
      category: PropTypes.string,
      labels: PropTypes.arrayOf(PropTypes.string)
    })
  )
};

export default Email;

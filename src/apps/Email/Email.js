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
import Text from "../../components/Text";
import MediaObject from "../../components/MediaObject";

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
      <Workspace
        isFullScreen
        style={{
          gridTemplateColumns: "215px 350px auto"
        }}
      >
        <WorkspaceContext>
          <Menu
            items={labels.map(label => {
              const indicator = label.unreadCount ? (
                <Text>{label.unreadCount}</Text>
              ) : null;
              return { label: label.name, url: `/${label.slug}`, indicator };
            })}
          />

          <Menu
            items={[
              {
                label: "Label",
                isTitle: true,
                items: folders.map(folder => {
                  const indicator = folder.unreadCount ? (
                    <Text>{folder.unreadCount}</Text>
                  ) : null;
                  return {
                    label: folder.name,
                    url: `/${folder.slug}`,
                    indicator
                  };
                })
              }
            ]}
          />
        </WorkspaceContext>
        <WorkspaceHeader>
          <p>Header</p>
        </WorkspaceHeader>
        <WorkspaceToolbar>
          {emails.map(email => {
            const avatar = (
              <img src={email.sender.avatar} alt={email.sender.name} />
            );
            return (
              <MediaObject media={avatar} hasExtraSmallMedia>
                <Text>{email.sender.name}</Text>
                <Heading element="h6">{email.subject}</Heading>
              </MediaObject>
            );
          })}
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

const PersonPropType = PropTypes.shape({
  name: PropTypes.string,
  email: PropTypes.string,
  avatar: PropTypes.node
});

const FolderPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  unreadCount: PropTypes.number
});

const LabelPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string
});

const EmailPropType = PropTypes.shape({
  id: PropTypes.string,
  sender: PersonPropType,
  recipients: PropTypes.arrayOf(PersonPropType),
  isUnread: PropTypes.bool,
  subject: PropTypes.string,
  message: PropTypes.string,
  folder: PropTypes.string,
  labels: PropTypes.arrayOf(PropTypes.string)
});

Email.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  folders: PropTypes.arrayOf(FolderPropType),
  labels: PropTypes.arrayOf(LabelPropType),
  emails: PropTypes.arrayOf(EmailPropType)
};

export default Email;

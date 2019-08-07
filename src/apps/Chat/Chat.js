import React from "react";
import PropTypes from "prop-types";
import { IoIosAttach, IoIosAt, IoIosHappy } from "react-icons/io";
import Workspace, {
  WorkspaceContext,
  WorkspaceDetails,
  WorkspaceFooter,
  WorkspaceHeader,
  WorkspaceMain,
  WorkspaceToolbar
} from "../../components/Workspace";
import Heading from "../../components/Heading";
import Comment from "../../components/Comment";
import InputBar from "../../components/InputBar";
import "./Chat.scss";

const Channels = ({ channels = [] }) => {
  return (
    <div>
      {channels.map(channel => {
        return <div key={channel.id}>#{channel.name}</div>;
      })}
    </div>
  );
};

const Contexts = ({ contexts = [] }) => {
  return (
    <div>
      {contexts.map(context => {
        return <div key={context.id}>{context.image}</div>;
      })}
    </div>
  );
};

const Messages = ({ messages = [] }) => {
  return (
    <div>
      {messages.map(message => {
        return (
          <div key={message.id}>
            <Comment
              author={message.author.name}
              avatar={
                <img alt={message.author.name} src={message.author.avatar} />
              }
              body={message.body}
              createdAt={message.createdAt}
              updatedAt={message.updatedAt}
            >
              {message.body}
            </Comment>
          </div>
        );
      })}
    </div>
  );
};

const Chat = ({
  className = "",
  style = {},
  mainHeading,
  channels = [],
  contexts = [],
  messages = []
}) => {
  return (
    <div className={`Chat ${className}`} style={style}>
      <Workspace isFullScreen>
        <WorkspaceContext>
          <Contexts contexts={contexts} />
        </WorkspaceContext>
        <WorkspaceHeader>
          <Heading element="h1">{mainHeading}</Heading>
        </WorkspaceHeader>
        <WorkspaceToolbar>
          <Heading element="h5">Channels</Heading>
          <Channels channels={channels} />
        </WorkspaceToolbar>
        <WorkspaceMain>
          <Heading element="h2">{mainHeading}</Heading>
          <Messages messages={messages} />
        </WorkspaceMain>
        <WorkspaceFooter>
          <InputBar
            placeholder="Write something…"
            leftAttachments={[<IoIosAttach key="upload" />]}
            rightAttachments={[
              <IoIosAt key="mention" />,
              <IoIosHappy key="emoji" />
            ]}
          />
        </WorkspaceFooter>
        <WorkspaceDetails>details</WorkspaceDetails>
      </Workspace>
    </div>
  );
};

Chat.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  mainHeading: PropTypes.string.isRequired,
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ),
  contexts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      image: PropTypes.node.isRequired
    })
  ),
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      author: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        avatar: PropTypes.string
      }),
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired
    })
  )
};

export default Chat;

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
import "./Chat.scss";

const Channels = ({ channels = [] }) => {
  return (
    <div className="Chat__channels">
      <Menu
        items={[
          {
            label: "Channels",
            isTitle: true,
            action: <IoIosAdd height="16px" width="16px" />,
            items: channels.map(channel => {
              return { label: `#${channel.name}` };
            })
          }
        ]}
      />
    </div>
  );
};

const Contexts = ({ contexts = [] }) => {
  return (
    <div className="Chat__contexts">
      {contexts.map(context => {
        return <div key={context.id}>{context.image}</div>;
      })}
    </div>
  );
};

const Messages = ({ messages = [] }) => {
  return (
    <div className="Chat__messages">
      {messages.map(message => {
        return (
          <div key={message.id} className="Chat__message">
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

const Header = ({ heading }) => {
  return (
    <div className="Chat__header">
      <Heading element="h1">{heading}</Heading>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="Chat__footer">
      <InputBar
        placeholder="Write something…"
        leftAttachments={[<IoIosAttach key="upload" />]}
        rightAttachments={[
          <IoIosAt key="mention" />,
          <IoIosHappy key="emoji" />
        ]}
      />
    </div>
  );
};

const Chat = ({
  className = "",
  style = {},
  heading,
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
          <Header heading={heading} />
        </WorkspaceHeader>
        <WorkspaceToolbar>
          <Channels channels={channels} />
        </WorkspaceToolbar>
        <WorkspaceMain>
          <Messages messages={messages} />
        </WorkspaceMain>
        <WorkspaceFooter>
          <Footer />
        </WorkspaceFooter>
      </Workspace>
    </div>
  );
};

Chat.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  heading: PropTypes.string.isRequired,
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

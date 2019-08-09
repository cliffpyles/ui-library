import React from "react";
import faker from "faker";
import Chat from "../Chat";
import { ReactComponent as ContextIcon } from "./icons/context.svg";

export default {
  title: "Apps|Chat"
};

function getMockContext() {
  const contextId = `context-${faker.random.uuid()}`;
  const channelNames = [
    "Development",
    "Design",
    "Finance",
    "Marketing",
    "Support"
  ];
  const messageCount = 50;
  let messageIds = [];
  for (let index = 0; index < messageCount; index++) {
    messageIds.push(index + 1);
  }

  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return {
    id: contextId,
    image: <ContextIcon style={{ color }} />,
    name: faker.company.companyName(),
    channels: channelNames.map(channelName => {
      return {
        id: `channel-${channelName.toLowerCase()}`,
        name: channelName,
        messages: messageIds.map(messageId => {
          const timestampMinute =
            messageId / 10 < 1 ? `0${messageId}` : messageId;
          return {
            id: `${channelName}-message-${messageId}`,
            body: faker.lorem.sentence(),
            author: faker.helpers.contextualCard(),
            createdAt: `Sun, 04 Aug 2019 15:${timestampMinute}:04 GMT`,
            updatedAt: `Sun, 04 Aug 2019 15:${timestampMinute}:04 GMT`
          };
        })
      };
    })
  };
}

const contexts = [
  getMockContext(),
  getMockContext(),
  getMockContext(),
  getMockContext(),
  getMockContext()
];
const channels = contexts[0].channels;
const messages = contexts[0].channels[0].messages;
const heading = contexts[0].channels[0].name;
const props = {};

export const Default = () => (
  <Chat
    contexts={contexts}
    channels={channels}
    messages={messages}
    heading={heading}
    {...props}
  />
);

Default.story = {
  name: "default"
};

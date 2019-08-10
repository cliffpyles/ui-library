import React from "react";
import faker from "faker";
import Comment from "./Comment";

export default {
  title: "Components|Content/Comment"
};

const user = faker.helpers.contextualCard();
const props = {
  author: user.username,
  avatar: <img src={user.avatar} />,
  createdAt: `Sun, 04 Aug 2019 15:25:04 GMT`,
  updatedAt: `Sun, 04 Aug 2019 15:25:04 GMT`
};
export const Default = () => <Comment {...props}>Hello, world!</Comment>;

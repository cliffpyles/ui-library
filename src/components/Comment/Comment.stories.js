import React from "react";
import Comment from "./Comment";

export default {
  title: "Components|Structure/Comment"
};

const props = {
  author: "Jane Doe"
};
export const Default = () => <Comment {...props}>Hello, world!</Comment>;

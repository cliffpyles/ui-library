import React from "react";
import { action } from "@storybook/addon-actions";

import InputBar from "../InputBar";
import { ReactComponent as Attachment } from "./icons/attachment.svg";

export default {
  title: "Components|Interactive/InputBar",
  component: InputBar
};

const props = {
  onChange: action("onChange"),
  onFocus: action("onFocus"),
  onBlur: action("onBlur"),
  placeholder: "Enter something…",
  leftAttachments: [
    <Attachment key="left-1" height="16px" width="16px" />,
    <Attachment key="left-2" height="16px" width="16px" />
  ],
  rightAttachments: [
    <Attachment key="right-1" height="16px" width="16px" />,
    <Attachment key="right-2" height="16px" width="16px" />
  ]
};

export const InputBarDefault = () => <InputBar {...props} />;

InputBarDefault.story = {
  name: "default",
  parameters: {
    notes:
      "Accepts user input and triggers actions from the user via keyboard and mouse interactions"
  }
};

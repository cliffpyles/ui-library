import React from "react";
import { action } from "@storybook/addon-actions";

import InputBar from "../InputBar";
import { ReactComponent as Attachment } from "./icons/attachment.svg";

export default {
  title: "Components|Interactive/InputBar"
};

const props = {
  onChange: action("onChange"),
  onFocus: action("onFocus"),
  onBlur: action("onBlur"),
  placeholder: "Enter something…"
};

export const Default = () => <InputBar {...props} />;

Default.story = {
  name: "default"
};

const withAttachmentsProps = {
  ...props,
  leftAttachments: [
    <Attachment key="left-1" height="16px" width="16px" />,
    <Attachment key="left-2" height="16px" width="16px" />
  ],
  rightAttachments: [
    <Attachment key="right-1" height="16px" width="16px" />,
    <Attachment key="right-2" height="16px" width="16px" />
  ]
};
export const WithAttachments = () => <InputBar {...withAttachmentsProps} />;

WithAttachments.story = {
  name: "with attachments"
};

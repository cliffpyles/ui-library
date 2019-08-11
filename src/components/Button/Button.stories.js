import React from "react";
import { action } from "@storybook/addon-actions";
import { IoIosMenu } from "react-icons/io";
import Button from "./Button";

const actions = {
  onClick: action("onClick")
};

export default {
  title: "Components|Interactive/Button",
  component: Button
};

export const ButtonDefault = () => <Button {...actions}>button</Button>;

ButtonDefault.story = {
  name: "default"
};

export const ButtonWithIcon = () => (
  <Button {...actions} icon={<IoIosMenu />} />
);

ButtonWithIcon.story = {
  name: "with icon",
  parameters: {
    notes: "an icon only button"
  }
};

export const ButtonUnstyled = () => (
  <Button {...actions} isUnstyled>
    button
  </Button>
);

ButtonUnstyled.story = {
  name: "unstyled"
};

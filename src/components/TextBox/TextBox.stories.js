import React from "react";
import { action } from "@storybook/addon-actions";

import TextBox from "./TextBox";

export default {
  title: "Components|Interactive/TextBox",
  component: TextBox
};

const props = {
  onChange: action("onChange"),
  onFocus: action("onFocus"),
  onBlur: action("onBlur"),
  placeholder: "Enter search…"
};
export const TextBoxDefault = () => <TextBox {...props} />;

TextBoxDefault.story = {
  name: "default",
  parameters: {
    notes: "Accepts and displays input from the user via keyboard"
  }
};

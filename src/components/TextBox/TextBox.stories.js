import React from "react";
import { action } from "@storybook/addon-actions";

import TextBox from "./TextBox";

export default {
  title: "Components|Interactive/TextBox"
};

const props = {
  onChange: action("onChange"),
  onFocus: action("onFocus"),
  onBlur: action("onBlur"),
  placeholder: "Enter search…"
};
export const Default = () => <TextBox {...props} />;

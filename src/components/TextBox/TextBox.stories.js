import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TextBox from "./TextBox";

export const actions = {
  onChange: action("onChange"),
  onFocus: action("onFocus"),
  onBlur: action("onBlur")
};

storiesOf("TextBox", module).add("default", () => <TextBox {...actions} />);

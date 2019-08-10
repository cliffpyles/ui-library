import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

const actions = {
  onClick: action("onClick")
};

export default {
  title: "Components|Interactive/Button",
  component: Button
};

export const Default = () => <Button {...actions}>button</Button>;

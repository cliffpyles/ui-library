import React from "react";
import Menu from "./Menu";

export default {
  title: "Components|Content/Menu"
};

const data = {
  sections: [
    {
      key: "general"
    }
  ]
};
const props = {};

export const Default = () => <Menu {...props}>child content</Menu>;

Default.story = {
  name: "default"
};

import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Tooltip from "./Tooltip";

export default {
  title: "Components|Interactive/Tooltip",
  component: Tooltip
};

const props = {
  toggle: <IoIosInformationCircleOutline size="24px" />
};
export const TooltipDefault = () => (
  <Tooltip {...props}>A short little blurb</Tooltip>
);

TooltipDefault.story = {
  name: "default",
  parameters: {
    notes: "Displays a short text message when the user hovers over an icon."
  }
};

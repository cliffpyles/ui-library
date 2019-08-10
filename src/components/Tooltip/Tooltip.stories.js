import React from "react";
import {
  IoIosInformation,
  IoIosInformationCircleOutline
} from "react-icons/io";
import Tooltip from "./Tooltip";

export default {
  title: "Components|Interactive/Tooltip"
};

const props = {
  toggle: <IoIosInformationCircleOutline size="24px" />
};
export const Default = () => <Tooltip {...props}>A short little blurb</Tooltip>;

import React from "react";
import { withKnobs, radios } from "@storybook/addon-knobs";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Popover from "./Popover";

export default {
  title: "Components|Interactive/Popover",
  component: Popover
};

export const PopoverDefault = () => {
  const horizontalPosition = radios(
    "Horizontal",
    {
      left: "isLeft",
      right: "isRight"
    },
    "isRight"
  );
  const verticalPosition = radios(
    "Vertical",
    {
      top: "isTop",
      bottom: "isBottom"
    },
    "isBottom"
  );

  const isPositionedProps = {
    [horizontalPosition]: true,
    [verticalPosition]: true,
    isAdaptable: true,
    toggle: <IoIosInformationCircleOutline size="24px" />
  };

  return (
    <Popover {...isPositionedProps}>
      <p>
        Adipisicing laborum pariatur ex exercitation. In consequat aute
        voluptate in ut. Tempor sunt aliqua ea do incididunt ut. Qui minim
        consectetur velit anim eu consectetur eu cillum reprehenderit nulla non.
        Quis nostrud dolore enim aliqua veniam eu tempor id esse eiusmod
        laborum. Pariatur nostrud sunt non amet. Cupidatat tempor ex aute duis.
      </p>
      <p>A short little blurb</p>
      <p>A short little blurb</p>
      <p>A short little blurb</p>
    </Popover>
  );
};

PopoverDefault.story = {
  name: "default",
  decorators: [withKnobs],
  parameters: {
    notes: ""
  }
};

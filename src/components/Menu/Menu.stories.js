import React from "react";
import { IoIosAddCircle, IoIosBriefcase, IoIosBusiness } from "react-icons/io";
import Menu from "./Menu";

export default {
  title: "Components|Content/Menu"
};

const defaultStoryProps = {
  items: [
    {
      label: "Design"
    },
    {
      label: "Development"
    },
    {
      label: "Finance"
    },
    {
      label: "Marketing"
    },
    {
      label: "Sales"
    }
  ]
};

export const DefaultStory = () => (
  <Menu {...defaultStoryProps}>child content</Menu>
);

DefaultStory.story = {
  name: "default"
};

const withChildrenProps = {
  items: [
    {
      label: "General",
      isTitle: true,
      items: [
        {
          label: "Dashboard"
        },
        {
          label: "Customer"
        }
      ]
    },
    {
      label: "Products",
      isTitle: true,
      items: [
        {
          label: "Automotive"
        },
        {
          label: "Clothes"
        },
        {
          label: "Electronics"
        },
        {
          label: "Home"
        }
      ]
    },
    {
      label: "Sales",
      isTitle: true
    }
  ]
};

export const WithChildren = () => (
  <Menu {...withChildrenProps}>child content</Menu>
);

WithChildren.story = {
  name: "with children"
};

const withActionProps = {
  items: [
    {
      label: "Products",
      isTitle: true,
      action: <IoIosAddCircle />,
      icon: <IoIosBusiness />,
      items: [
        {
          label: "Automotive"
        },
        {
          label: "Clothes"
        },
        {
          label: "Electronics"
        },
        {
          label: "Home"
        }
      ]
    },
    {
      label: "Sales",
      icon: <IoIosBriefcase />,
      isTitle: true
    }
  ]
};

export const WithAction = () => <Menu {...withActionProps}>child content</Menu>;

WithAction.story = {
  name: "with action"
};

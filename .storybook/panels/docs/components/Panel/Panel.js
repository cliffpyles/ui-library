import React, { useEffect } from "react";
import { STORY_CHANGED } from "@storybook/core-events";
import "./Panel.css";

const Panel = ({ channel, api, active, component }) => {
  // api.on(STORY_CHANGED, this.onStoryChange);
  // api.off(STORY_CHANGED, this.onStoryChange);

  // const onStoryChange = id => {
  //   const { api } = this.props;
  //   const params = api.getParameters(id, PARAM_KEY);

  //   if (params && !params.disable) {
  //     const value = params.data;
  //     this.setState({ value });
  //   } else {
  //     this.setState({ value: undefined });
  //   }
  // };
  useEffect(() => {
    console.log("loaded panel");
    console.log(component);
  });

  if (!component) {
    return <p>No docs available.</p>;
  }

  return (
    <div className="Panel">
      <h1>{component.name}</h1>
    </div>
  );
};

export default Panel;

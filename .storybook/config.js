import React from "react";
import { configure, addDecorator } from "@storybook/react";
import "./styles.scss";
import "../src/index.css";

addDecorator((storyFn, props) => {
  const results = Array.from(props.kind.matchAll(/(\w*)\|(\w*)\/?(\w*)/g));
  let [result, categoryName, sectionName, storyName] = results[0];

  return (
    <div
      className={`${categoryName || "Unspecified"}Category ${sectionName ||
        "Unspecified"}Section ${storyName || sectionName}Story`}
    >
      {storyFn()}
    </div>
  );
});

configure(require.context("../src", true, /\.stories\.js$/), module);

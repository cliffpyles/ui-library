import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import theme from "./theme";
import "./styles.scss";
import "../src/index.css";

addParameters({ options: { theme } });

addDecorator((storyFn, props) => {
  const results = Array.from(props.kind.matchAll(/(\w*)\|(\w*)\/?(\w*)/g));
  let [result, categoryName, sectionName, storyName] = results[0];

  return (
    <div
      className={`PreviewArea ${categoryName ||
        "Unspecified"}Category ${sectionName ||
        "Unspecified"}Section ${storyName || sectionName}Story`}
    >
      {storyFn()}
    </div>
  );
});

configure(
  require.context("../src", true, /\.stories\.(js|ts|tsx|mdx)$/),
  module
);

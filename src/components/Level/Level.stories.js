import React from "react";
import Level from "./Level";

export default {
  title: "Components|Layout/Level"
};

const props = {};
export const Default = () => (
  <Level {...props}>
    <div>Child 1</div>
    <div>Child 2</div>
    <div>Child 3</div>
    <div>Child 4</div>
    <div>Child 5</div>
  </Level>
);

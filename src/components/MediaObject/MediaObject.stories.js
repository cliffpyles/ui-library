import React from "react";
import MediaObject from "./MediaObject";

export default {
  title: "Components|Layout/MediaObject"
};

const props = {};
export const Default = () => (
  <MediaObject {...props}>
    <div>first</div>
    <div>second</div>
    <div>third</div>
  </MediaObject>
);

import React from "react";
import MediaObject from "./MediaObject";

export default {
  title: "Components|Layout/MediaObject"
};

const props = {
  media: <div>media</div>
};

export const Default = () => (
  <MediaObject {...props}>
    <div>first</div>
    <div>second</div>
    <div>third</div>
  </MediaObject>
);

export const ExtraSmallMediaObject = () => (
  <MediaObject {...props} hasExtraSmallMedia>
    <div>content</div>
  </MediaObject>
);

ExtraSmallMediaObject.story = {
  name: "with extra small media"
};

export const SmallMediaObject = () => (
  <MediaObject {...props} hasSmallMedia>
    <div>content</div>
  </MediaObject>
);

SmallMediaObject.story = {
  name: "with small media"
};

export const LargeMediaObject = () => (
  <MediaObject {...props} hasLargeMedia>
    <div>content</div>
  </MediaObject>
);

LargeMediaObject.story = {
  name: "with large media"
};

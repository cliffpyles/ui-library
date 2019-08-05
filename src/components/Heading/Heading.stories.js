import React from "react";
import Heading from "./Heading";

export default {
  title: "Components|Content/Heading"
};

const props = {};

export const Heading1 = () => (
  <Heading element="h1" {...props}>
    Heading 1
  </Heading>
);
Heading1.story = {
  name: "Heading 1"
};

export const Heading2 = () => (
  <Heading element="h2" {...props}>
    Heading 2
  </Heading>
);
Heading2.story = {
  name: "Heading 2"
};

export const Heading3 = () => (
  <Heading element="h3" {...props}>
    Heading 3
  </Heading>
);
Heading3.story = {
  name: "Heading 3"
};

export const Heading4 = () => (
  <Heading element="h4" {...props}>
    Heading 4
  </Heading>
);
Heading4.story = {
  name: "Heading 4"
};

export const Heading5 = () => (
  <Heading element="h5" {...props}>
    Heading 5
  </Heading>
);
Heading5.story = {
  name: "Heading 5"
};

export const Heading6 = () => (
  <Heading element="h6" {...props}>
    Heading 6
  </Heading>
);
Heading6.story = {
  name: "Heading 6"
};

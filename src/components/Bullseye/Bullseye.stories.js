import React from "react";
import Bullseye from "./Bullseye";

export default {
  title: "Components|Layout/Bullseye"
};

const props = {};
export const Default = () => (
  <Bullseye {...props}>
    <p>child content</p>
  </Bullseye>
);

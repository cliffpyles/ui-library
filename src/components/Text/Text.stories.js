import React from "react";
import Text from "./Text";

export default {
  title: "Components|Content/Text"
};

const props = {};
export const Default = () => <Text {...props}>normal text</Text>;

export const SubduedText = () => (
  <Text {...props} isSubdued>
    subdued text
  </Text>
);
SubduedText.story = { name: "Subdued" };

export const StrongText = () => (
  <Text {...props} isStrong>
    strong text
  </Text>
);
StrongText.story = { name: "Strong" };

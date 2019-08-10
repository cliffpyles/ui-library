import React from "react";
import Card, { CardHeader, CardMain, CardFooter } from "./Card";

export default {
  title: "Components|Content/Card",
  component: Card
};

export const CardDefault = () => <Card>child content</Card>;

CardDefault.story = {
  name: "default"
};

export const CardWithHeader = () => (
  <Card>
    <CardHeader>
      <span>header content</span>
    </CardHeader>
    <span>child content</span>
  </Card>
);

CardWithHeader.story = {
  name: "with header"
};

export const CardWithAll = () => (
  <Card>
    <CardHeader>
      <span>header content</span>
    </CardHeader>
    <CardMain>
      <span>main content</span>
    </CardMain>
    <CardFooter>
      <span>footer content</span>
    </CardFooter>
  </Card>
);

CardWithAll.story = {
  name: "with all extras"
};

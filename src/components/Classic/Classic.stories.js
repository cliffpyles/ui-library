import React from "react";
import Classic, {
  ClassicHeader,
  ClassicFooter,
  ClassicPrimary,
  ClassicSecondary
} from "./Classic";

export default {
  title: "Components|Layout/Classic"
};

const props = {};

export const Default = () => (
  <Classic {...props}>
    <ClassicHeader>header</ClassicHeader>
    <ClassicSecondary>secondary</ClassicSecondary>
    <ClassicPrimary>primary</ClassicPrimary>
    <ClassicSecondary>secondary</ClassicSecondary>
    <ClassicFooter>footer</ClassicFooter>
  </Classic>
);

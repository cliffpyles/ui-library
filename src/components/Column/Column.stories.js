import React from "react";
import Column, { ColumnHeader, ColumnMain, ColumnFooter } from "./Column";

export default {
  title: "Components|Layout/Column"
};

const props = {};
export const Default = () => (
  <Column {...props}>
    <ColumnHeader>header</ColumnHeader>
    <ColumnMain>main</ColumnMain>
    <ColumnFooter>footer</ColumnFooter>
  </Column>
);

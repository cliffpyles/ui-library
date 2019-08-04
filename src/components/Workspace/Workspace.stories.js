import React from "react";
import Workspace, {
  WorkspaceContext,
  WorkspaceDetails,
  WorkspaceFooter,
  WorkspaceHeader,
  WorkspaceMain,
  WorkspaceToolbar
} from "./Workspace";

export default {
  title: "Components|Layout/Workspace"
};

const props = {};
export const Default = () => (
  <Workspace {...props}>
    <WorkspaceContext>context</WorkspaceContext>
    <WorkspaceDetails>details</WorkspaceDetails>
    <WorkspaceHeader>header</WorkspaceHeader>
    <WorkspaceFooter>footer</WorkspaceFooter>
    <WorkspaceMain>main</WorkspaceMain>
    <WorkspaceToolbar>toolbar</WorkspaceToolbar>
  </Workspace>
);

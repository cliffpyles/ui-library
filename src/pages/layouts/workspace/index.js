import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Workspace, {
  WorkspacePane,
  WorkspaceHeader,
  WorkspaceSidebar,
  WorkspaceMain,
  WorkspaceFooter
} from '@layouts/Workspace'

export default () => {
  return (
    <Documentation>
      <Example heading="Workspace" isViewport={true}>
        <Workspace>
          <WorkspaceHeader></WorkspaceHeader>
          <WorkspaceSidebar></WorkspaceSidebar>
          <WorkspaceMain></WorkspaceMain>
          <WorkspaceFooter></WorkspaceFooter>
        </Workspace>
      </Example>
    </Documentation>
  )
}

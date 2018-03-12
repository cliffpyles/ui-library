import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import Workspace, {
  WorkspacePane,
  WorkspaceHeader,
  WorkspaceSidebar,
  WorkspaceMain,
  WorkspaceFooter
} from '@layouts/Workspace'

export default ({data, docs}) => {
  return (
    <Documentation className="is-layout-documentation">
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

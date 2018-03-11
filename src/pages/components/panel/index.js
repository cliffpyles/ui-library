import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Panel, {PanelGroup} from '@components/Panel'

export default () => {
  return (
    <Documentation>
      <Example heading="Panel">
        <Panel title="Title of Panel">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Panel>
      </Example>

      <Example heading="Panel Collapsed">
        <Panel title="Title of Panel" isExpanded={false}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Panel>
      </Example>

      <Example heading="Panel With Groups">
        <Panel title="Title of Panel">
          <PanelGroup title="First Panel Group">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </PanelGroup>
          <PanelGroup title="Second Panel Group">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </PanelGroup>
          <PanelGroup title="Third Panel Group">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </PanelGroup>
        </Panel>
      </Example>
    </Documentation>
  )
}

import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Panel from '@components/Panel'

export default () => {
  return (
    <Documentation>
      <Example heading="Panel on Left" isViewport={true}>
        <Panel className="is-left">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Panel>
      </Example>

      <Example heading="Panel on Right" isViewport={true}>
        <Panel className="is-right">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Panel>
      </Example>
    </Documentation>
  )
}

import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Drawer from '@components/Drawer'

export default () => {
  return (
    <Documentation className="is-drawer-page">
      <Example heading="Drawer" isViewport={true}>
        <Drawer title="Title of Drawer">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Drawer>
      </Example>

      <Example heading="Drawer on Right" isViewport={true}>
        <Drawer title="Title of Drawer" className="is-right">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Drawer>
      </Example>
    </Documentation>
  )
}

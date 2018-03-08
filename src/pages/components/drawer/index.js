import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Drawer, {Docs} from '@components/Drawer'

export default () => {
  return (
    <Documentation docs={Docs} className="is-drawer-page">
      <Example heading="Drawer">
        <Drawer title="Title of Drawer">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Drawer>
      </Example>

      <Example heading="Drawer on Right">
        <Drawer title="Title of Drawer" className="is-right">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Drawer>
      </Example>
    </Documentation>
  )
}

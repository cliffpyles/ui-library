import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import OverflowMenu, {Docs} from '@components/OverflowMenu'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="OverflowMenu Example">
        <OverflowMenu>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </OverflowMenu>
      </Example>

      <Example heading="OverflowMenu Aligned on Right">
        <OverflowMenu className="is-right-aligned">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </OverflowMenu>
      </Example>
    </Documentation>
  )
}

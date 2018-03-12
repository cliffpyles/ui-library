import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import OverflowMenu from '@components/OverflowMenu'

export default ({data, docs}) => {
  return (
    <Documentation docs={docs}>
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

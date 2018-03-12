import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import Spaced from '@layouts/Spaced'

export default ({data, docs}) => {
  return (
    <Documentation className="is-layout-documentation">
      <Example heading="Spaced Layout">
        <Spaced>
          <p>Content Area</p>
          <p>Content Area</p>
        </Spaced>
      </Example>
    </Documentation>
  )
}

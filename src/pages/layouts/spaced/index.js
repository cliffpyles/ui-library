import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Spaced from '@layouts/Spaced'

export default () => {
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

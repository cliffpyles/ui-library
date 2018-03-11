import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Level from '@layouts/Level'

export default () => {
  return (
    <Documentation className="is-layout-documentation">
      <Example heading="Level">
        <Level>
          <div>
            <p>Content area</p>
          </div>
          <div>
            <p>Content area</p>
          </div>
          <div>
            <p>Content area</p>
          </div>
        </Level>
      </Example>
    </Documentation>
  )
}

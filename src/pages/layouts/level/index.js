import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import Level from '@layouts/Level'

export default ({data, docs}) => {
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

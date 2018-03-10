import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Level, {Docs} from '@layouts/Level'

export default () => {
  return (
    <Documentation docs={Docs} className="is-level-page">
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

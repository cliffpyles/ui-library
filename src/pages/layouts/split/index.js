import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Split, {Docs} from '@layouts/Split'

export default () => {
  return (
    <Documentation docs={Docs} className="is-split-page">
      <Example heading="Split Example - Default">
        <Split>
          <div>
            Secondary content area.
          </div>
          <div>
            <p> Main Content Area. Expands to full-width of the container, minus the width of the secondary content area(s).</p>
          </div>
          <div>
            Secondary content area.
          </div>
        </Split>
      </Example>

      <Example heading="Split Example - Explicit Content Areas">
        <Split>
          <div className="split__main">
            <p> Main Content Area. Expands to full-width of the container, minus the width of the secondary content area(s).</p>
          </div>
          <div className="split__secondary">
            Secondary content area.
          </div>
          <div className="split__secondary">
            Secondary content area.
          </div>
        </Split>
      </Example>
    </Documentation>
  )
}

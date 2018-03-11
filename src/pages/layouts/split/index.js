import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Split, {SplitItem} from '@layouts/Split'

export default () => {
  return (
    <Documentation className="is-layout-documentation">
      <Example heading="Split">
        <Split>
          <SplitItem>
            <p>Content Area</p>
          </SplitItem>
          <SplitItem className="is-first">
            <p>First Content Area</p>
          </SplitItem>
          <SplitItem className="is-last">
            <p>Last Content Area</p>
          </SplitItem>
        </Split>
      </Example>
    </Documentation>
  )
}

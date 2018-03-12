import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import Split, {SplitItem} from '@layouts/Split'

export default ({data, docs}) => {
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

import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Spaced, {Docs} from '@layouts/Spaced'

export default () => {
  return (
    <Documentation docs={Docs} className="is-spaced-documentation">
      <Example heading="Spaced Layout">
        <Spaced>
          <p>Content Area</p>
          <p>Content Area</p>
        </Spaced>
      </Example>
    </Documentation>
  )
}

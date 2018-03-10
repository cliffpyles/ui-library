import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Tooltip from '@components/Tooltip'

export default () => {
  return (
    <Documentation>
      <Example heading="Tooltip Above">
        <Tooltip className="is-above" message="Message to show above the text">Example</Tooltip>
      </Example>

      <Example heading="Tooltip Below">
        <Tooltip className="is-below" message="Message to show below the text">Example</Tooltip>
      </Example>

      <Example heading="Tooltip Left">
        <Tooltip className="is-left" message="Message to show to the left of the text">Example</Tooltip>
      </Example>

      <Example heading="Tooltip Right">
        <Tooltip className="is-right" message="Message to show to the right of the text">Example</Tooltip>
      </Example>
    </Documentation>
  )
}

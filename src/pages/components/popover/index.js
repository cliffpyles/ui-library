import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Popover from '@components/Popover'

export default () => {
  return (
    <Documentation>
      <Example heading="Popover Above">
        <Popover className="is-above" message="Message to show above the text">Click to Show</Popover>
      </Example>

      <Example heading="Popover Below">
        <Popover className="is-below" message="Message to show below the text">Click to Show</Popover>
      </Example>

      <Example heading="Popover Left">
        <Popover className="is-left" message="Message to show to the left of the text">Click to Show</Popover>
      </Example>

      <Example heading="Popover Right">
        <Popover className="is-right" message="Message to show to the right of the text">Click to Show</Popover>
      </Example>
    </Documentation>
  )
}

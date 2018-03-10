import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Tag from '@components/Tag'

export default () => {
  return (
    <Documentation>
      <Example heading="Tag">
        <Tag>example</Tag>
      </Example>

      <Example heading="Tag with Delete">
        <Tag hasDelete={true}>example</Tag>
      </Example>
    </Documentation>
  )
}

import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import Tag from '@components/Tag'

export default ({data, docs}) => {
  return (
    <Documentation docs={docs}>
      <Example heading="Tag">
        <Tag>example</Tag>
      </Example>

      <Example heading="Tag with Delete">
        <Tag hasDelete={true}>example</Tag>
      </Example>
    </Documentation>
  )
}

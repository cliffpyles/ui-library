import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import Badge from '@components/Badge'

export default ({data, docs}) => {
  return (
    <Documentation docs={docs}>
      <Example heading="Badge">
        <Badge>example</Badge>
      </Example>
    </Documentation>
  )
}

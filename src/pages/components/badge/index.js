import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Badge, {Docs} from '@components/Badge'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Badge">
        <Badge>example</Badge>
      </Example>
    </Documentation>
  )
}

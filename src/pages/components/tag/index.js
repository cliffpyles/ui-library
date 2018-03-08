import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Tag, {Docs} from '@components/Tag'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Tag">
        <Tag>example</Tag>
      </Example>
    </Documentation>
  )
}

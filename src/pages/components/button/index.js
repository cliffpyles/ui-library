import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import Button from '@components/Button'

export default ({data, docs}) => {
  return (
    <Documentation docs={docs}>
      <Example heading="Button">
        <Button>Default</Button>
      </Example>
    </Documentation>
  )
}

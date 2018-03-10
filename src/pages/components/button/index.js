import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Button, {Docs} from '@components/Button'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Button">
        <Button>Default</Button>
      </Example>
    </Documentation>
  )
}

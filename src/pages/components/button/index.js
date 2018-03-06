import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
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

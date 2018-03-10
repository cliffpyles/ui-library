import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Alert, {Docs} from '@components/Alert'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Alert">
        <Alert>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet.</p>
        </Alert>
      </Example>
    </Documentation>
  )
}

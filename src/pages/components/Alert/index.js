import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
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

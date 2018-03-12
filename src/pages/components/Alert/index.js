import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import Alert from '@components/Alert'

export default ({data, docs}) => {
  return (
    <Documentation docs={docs}>
      <Example heading="Alert">
        <Alert>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet.</p>
        </Alert>
      </Example>
    </Documentation>
  )
}

import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import Bullseye from '@layouts/Bullseye'

export default ({data, docs}) => {
  return (
    <Documentation className="is-layout-documentation">
      <Example heading="Bullseye" isViewport={true}>
        <Bullseye>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Bullseye>
      </Example>

      <Example heading="Bullseye with Body" isViewport={true}>
        <Bullseye hasBody={true}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Bullseye>
      </Example>
    </Documentation>
  )
}

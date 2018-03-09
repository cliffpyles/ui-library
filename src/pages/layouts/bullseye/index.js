import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Bullseye, {Docs} from '@layouts/Bullseye'

export default () => {
  return (
    <Documentation docs={Docs} className="is-bullseye-documentation">
      <Example heading="Bullseye">
        <Bullseye>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Bullseye>
      </Example>

      <Example heading="Bullseye with Body">
        <Bullseye hasBody={true}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Bullseye>
      </Example>

      <Example heading="Bullseye as Full Page">
        <Bullseye className="is-full-page">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Bullseye>
      </Example>
    </Documentation>
  )
}

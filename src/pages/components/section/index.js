import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Section, {Docs} from '@components/Section'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Section">
        <Section>
          <h2>Example Section</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Section>
      </Example>
    </Documentation>
  )
}

import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Section from '@components/Section'

export default () => {
  return (
    <Documentation>
      <Example heading="Section">
        <Section>
          <h2>Example Section</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Section>
      </Example>
    </Documentation>
  )
}

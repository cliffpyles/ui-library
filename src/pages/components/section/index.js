import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import Section from '@components/Section'

export default ({data, docs}) => {
  return (
    <Documentation docs={docs}>
      <Example heading="Section">
        <Section>
          <h2>Example Section</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Section>
      </Example>
    </Documentation>
  )
}

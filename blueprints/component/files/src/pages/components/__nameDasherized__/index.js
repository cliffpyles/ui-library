import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import {{moduleName}} from '@components/{{moduleName}}'

export default () => {
  return (
    <Documentation>
      <Example heading="{{moduleName}}">
        <{{moduleName}}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </{{moduleName}}>
      </Example>
    </Documentation>
  )
}

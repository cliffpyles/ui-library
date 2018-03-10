import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import {{moduleName}}, {Docs} from '@patterns/{{moduleName}}'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="{{moduleName}}">
        <{{moduleName}}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </{{moduleName}}>
      </Example>
    </Documentation>
  )
}

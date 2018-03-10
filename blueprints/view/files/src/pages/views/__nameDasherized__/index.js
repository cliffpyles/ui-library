import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import {{moduleName}} from '@views/{{moduleName}}'

export default () => {
  return (
    <Documentation>
      <Example heading="{{moduleName}}" isViewport={true}>
        <{{moduleName}}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </{{moduleName}}>
      </Example>
    </Documentation>
  )
}

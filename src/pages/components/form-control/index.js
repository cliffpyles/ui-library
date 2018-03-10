import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import FormControl from '@components/FormControl'

export default () => {
  return (
    <Documentation>
      <Example heading="Form Control">
        <FormControl>
          <label htmlFor="">Label</label>
          <input type="text"/>
        </FormControl>
      </Example>
    </Documentation>
  )
}

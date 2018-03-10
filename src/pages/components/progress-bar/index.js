import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import ProgressBar from '@components/ProgressBar'

export default () => {
  return (
    <Documentation>
      <Example heading="Progress Bar">
        <ProgressBar value={50}/>
      </Example>
    </Documentation>
  )
}

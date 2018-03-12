import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import ProgressBar from '@components/ProgressBar'

export default ({data, docs}) => {
  return (
    <Documentation docs={docs}>
      <Example heading="Progress Bar">
        <ProgressBar value={50}/>
      </Example>
    </Documentation>
  )
}

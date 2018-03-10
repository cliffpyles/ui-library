import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import ProgressBar, {Docs} from '@components/ProgressBar'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Progress Bar">
        <ProgressBar value={50}/>
      </Example>
    </Documentation>
  )
}

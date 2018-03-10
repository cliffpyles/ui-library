import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
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

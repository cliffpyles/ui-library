import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import AutoSuggest from '@components/AutoSuggest'

export default ({data, docs}) => {
  return (
    <Documentation docs={docs}>
      <Example heading="Auto Suggest">
        <AutoSuggest />
      </Example>
    </Documentation>
  )
}

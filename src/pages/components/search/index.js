import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import Search from '@components/Search'

export default ({data, docs}) => {
  return (
    <Documentation docs={docs}>
      <Example heading="Search">
        <Search />
      </Example>
    </Documentation>
  )
}

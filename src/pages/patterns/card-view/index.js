import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import CardView from '@patterns/CardView'

export default ({data, docs}) => {
  return (
    <Documentation docs={docs}>
      <Example heading="Card View">
        <CardView />
      </Example>
    </Documentation>
  )
}

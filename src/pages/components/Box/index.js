import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import Box from '@components/Box'

export default ({data, docs}) => {
  return (
    <Documentation docs={docs}>
      <Example heading="Box">
        <Box>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Box>
      </Example>
    </Documentation>
  )
}

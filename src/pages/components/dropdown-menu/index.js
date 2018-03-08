import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import DropdownMenu, {Docs} from '@components/DropdownMenu'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="DropdownMenu Example">
        <DropdownMenu>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </DropdownMenu>
      </Example>

      <Example heading="DropdownMenu Aligned on Right">
        <DropdownMenu className="is-right-aligned">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </DropdownMenu>
      </Example>
    </Documentation>
  )
}

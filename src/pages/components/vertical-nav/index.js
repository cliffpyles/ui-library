import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import VerticalNav, {
  VerticalNavItem,
  Docs
} from '@components/VerticalNav'

export default () => {
  return (
    <Documentation docs={Docs} className="is-vertical-nav-page">
      <Example heading="Vertical Nav">
        <VerticalNav>
          <VerticalNavItem path="/">home</VerticalNavItem>
          <VerticalNavItem path="/products">products</VerticalNavItem>
          <VerticalNavItem path="/services">services</VerticalNavItem>
          <VerticalNavItem path="/about">about</VerticalNavItem>
        </VerticalNav>
      </Example>
    </Documentation>
  )
}

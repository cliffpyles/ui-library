import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import VerticalNav, {
  VerticalNavItem,
  VerticalNavMenu,
  Docs
} from '@components/VerticalNav'

export default () => {
  return (
    <Documentation docs={Docs} className="is-vertical-nav-page">
      <Example heading="Vertical Nav">
        <VerticalNav>
          <VerticalNavItem path="/">home</VerticalNavItem>
          <VerticalNavItem path="/products">
            products
            <VerticalNavMenu>
              <VerticalNavItem>Appliances</VerticalNavItem>
              <VerticalNavItem>Electronics</VerticalNavItem>
              <VerticalNavItem>Furniture</VerticalNavItem>
              <VerticalNavItem>Lawn &amp; Gardening</VerticalNavItem>
            </VerticalNavMenu>
          </VerticalNavItem>
          <VerticalNavItem path="/services">services</VerticalNavItem>
          <VerticalNavItem path="/about">about</VerticalNavItem>
        </VerticalNav>
      </Example>

      <Example heading="Vertical Nav With Slideout">
        <VerticalNav className="is-slideout">
          <VerticalNavItem path="/">home</VerticalNavItem>
          <VerticalNavItem path="/products">
            products
            <VerticalNavMenu>
              <VerticalNavItem>Appliances</VerticalNavItem>
              <VerticalNavItem>Electronics</VerticalNavItem>
              <VerticalNavItem>Furniture</VerticalNavItem>
              <VerticalNavItem>Lawn &amp; Gardening</VerticalNavItem>
            </VerticalNavMenu>
          </VerticalNavItem>
          <VerticalNavItem path="/services">services</VerticalNavItem>
          <VerticalNavItem path="/about">about</VerticalNavItem>
        </VerticalNav>
      </Example>
    </Documentation>
  )
}

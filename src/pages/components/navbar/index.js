import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import Navbar, {NavbarItem} from '@components/Navbar'

export default ({data, docs}) => {
  return (
    <Documentation docs={docs}>
      <Example heading="Navbar">
        <Navbar>
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>Services</NavbarItem>
          <NavbarItem>Products</NavbarItem>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </Navbar>
      </Example>

      <Example heading="Vertical Navbar">
        <Navbar className="is-vertical">
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>Services</NavbarItem>
          <NavbarItem>Products</NavbarItem>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </Navbar>
      </Example>
    </Documentation>
  )
}

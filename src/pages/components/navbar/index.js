import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Navbar, {NavbarItem, Docs} from '@components/Navbar'

export default () => {
  return (
    <Documentation docs={Docs}>
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

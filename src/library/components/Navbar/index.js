import React from 'react'
import docs from './docs.md'
import './styles.scss'


export const NavbarItem = ({children, className = ''}) => {
  return (
    <li className="navbar__item">
      <a href="#" className="navbar_link">{children}</a>
    </li>
  )
}
export default ({children, className = ''}) => {
  return (
    <nav className={`navbar ${className}`}>
      <ul className="navbar__items">
        {children}
      </ul>
    </nav>
  )
}

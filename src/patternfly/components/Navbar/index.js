import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs
export const NavbarItem = ({children, className = ''}) => {
  return (
    <li className="pf-c-navbar__item">
      <a href="#" className="pf-c-navbar_link">{children}</a>
    </li>
  )
}
export default ({children, className = ''}) => {
  return (
    <nav className={`pf-c-navbar ${className}`}>
      <ul className="pf-c-navbar__items">
        {children}
      </ul>
    </nav>
  )
}

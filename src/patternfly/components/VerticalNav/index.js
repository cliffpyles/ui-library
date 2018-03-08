import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export const VerticalNavItem = ({children, className = ''}) => {
  return (
    <li className={`pf-c-vertical-nav__item ${className}`}>
      {children}
    </li>
  )
}

export default ({children, className = ''}) => {
  return (
    <div className={`pf-c-vertical-nav ${className}`}>
      <ul className="pf-c-vertical-nav__items">
        {children}
      </ul>
    </div>
  )
}

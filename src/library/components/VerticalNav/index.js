import React from 'react'
import docs from './docs.md'
import './styles.scss'



export const VerticalNavItem = ({children, className = ''}) => {
  return (
    <li className={`vertical-nav__item ${className}`}>
      {children}
    </li>
  )
}
export const VerticalNavMenu = ({children, className = ''}) => {
  return (
    <ul className={`vertical-nav__menu ${className}`}>
      {children}
    </ul>
  )
}

export default ({children, className = ''}) => {
  return (
    <div className={`vertical-nav ${className}`}>
      <ul className="vertical-nav__items">
        {children}
      </ul>
    </div>
  )
}

import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const SplitItem = ({children, className = ''}) => {
  return (
    <div className={`split__item ${className}`}>
      {children}
    </div>
  )
}

export default ({children, className = ''}) => {
  return (
    <div className={`split ${className}`}>
      {children}
    </div>
  )
}

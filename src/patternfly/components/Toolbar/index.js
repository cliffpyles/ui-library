import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export const ToolbarGroup = ({children, className = ''}) => {
  return (
    <div className={`pf-c-toolbar__group ${className}`}>
      {children}
    </div>
  )
}

export default ({children, className = ''}) => {
  return (
    <div className={`pf-c-toolbar ${className}`}>
      {children}
    </div>
  )
}

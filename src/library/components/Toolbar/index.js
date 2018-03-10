import React from 'react'
import docs from './docs.md'
import './styles.scss'



export const ToolbarGroup = ({children, className = ''}) => {
  return (
    <div className={`toolbar__group ${className}`}>
      {children}
    </div>
  )
}

export default ({children, className = ''}) => {
  return (
    <div className={`toolbar ${className}`}>
      {children}
    </div>
  )
}

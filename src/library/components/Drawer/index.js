import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export default ({children, className = '', title}) => {
  return (
    <div className={`drawer ${className}`}>
      <div className="drawer__header">
        <h4 className="drawer_title">{title}</h4>
        <i className="fas fa-times"></i>
      </div>
      <div className="drawer__body">
        {children}
      </div>
    </div>
  )
}

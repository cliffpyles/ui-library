import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export default ({children, className = ''}) => {
  return (
    <div className={`pf-c-form-control ${className}`}>
      {children}
    </div>
  )
}

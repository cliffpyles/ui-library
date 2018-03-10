import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export default ({children, className = ''}) => {
  return (
    <p className={`badge ${className}`}>
      {children}
    </p>
  )
}

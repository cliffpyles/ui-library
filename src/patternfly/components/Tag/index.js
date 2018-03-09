import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

const TagDelete = () => {
  return (
    <button className="pf-c-tag_delete">
      <i className="fas fa-times"></i>
    </button>
  )
}
export default ({children, className = '', hasDelete = false}) => {
  return (
    <p className={`pf-c-tag ${className}`}>
      {children}
      {hasDelete && <TagDelete />}
    </p>
  )
}

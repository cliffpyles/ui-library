import React from 'react'
import docs from './docs.md'
import './styles.scss'



const TagDelete = () => {
  return (
    <button className="Tag_delete">
      <i className="fas fa-times"></i>
    </button>
  )
}
export default ({children, className = '', hasDelete = false}) => {
  return (
    <p className={`Tag ${className}`}>
      {children}
      {hasDelete && <TagDelete />}
    </p>
  )
}

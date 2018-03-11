import React from 'react'
import docs from './docs.md'
import './styles.scss'



export default ({className = ''}) => {
  return (
    <div className={`search ${className}`}>
      <i className="fas fa-search"></i>
      <input type="text" className="search_input"/>
    </div>
  )
}

import React from 'react'
import docs from './docs.md'
import './styles.scss'



export default ({children, className = '', message = ''}) => {
  return (
    <span className={`tooltip ${className}`}>
      <button className="tooltip_toggle">
        {children}
      </button>
      <span className="tooltip_message">{message}</span>
    </span>
  )
}

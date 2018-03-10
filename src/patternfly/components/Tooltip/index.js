import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export default ({children, className = '', message = ''}) => {
  return (
    <span className={`pf-c-tooltip ${className}`}>
      <button className="pf-c-tooltip_toggle">
        {children}
      </button>
      <span className="pf-c-tooltip_message">{message}</span>
    </span>
  )
}

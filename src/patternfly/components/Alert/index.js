import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export default ({children, className = ''}) => {
  return (
    <div className={`pf-c-alert ${className}`}>
      <div className="pf-c-alert__message">
        {children}
      </div>
      <button className="pf-c-alert_close-button">
        <i class="fas fa-times"></i>
      </button>
    </div>
  )
}

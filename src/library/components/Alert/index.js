import React from 'react'
import docs from './docs.md'
import './styles.scss'



export default ({children, className = ''}) => {
  return (
    <div className={`alert ${className}`}>
      <div className="alert__message">
        {children}
      </div>
      <button className="alert_close-button">
        <i className="fas fa-times"></i>
      </button>
    </div>
  )
}

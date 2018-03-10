import React from 'react'
import docs from './docs.md'
import './styles.scss'



export default ({children, className = ''}) => {
  return (
    <div className={`box ${className}`}>
      {children}
    </div>
  )
}

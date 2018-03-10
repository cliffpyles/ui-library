import React from 'react'
import docs from './docs.md'
import './styles.scss'



export default ({children, className = '', hasBody}) => {
  return (
    <div className={`bullseye ${className}`}>
      {hasBody
        ? <div className="bullseye__body">{children}</div>
        : children}
    </div>
  )
}

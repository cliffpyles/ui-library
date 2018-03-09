import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export default ({children, className = '', hasBody}) => {
  return (
    <div className={`pf-l-bullseye ${className}`}>
      {hasBody
        ? <div className="pf-l-bullseye__body">{children}</div>
        : children}
    </div>
  )
}

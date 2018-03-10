import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs
export const BreadcrumbItem = ({children, className = '', path}) => {
  return (
    <li className={`breadcrumb__item ${className}`}>
      {path
        ? <a href={path} className={`breadcrumb_link ${className}`}>{children}</a>
        : <span className={`breadcrumb_caption ${className}`}>{children}</span>}
    </li>
  )
}
export default ({children, className = ''}) => {
  return (
    <div className={`breadcrumb ${className}`}>
      <ul className="breadcrumb__items">
        {children}
      </ul>
    </div>
  )
}

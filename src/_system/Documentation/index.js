import React from 'react'
import './styles.scss'

export default ({children, className = '', docs = ''}) => {
  return (
    <div className={`Documentation ${className}`}>
      <div className="Documentation__section">
        {children}
      </div>
    </div>
  )
}
// const HTML_DOCS = { __html: docs }
// <h3 className="Documentation_heading">Documentation</h3>
// <div
//   className="Documentation__section"
//   dangerouslySetInnerHTML={HTML_DOCS}>
// </div>

import React from 'react'
import docs from './docs.md'
import './styles.scss'



export default ({className = ''}) => {
  return (
    <div className={`auto-suggest ${className}`}>
      <input type="text" className="auto-suggest_input"/>
      <ul className="auto-suggest__suggestions">
        <li className="auto-suggest__suggestion">
          box
        </li>
        <li className="auto-suggest__suggestion">
          breadcrumb
        </li>
        <li className="auto-suggest__suggestion">
          button
        </li>
      </ul>
    </div>
  )
}

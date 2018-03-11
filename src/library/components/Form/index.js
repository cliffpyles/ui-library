import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const FormControl = ({children, className = ''}) => {
  return (
    <div className={`form__control ${className}`}>
      {children}
    </div>
  )
}

export default ({children, className = ''}) => {
  return (
    <form className={`form ${className}`}>
      {children}
    </form>
  )
}

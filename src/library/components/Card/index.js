import React from 'react'
import docs from './docs.md'
import './styles.scss'



export const CardHeader = ({children}) => {
  return (
    <div className="card__header">
      {children}
    </div>
  )
}
export const CardBody = ({children}) => {
  return (
    <div className="card__body">
      {children}
    </div>
  )
}
export const CardFooter = ({children}) => {
  return (
    <div className="card__footer">
      {children}
    </div>
  )
}
export default ({children, className = ''}) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  )
}

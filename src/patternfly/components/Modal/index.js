import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export const ModalDialogHeader = ({children, className = ''}) => {
  return (
    <div className={`pf-c-modal__dialog__header ${className}`}>
      {children}
    </div>
  )
}

export const ModalDialogBody = ({children, className = ''}) => {
  return (
    <div className={`pf-c-modal__dialog__body ${className}`}>
      {children}
    </div>
  )
}

export const ModalDialogFooter = ({children, className = ''}) => {
  return (
    <div className={`pf-c-modal__dialog__footer ${className}`}>
      {children}
    </div>
  )
}

export default ({children, className = ''}) => {
  return (
    <div className={`pf-c-modal ${className}`}>
      <div className="pf-c-modal__dialog">
        {children}
      </div>
    </div>
  )
}

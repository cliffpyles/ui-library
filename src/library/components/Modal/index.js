import React from 'react'
import docs from './docs.md'
import './styles.scss'



export const ModalDialogHeader = ({children, className = ''}) => {
  return (
    <div className={`modal__dialog__header ${className}`}>
      {children}
    </div>
  )
}

export const ModalDialogBody = ({children, className = ''}) => {
  return (
    <div className={`modal__dialog__body ${className}`}>
      {children}
    </div>
  )
}

export const ModalDialogFooter = ({children, className = ''}) => {
  return (
    <div className={`modal__dialog__footer ${className}`}>
      {children}
    </div>
  )
}

export default ({children, className = ''}) => {
  return (
    <div className={`modal ${className}`}>
      <div className="modal__dialog">
        {children}
      </div>
    </div>
  )
}

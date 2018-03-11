import React from 'react'
import docs from './docs.md'
import './styles.scss'


export const WorkspacePane = ({children, className = ''}) => {
  return (
    <div className={`workspace__pane ${className}`}>
      {children}
    </div>
  )
}

export const WorkspaceHeader = ({children, className = ''}) => {
  return (
    <div className={`workspace__header ${className}`}>
      {children}
    </div>
  )
}

export const WorkspaceSidebar = ({children, className = ''}) => {
  return (
    <div className={`workspace__sidebar ${className}`}>
      {children}
    </div>
  )
}

export const WorkspaceMain = ({children, className = ''}) => {
  return (
    <div className={`workspace__main ${className}`}>
      {children}
    </div>
  )
}

export const WorkspaceFooter = ({children, className = ''}) => {
  return (
    <div className={`workspace__footer ${className}`}>
      {children}
    </div>
  )
}
export default ({children, className = ''}) => {
  return (
    <div className={`workspace ${className}`}>
      {children}
    </div>
  )
}

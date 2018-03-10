import React from 'react'
import docs from './docs.md'
import './styles.scss'



export const TreeNodeToggle = () => {
  return (
    <button className="tree_toggle">
      <i className="fas fa-plus"></i>
    </button>
  )
}

export const TreeNode = ({children, className = '', name = ''}) => {
  const nodeType = (children) ? 'is-parent' : 'is-leaf'
  const hasChildren = children || false
  return (
    <div className={`tree__node ${className} ${nodeType}`}>
      {hasChildren && <TreeNodeToggle />}
      <div className="tree__node_name">{name}</div>
      {children}
    </div>
  )
}

export default ({children, className = ''}) => {
  return (
    <div className={`tree ${className}`}>
      {children}
    </div>
  )
}

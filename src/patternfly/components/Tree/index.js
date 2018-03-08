import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export const TreeNodeToggle = () => {
  return (
    <button className="pf-c-tree_toggle">
      <i className="fas fa-plus"></i>
    </button>
  )
}

export const TreeNode = ({children, className = '', name = ''}) => {
  const nodeType = (children) ? 'is-parent' : 'is-leaf'
  const hasChildren = children || false
  return (
    <div className={`pf-c-tree__node ${className} ${nodeType}`}>
      {hasChildren && <TreeNodeToggle />}
      <div className="pf-c-tree__node_name">{name}</div>
      {children}
    </div>
  )
}

export default ({children, className = ''}) => {
  return (
    <div className={`pf-c-tree ${className}`}>
      {children}
    </div>
  )
}

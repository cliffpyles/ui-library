import React from 'react'
import docs from './docs.md'
import './styles.scss'

const PanelGroupHeader = ({children, className = '', title}) => {
  return (
    <div className={`panel__group__header ${className}`}>
      {title && <h5 className="panel__group__header_title">{title}</h5>}
      {children}
    </div>
  )
}

export const PanelGroup = ({children, className = '', title}) => {
  return (
    <div className={`panel__group ${className}`}>
      {title && <PanelGroupHeader title={title} />}
      <div className="panel__group__body">
        {children}
      </div>
    </div>
  )
}

export default ({children, className = '', title, isExpanded = true}) => {
  const isExpandedClass = (isExpanded) ? '' : 'is-collapsed'

  return (
    <div className={`panel ${className} ${isExpandedClass}`}>
      <div className="panel__header">
        <button className="panel_toggle">
          {isExpanded
            ? <i class="fas fa-caret-right"></i>
            : <i class="fas fa-caret-left"></i>}
        </button>
        {title && <h4 className="panel__header_title">{title}</h4>}
      </div>
      <div className="panel__body">
        {children}
      </div>
    </div>
  )
}

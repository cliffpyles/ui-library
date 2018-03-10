import React from 'react'

import './styles.scss'

export default ({children, isViewport = false}) => {
  return (
    <div className="Preview">
      <h4 className="Preview_heading">Preview{isViewport ? ' (Represents Viewport)' : ''}</h4>
      <div className={`Preview__body ${isViewport ? 'is-viewport' : ''}`}>
        {children}
      </div>
    </div>
  )
}

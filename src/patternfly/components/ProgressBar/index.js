import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs
const HorizontalBar = ({value = 0, max = 100}) => {
  const progress = (value / max) * 100
  return (
    <svg className="pf-c-progress-bar__horizontal-bar" width="100%" height="100%">
      <rect
        className="pf-c-progress-bar__horizontal-bar_progress"
        fill="currentColor"
        x="0"
        y="0"
        width={`${progress}%`}
        height="100%" />
    </svg>
  )
}

export default ({className = '', value, max = 100}) => {
  return (
    <div className={`pf-c-progress-bar ${className}`}>
      <progress className="pf-c-progress-bar_element" value={value} max={max}></progress>
      <div className="pf-c-progress-bar__indicator">
        <HorizontalBar value={50} />
      </div>
    </div>
  )
}

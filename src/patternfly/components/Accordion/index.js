import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export const AccordionItem2 = ({children, title, isExpanded = false, onClick = false}) => {
  const icon = (isExpanded) ? <i className="fas fa-caret-down"></i> : <i className="fas fa-caret-down"></i>
  const itemExpandedClass = (isExpanded) ? 'is-expanded' : ''
  const executeClickHandler = function() {
    console.log(isExpanded)
    isExpanded = !isExpanded
    console.log(isExpanded)
    if (onClick) {
      onClick()
    }
  }
  return (
    <div className={`pf-c-accordion__item ${itemExpandedClass}`} onClick={executeClickHandler}>
      <div className="pf-c-accordion__item__header">
        {icon}
        <h3 className="pf-c-accordion__item_title">{title}</h3>
      </div>
      <div className="pf-c-accordion__item__body">
        {children}
      </div>
    </div>
  )
}

export class AccordionItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isExpanded: (props.isExpanded) ? props.isExpanded : false
    }
    this.toggleBody = this.toggleBody.bind(this)
  }
  toggleBody () {
    console.log('working')
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }))
  }
  render () {
    let itemExpandedClass = (this.state.isExpanded) ? 'is-expanded' : ''
    let icon

    if (this.state.isExpanded) {
      icon = <i className="fas fa-caret-down"></i>
    } else {
      icon = <i className="fas fa-caret-right"></i>
    }
    return (
      <div className={`pf-c-accordion__item ${itemExpandedClass}`}>
        <div className="pf-c-accordion__item__header" onClick={this.toggleBody}>
          {icon}
          <h3 className="pf-c-accordion__item_title">{this.props.title}</h3>
        </div>
        <div className="pf-c-accordion__item__body">
          {this.props.children}
        </div>
      </div>
    )
  }
}


export default ({children, className = ''}) => {
  return (
    <div className={`pf-c-accordion ${className}`}>
      {children}
    </div>
  )
}

import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

class OverflowMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isExpanded: (props.isExpanded) ? props.isExpanded : false,
      className: (props.className) ? props.className : ''
    }

    this.toggleBody = this.toggleBody.bind(this)
  }
  toggleBody () {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }))
  }
  render () {
    let itemExpandedClass = (this.state.isExpanded) ? 'is-expanded' : ''
    let className = (this.state.className) ? this.state.className : ''

    return (
      <div className={`pf-c-overflow-menu ${className} ${itemExpandedClass}`}>
        <button className="pf-c-overflow-menu_toggle" onClick={this.toggleBody}>
          <i className="fas fa-ellipsis-v"></i>
        </button>
        <div className="pf-c-overflow-menu__body">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default OverflowMenu

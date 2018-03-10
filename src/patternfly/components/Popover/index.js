import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

class Popover extends React.Component {
  constructor (props) {
    super(props)
    let {
      children,
      className = '',
      message = '',
      isToggled = false
    } = props
    this.state = {
      className,
      message,
      isToggled,
      toggledClass: isToggled ? 'is-toggled' : ''
    }

    this.toggleMessage = this.toggleMessage.bind(this)
    this.hideMessage = this.hideMessage.bind(this)
  }

  toggleMessage () {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled,
      toggledClass: !prevState.isToggled ? 'is-toggled' : ''
    }))
  }

  hideMessage () {
    this.setState(prevState => ({
      isToggled: false,
      toggledClass: ''
    }))
  }

  render () {
    return (
      <span className={`pf-c-popover ${this.state.className} ${this.state.toggledClass}`}>
        <button className="pf-c-popover_toggle" onClick={this.toggleMessage} onBlur={this.hideMessage}>
          {this.props.children}
        </button>
        <span className="pf-c-popover_message">{this.state.message}</span>
      </span>
    )
  }
}

export default Popover

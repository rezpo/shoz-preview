import React, { Component } from 'react'
import './Button.scss'

export default class Button extends Component {

  buttonSubject = subject => {
    switch (subject) {
      case 'primary':
        return 'Container__button-primary'
      case 'secondary':
        return 'Container__button-secondary'
      case 'tertiary':
        return 'Container__button-tertiary'
      default:
        return 'Container__button-primary'
    }
  }
  render() {

    const buttonSubjectStyle = this.buttonSubject(
      this.props.subject ? this.props.subject : 'Container__button-primary'
    )

    return (
      <button className={buttonSubjectStyle} onClick={this.props.action} type={this.props.type} style={this.props.style}>
        {this.props.text}
        {this.props.icon}
      </button>
    )
  }
}

import React, { Component } from 'react'
import './Break.scss'

export default class Break extends Component {
  
  render() {
    return (
      <div className='Container__break-wrapper'>
        <div className='title'>{this.props.title}</div>
        <div className='linebreak'></div>
      </div>
    )
  }
}

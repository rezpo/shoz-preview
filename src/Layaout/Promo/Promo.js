import React, { Component } from 'react'
import './Promo.scss'
import Button from '../../Components/Button/Button'
export default class Promo extends Component {
  render() {
    return (
      <div className='Container__promo-wrapper'>
        <img src='https://www.dropbox.com/s/wgzvk8jykocq8dd/main-banner.jpg?raw=1' className='banner' alt='promo' />
        <div className='viewpromo'>
          <h2 className='title'>Officia ex veniam eiusmod</h2>
          <Button
            subject='primary'
            text='Wow, let me see!'
            style={{margin: '0 auto'}}
          />
        </div>

      </div>
    )
  }
}

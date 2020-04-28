import React, { Component } from 'react'
import './Header.scss'
import Menu from '../Menu/Menu'
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa'
import { ReactComponent as Logo } from '../../Assets/logo.svg'

export default class Header extends Component {
  render() {
    return (
      <div className='Container__header-wrapper'>
        <div className='Container__header-logo'>
          <Logo />
        </div>
        <Menu />
        <div className='Container__header-menu'>
          <div className='block'>
            <FaUserAlt size='1em' className='item' />
          </div>
          <div className='block'>
            <FaShoppingCart size='1em' className='item' />
          </div>
        </div>
      </div>
    )
  }
}

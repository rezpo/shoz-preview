import React, { Component } from 'react'
import './Footer.scss'
import { FaFacebookF, FaYoutube } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { ReactComponent as Logo } from '../../Assets/logo.svg'

export default class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      company: [
        'About us',
        'Story',
        'Benefits',
        'FAQs',
      ],
      client: [
        'Client service',
        'Purchase',
        'Assistance',
        'Devilvery',
        'Payment',
        'Claims'
      ],
      legal: [
        'Legal',
        'Terms & Conditions',
        'Privacy Policy'
      ]

    };
  }

  render() {

    let { company, client, legal } = this.state

    return (
      <div className='Container__footer-wrapper'>
        <div className='Container__footer-info'>
          <div className='brand'>
            <Logo />
            <ul className='rss-list'>
              <li className='rss'><a href='/' className='anchor'><AiFillInstagram size='1.1em' /></a></li>
              <li className='rss'><a href='/' className='anchor'><FaFacebookF size='1.1em' /></a></li>
              <li className='rss'><a href='/' className='anchor'><FaYoutube size='1.1em' /></a></li>
            </ul>
          </div>
          <div className='block'>
            <ul className='menu'>
              {company.map(item => {
                return (
                  <li className='item' key={item}><a className='anchor' href='/'>{item}</a></li>
                )
              })}
            </ul>
          </div>
          <div className='block'>
            <ul className='menu'>
              {client.map(item => {
                return (
                  <li className='item' key={item}><a className='anchor' href='/'>{item}</a></li>
                )
              })}
            </ul>
          </div>
          <div className='block'>
            <ul className='menu'>
              {legal.map(item => {
                return (
                  <li className='item' key={item}><a className='anchor' href='/'>{item}</a></li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

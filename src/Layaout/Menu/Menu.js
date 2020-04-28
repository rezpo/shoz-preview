import React, { Component } from 'react'
import './Menu.scss'
import Client from '../../Contentful'

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: []
    };
  }

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'newHeaderMenu'

      })

      this.setState({
        menu: response.items
      })

    } catch (error) { }
  }

  componentDidMount() {
    this.getData()
  }

  render() {

    let { menu } = this.state

    return (
      <div className='Container__menu-wrapper'>
        <ul className='Container__menu-categories'>
          {menu.map((item, index) => {

            let items = item.fields
            return (
              <li className='category' key={index}><a href={items.link} className='anchor'>{items.title}</a></li>
            )
          })}
        </ul>
      </div>
    )
  }
}

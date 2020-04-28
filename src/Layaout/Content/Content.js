import React, { Component } from 'react'
import './Content.scss'
import Promo from '../Promo/Promo'
import Catalog from '../Catalog/Catalog'
import Client from '../../Contentful'
export default class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActiveComponent: []
    }
  }

  getData = async () => {
    await Client.getEntries({
      content_type: 'activeMainCatalog',
      select: 'fields,sys.id'
    })
      .then((response) => {
        this.setState({
          isActiveComponent: response.items,
        })
      })
  }

  componentDidMount() {
    this.getData()
  }
  render() {
    let { isActiveComponent } = this.state

    return (
      <div className='Container__content-wrapper'>
        <Promo />
        {isActiveComponent.map(item => {

          let items = item.fields
          let isActive = items.activeComponent

          if (isActive === 'Active') {
            return <Catalog />
          }

        })}
      </div>
    )
  }
}

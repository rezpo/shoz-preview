import React, { Component } from 'react'
import './Collection.scss'
import Button from '../../Components/Button/Button'
import Client from '../../Contentful'

export default class Collection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newCollections: []
    }
  }

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'newInspirationCollection'
      })

      this.setState({
        newCollections: response.items
      })
    } catch (error) { }
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    let { newCollections } = this.state

    return (
      <div className='Container__collection-wrapper'>
        {newCollections.map((item, index) => {

          let items = item.fields
          return (
            <div className="Container__collection-window" key={index}>
              <div className='Container__collection-features'>
                <h2 className='title'>{items.title}</h2>
                <p className='note'>{items.description}</p>
                <Button
                  subject='primary'
                  text='Buy this look'
                />
              </div>
              <div className='Container__collection-inspiration'>
                <img src={items.photoUrl} alt={items.title} className='cover' />
                <div className='set'>
                  {items.featuresProducts.map(product => {
                    return (
                      <div className='product' key={product.sku}>
                        <img src={product.photo} alt={product.title} className='picture' />
                        <div className='price'>${product.price.toFixed(1)}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )

        })}
      </div>
    )
  }
}

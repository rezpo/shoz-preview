import React, { Component } from 'react'
import './Catalog.scss'
import Discount from '../../Components/Discount/Discount'
import { FaShoppingCart, FaEye, FaArrowCircleDown, FaArrowCircleUp, FaFilter } from 'react-icons/fa'
import Client from '../../Contentful'

export default class Catalog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
      order: 'fields.price'
    }
  }
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'product',
        select: 'fields,sys.id',
        order: this.state.order
      })

      this.setState({
        shoes: response.items,
      })

    } catch (error) {

    }
  }


  componentDidMount() {
    this.getData()
  }

  render() {
    let { shoes, order } = this.state

    return (
      <div className="Container__catalog-filter">
        <div className="filter">
          <div className="option">
            <FaFilter size='1em' />
          </div>
          <div className="option">
            <FaArrowCircleDown size='1em' />
          </div>
          <div className="option">
            <FaArrowCircleUp size='1em' />
          </div>
        </div>
        <div className='Container__catalog-wrapper'>
          {shoes.map(item => {
            let isPromo
            let beforePrice
            let items = item.fields

            items.promo ? isPromo = <div className='promo'>{items.discount}%<small className='title'>OFF</small></div> : isPromo = null
            items.promo ? beforePrice = <small className='before'>${items.price.toFixed(1)}</small> : beforePrice = null

            return (
              <div className='Container__catalog-product' key={items.sku}>
                {isPromo}
                <div className='detail'>
                  <strong className='name'>{items.name}</strong>
                  <div className='note'>
                    <p className='description'>{items.description}</p>
                  </div>
                  <div className='recomendations'>
                    <small className='title'>Its a match</small>
                    <div className='match'>
                      <div className='product'>
                        <img src='https://via.placeholder.com/40x40' alt='its a match' />
                      </div>
                      <div className='product'>
                        <img src='https://via.placeholder.com/40x40' alt='its a match' />
                      </div>
                      <div className='product'>
                        <img src='https://via.placeholder.com/40x40' alt='its a match' />
                      </div>
                    </div>
                  </div>
                  <div className='action'>
                    <div className='addtocart'>
                      <FaShoppingCart size='1.6em' className='iconic' />
                    </div>
                    <div className='viewpdp'>
                      <FaEye size='1.6em' className='iconic' />
                    </div>
                  </div>
                </div>
                <div className='body'>
                  <div className='picture'>
                    <img src={items.photoUrl} alt={items.shortDescription} />
                  </div>
                </div>
                <div className='footer'>
                  <div className='info'>
                    <strong className='name'>{items.name}</strong>
                    <small className='desc'>{items.shortDescription}</small>
                  </div>
                  <div className='price'>
                    {beforePrice}
                    <span>$<Discount original_price={items.price} discount_applied={items.discount} /></span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

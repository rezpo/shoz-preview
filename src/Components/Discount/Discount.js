import React, { Component } from 'react'

export default class Discount extends Component {

  discountHanlder = () => {
    let originalPrice = this.props.original_price
    let discountApplied = this.props.discount_applied
    let finalPrice
    const amountToDiscount = (originalPrice * discountApplied) / 100
    finalPrice = originalPrice - amountToDiscount

    return finalPrice.toFixed(1)
  }
  render() {
    return (
      <span className='after-discount'>{this.discountHanlder()}</span>
    )
  }
}

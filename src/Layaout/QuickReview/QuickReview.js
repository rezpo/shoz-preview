import React, { Component } from 'react'
import './QuickReview.scss'
import Button from '../../Components/Button/Button'
import Client from '../../Contentful'

export default class Quick_review extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newReview: []
    }
  }

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'newProductReview'
      })

      this.setState({
        newReview: response.items
      })

    } catch (error) {}
  }

  componentDidMount() {
    this.getData()
  }

  render() {

    let { newReview } = this.state

    return (
      <div className='Container__quickreview-wrapper'>
        {newReview.map((item, index) => {

          let items = item.fields

          return (
            <div className='Container__quickreview-window' key={index}>
              <div className='Container__quickreview-counter'>
                <img src={items.photoUrl} class='product' alt='New product review' />
              </div>
              <div className='Container__quickreview-review'>
                <div className='note'>
                  <h1>{items.title}</h1>
                  <p>{items.review}</p>
                  <Button
                    subject='secondary'
                    text="I'm Interested"
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

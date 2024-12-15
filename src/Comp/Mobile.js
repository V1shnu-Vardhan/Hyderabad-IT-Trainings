import React, { Component } from 'react'

export default class Mobile extends Component {
  render() {
    return (
      <div className='mob'>
        <figure>
            <img src={this.props.path} alt=''/>
            <figcaption>
                <h1>{this.props.name}</h1>
                <p>{this.props.price}</p>
                <p>Price only</p>
            </figcaption>
        </figure>

      </div>
    )
  }
}

import React, { Component } from 'react'

export default class State1 extends Component {
    constructor(){
        super()
        this.updatePrice = this.updatePrice.bind(this);
        this.state={
            product : "iphoneXr",
            price : 38500
        }
    }
  render() {
    return (
      <div>
        <h1>product:{this.state.product}</h1>
        <p>price:{this.state.price}</p>

        <input id='price' type='number'/>
        <button onClick={this.updatePrice}>Update</button>

      </div>
    )
  }

  updatePrice(){
    let p = document.getElementById("price").value;
    console.log(p)
    this.setState({
        price : p
    },()=>{
        console.log(this.state)
    })
    }
  }

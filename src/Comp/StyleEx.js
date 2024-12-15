import React, { Component } from 'react'
import './style.css'

export default class StyleEx extends Component {
  render() {
    let s1 = {
        background:"green",
        color:"white"
    }
    return (
        <div>
            <h1 style={{color:"red"}}>Inline css</h1>
            <h2 style={s1}>Internal css</h2>
            <h3  className='ex'>External css</h3>
        </div>
      
    )
  }
}

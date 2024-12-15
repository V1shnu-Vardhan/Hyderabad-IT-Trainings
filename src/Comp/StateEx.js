import React, { Component } from 'react'

export default class StateEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    updateState=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div className=' container p-5'>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.updateState}>Update</button>
        </div>
    )
  }
}

import React, { Component } from 'react'

export default class State extends Component {
    constructor(props){
        super(props);
        this.state={
            counter:0
        }

    }
    updateCounter = ()=>{
        this.setState({
            counter:this.state.counter+1,
        })
    }

  render() {
    return (
      <div>
        <h1>Counter:{this.state.counter}</h1>
        <button onClick={this.updateCounter}>click</button>

      </div>
    )
  }
}

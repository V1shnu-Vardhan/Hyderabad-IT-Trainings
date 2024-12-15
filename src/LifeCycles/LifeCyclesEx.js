import React, { Component } from 'react'

export default class LifeCyclesEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      console.log("constructor")
    }
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps")
        return ' '
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    updateState = ()=>{
        this.setState({
            count:this.state.count+1

        })

    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return 'true'
    }
    getSnapshotBeforeUpdate(preProp,preState){
        console.log("getSnapshotBeforeupdate" + preState.count)
        return ''
    }
    componentDidUpdate(){
        console.log("componentdidupdate"+ this.state.count)
    }

  render() {
    console.log("render")
    return (
      <div className=' container p-5'>
        <h1>count:{this.state.count}</h1>
        <button onClick={this.updateState}>Update</button>
      </div>
    )
  }
}

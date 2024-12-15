import React, { Component } from 'react'
import Welcome from './Welcome';

export default class Unmounting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         login:true
      }
    }
    Logout = ()=>{
        this.setState({
            login:false
        })
    }
  render() {
    let msg ="";
    if(this.state.login){
        msg = <Welcome/>
    }
    else{
        msg="please login again "
    }
    return (
      <div className=' container p-5'>
        <h1>{msg}</h1>
        <button onClick={this.Logout}>Logout</button>


      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Welcome extends Component {
    componentWillUnmount(){
        alert("Are you sure")
    }
  render() {
    return (
      <div className=' container p-5'>Welcome to admin dash boards</div>
    )
  }
}

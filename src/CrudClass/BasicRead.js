import axios from 'axios'
import React, { Component } from 'react'

export default class BasicRead extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((res)=>{
           this.setState({
            users:res.data
           })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  render() {
    return (
      <div className=' container p-5'>
        <h1>Basic read length-{this.state.users.length}</h1>
        <table className=' table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>company</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.users.map((user,index)=>{
                        return(
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.company.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}

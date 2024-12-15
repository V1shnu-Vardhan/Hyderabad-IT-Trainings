import axios from 'axios'
import React, { Component } from 'react'

export default class AddEmployee extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"",
         role:"",
         branch:""
      }
    }
    changeData = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    postEmp = (e)=>{
        e.preventDefault();
        axios.post(`http://localhost:4001/employees`,this.state)
        .then((res)=> alert("New Employee added"))
        .catch((err)=> console.log(err)) 
    }

  render() {
    const {name,role,branch} = this.state
    return (
      <div className=' container p-5'>
        <h1>Add Employees by using post </h1>
        <form onSubmit={this.postEmp}>
            <input type='text' name='name' value={name} onChange={this.changeData} placeholder='enter name' className=' form-control mb-3'/>
            <input type='text' name='role' value={role} onChange={this.changeData} placeholder='enter role' className=' form-control mb-3'/>
            <input type='text' name='branch' value={branch} onChange={this.changeData} placeholder='enter branch' className=' form-control mb-3'/>
            <input type='submit'/>
            
        </form>
      </div>
    )
  }
}

import axios from 'axios'
import React, { Component } from 'react'

export default class Employees extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        id:"",
        name:"",
        role:"",
        branch:"",
         employees:[]
      }
    }
    componentDidMount(){
        axios.get(`http://localhost:4001/employees`)
        .then((res)=>{
            this.setState({
                employees:res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    deleteEmp = (empId)=>{
        axios.delete(`http://localhost:4001/employees/${empId}`)
        .then((res)=> alert("employee got deleted"))
        .catch((err)=> console.log(err))
    }
   
    getOneRecord = (empId)=>{
        axios.get(`http://localhost:4001/employees/${empId}`)
        .then((res)=>{
            this.setState({
                id:res.data.id,
                name:res.data.name,
                role:res.data.role,
                branch:res.data.branch
            })
        })
        .catch((err)=> console.log(err))
    }
    changeData = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    putEmp = (e)=>{
        const {id,name,role,branch} = this.state
        e.preventDefault();
        axios.put(`http://localhost:4001/employees/${id}`,{id,name,role,branch})
        .then((res)=> alert("Employee details updated"))
        .catch((err)=> console.log(err))
    }

    
  render() {
    const {name,role,branch} = this.state
    return (
      <div className=' container p-5'>
        <h1>Employees-{this.state.employees.length}</h1>
        <table className=' table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Branch</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.employees.map((emp,index)=>{
                        return(
                            <tr key={index}>
                                <td>{emp.name}</td>
                                <td>{emp.role}</td>
                                <td>{emp.branch}</td>
                                <td>
                                  <button data-bs-target='#update' data-bs-toggle='modal' onClick={()=>this.getOneRecord(emp.id)} className=' me-3'>Edit</button>
                                    <button onClick={()=>this.deleteEmp(emp.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <div className=' modal fade' id='update'>
            <div className=' modal-dialog'>
                <div className=' modal-content'>
                    <div className=' modal-header'>
                        <h5 className=' modal-title'>Update Employee</h5>
                    </div>
                    <div className=' modal-body'>
                    <form onSubmit={this.putEmp}>
            <input type='text' name='name' value={name} onChange={this.changeData} placeholder='enter name' className=' form-control mb-3'/>
            <input type='text' name='role' value={role} onChange={this.changeData} placeholder='enter role' className=' form-control mb-3'/>
            <input type='text' name='branch' value={branch} onChange={this.changeData} placeholder='enter branch' className=' form-control mb-3'/>
            <input type='submit'/>
            
        </form>

                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

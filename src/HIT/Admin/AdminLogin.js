import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const loginCheck = (e)=>{
        e.preventDefault();
        if(username ==='admin' && password ==='admin'){
            navigate('/dashboard')
        }
        else{
            alert("Invalid credentials")
        }
    }
  return (
    <div className=' container p-5'>
        <div className=' shadow p-5 col-lg-6 mx-auto'>
            <h2 className=' text-center mb-4'>Admin Login</h2>
            <form onSubmit={loginCheck}>
                <div className=' form-group'>
                    <label for='username'>username</label>
                    <input type='text' className=' form-control mb-3' id='username' value={username} onChange={(e)=> setUsername(e.target.value)}/>
                </div>
                <div className=' form-group'>
                    <label for='password'>Password</label>
                    <input type='text' className=' form-control mb-3' id='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <input type='submit' className=' btn btn-success form-control' value={"Login"}/>
            </form>
        </div>
    </div>
  )
}

export default AdminLogin
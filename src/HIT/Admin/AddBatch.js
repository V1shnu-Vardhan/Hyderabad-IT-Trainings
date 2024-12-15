import axios from 'axios'
import React, { useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify'

function AddBatch() {
    const [course,setCourse] = useState("")
    const [startDate,setstartDate] = useState("")
    const [duration,setDuration] = useState("")
    const [timinings,setTiminings] = useState("")
    const [trainer,setTrainer] = useState("")
    const postBatch = (e)=>{
        e.preventDefault();
        axios.post(`http://localhost:4001/batch`,{course,startDate,duration,timinings,trainer})
        .then((res)=>{
            toast.success('🦄 New Batch added', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
        })
        .catch((err)=> console.log(err))
    }
  return (
    <div className=' container p-5'>
        <h1>Add Batch</h1>
        <ToastContainer/>
        <form onSubmit={postBatch}>
        <input type='text' name='course' value={course} onChange={(e)=> setCourse(e.target.value)} placeholder='Enter Course' className=' form-control mb-3'/>
        <input type='date' name='startDate' value={startDate} onChange={(e)=> setstartDate(e.target.value)} placeholder='Enter StartDate' className=' form-control mb-3'/>
        <input type='number' name='duration' value={duration} onChange={(e)=> setDuration(e.target.value)} placeholder='Enter Duration' className=' form-control mb-3'/>
        <input type='text' name='timinings' value={timinings} onChange={(e)=> setTiminings(e.target.value)} placeholder='Enter Timings' className=' form-control mb-3'/>
        <input type='text' name='trainer' value={trainer} onChange={(e)=> setTrainer(e.target.value)} placeholder='Enter Trainer' className=' form-control mb-3'/>
        <input type='submit' className=' btn btn-danger form-control'/>
        </form>
    </div>
  )
}

export default AddBatch
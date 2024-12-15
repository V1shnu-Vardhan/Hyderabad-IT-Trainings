import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

function BatchesData() {
    const [batches,setBatches] = useState([])
    const [id,setId] = useState("")
    const [course,setCourse] = useState("")
    const [startDate,setstartDate] = useState("")
    const [duration,setDuration] = useState("")
    const [timinings,setTiminings] = useState("")
    const [trainer,setTrainer] = useState("")
    
    useEffect(()=>{
        axios.get(`http://localhost:4001/batch`)
        .then((res)=> setBatches(res.data))
        .catch((err)=> console.log(err))
    })
   const deleteBatch = (batchId)=>{
        axios.delete(`http://localhost:4001/batch/${batchId}`)
        .then((res)=>{
            toast.success('Batch Deleted Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
        .catch((err) => console.log(err))
    }
    const getOneRecord =(batchId)=>{
        axios.get(`http://localhost:4001/batch/${batchId}`)
        .then((res)=>{
            setId(res.data.id)
            setCourse(res.data.course)
            setstartDate(res.data.startDate)
            setDuration(res.data.duration)
            setTiminings(res.data.timinings)
            setTrainer(res.data.trainer)
        })
        .catch((err)=> console.log(err))
    }
    const putBatch = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:4001/batch/${id}`,{id,course,startDate,duration,timinings,trainer})
        .then((res)=>{
            toast.success('Batch Details Updated', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });


        })
        .catch((err)=> console.log(err))
    }

  return (
    <div className=' container p-5'>
        <h1>Batches Data</h1>
        <ToastContainer/>

       < table className=' table table-bordered table-striped'>
          <thead>
            <tr>
              <th>Course</th>
              <th>Start Date</th>
              <th>Duration</th>
              <th>Timings</th>
              <th>Trainer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              batches.map((course)=>{
                return(
                  <tr>
                    <td>{course.course}</td>
                    <td>{course.startDate}</td>
                    <td>{course.duration}</td>
                    <td>{course.timinings}</td>
                    <td>{course.trainer}</td>
                    <td>
                        <button onClick={()=> getOneRecord(course.id)} data-bs-target="#update" data-bs-toggle="modal" className=' me-3 btn btn-primary'>
                        <i class="bi bi-pencil"></i>
                        </button>
                        <button onClick={()=> deleteBatch(course.id)} className=' btn btn-danger'>
                        <i class="bi bi-trash3"></i>
                        </button>
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
                        <h5>Update Batch details</h5>
                    </div>
                    <div className=' modal-body'>
        <form onSubmit={putBatch}>
        <input type='text' name='course' value={course} onChange={(e)=> setCourse(e.target.value)} placeholder='Enter Course' className=' form-control mb-3'/>
        <input type='date' name='startDate' value={startDate} onChange={(e)=> setstartDate(e.target.value)} placeholder='Enter StartDate' className=' form-control mb-3'/>
        <input type='number' name='duration' value={duration} onChange={(e)=> setDuration(e.target.value)} placeholder='Enter Duration' className=' form-control mb-3'/>
        <input type='text' name='timinings' value={timinings} onChange={(e)=> setTiminings(e.target.value)} placeholder='Enter Timings' className=' form-control mb-3'/>
        <input type='text' name='trainer' value={trainer} onChange={(e)=> setTrainer(e.target.value)} placeholder='Enter Trainer' className=' form-control mb-3'/>
        <input type='submit' className=' btn btn-danger form-control'/>
        </form>

                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default BatchesData
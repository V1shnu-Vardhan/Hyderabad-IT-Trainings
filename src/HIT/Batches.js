import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Batches = () => {
  const[batch,setBatch] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:4001/batch`)
    .then((res)=>{
      setBatch(res.data)
    })
    .catch((err)=> console.log(err))
  })

  return (
    <div className=' container'>
        <h1>Upcoming Batches</h1>
        <table className=' table table-bordered table-striped'>
          <thead>
            <tr>
              <th>Course</th>
              <th>Start Date</th>
              <th>Duration</th>
              <th>Timings</th>
              <th>Trainer</th>
            </tr>
          </thead>
          <tbody>
            {
              batch.map((course)=>{
                return(
                  <tr>
                    <td>{course.course}</td>
                    <td>{course.startDate}</td>
                    <td>{course.duration}</td>
                    <td>{course.timinings}</td>
                    <td>{course.trainer}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default Batches
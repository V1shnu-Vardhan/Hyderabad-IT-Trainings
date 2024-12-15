import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewCourses = () => {
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:4001/courses`)
        .then((res)=> setCourses(res.data))
        .catch((err)=> console.log(err))
    })
  return (
    <div className=' container p-5'>
        <h1 className=' text-center'>View Courses</h1>
        <table className=' table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Course Skills</th>
                    <th>Course Duration</th>
                </tr>
            </thead>
            <tbody>
                {
                      courses.map((course,index)=>{
                        return(
                            <tr key={index}>
                                <td>{course.course}</td>
                                <td>{course.skills}</td>
                                <td>{course.duration}</td>
                            </tr>
                        )
                      })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ViewCourses
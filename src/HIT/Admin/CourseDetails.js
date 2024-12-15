import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SendEnquiry from '../SendEnquiry'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    const [course,setCourse] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:4001/courses/${id}`)
        .then((res)=> setCourse(res.data))
        .catch((err)=> console.log(err))
    })
  return (
    <div className=' container p-5'>
           <div className=' row'>
            <div className=' col-lg-8'>
            <h2>{course.course}</h2>
            <p className=' btn btn-success'>{course.skills}</p>
            <p>Learn with in {course.duration}Days</p>
            <p>{course.description}</p>
            <img src={course.imgRef} alt='' className=' w-100'/>

            </div>
            <div className=' col-lg-4'>
                <h2 className=' mb-5 py-3'>Regiester Here</h2>
                <SendEnquiry/>
            </div>
           </div>
    </div>
  )
}

export default CourseDetails
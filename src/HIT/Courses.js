import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Courses = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:4001/courses`)
        .then((res)=> setData(res.data))
        .catch((err)=> console.log(err))
    })
  return (
    <div className=' container p-5 text-center'>
        <h1>Courses</h1>
        <div className=' row'>
            {
                data.map((course,index)=>{
                    return(
                        <div className=' col-md-6 col-lg-4' key={index}>
                            <div className=' card'>
                                <img src={course.imgRef} alt='' className=' card-img-top'/>
                                <div className=' card-body'>
                                    <h5 className=' card-title'>{course.course}</h5>
                                   <NavLink to={`/courseDetails/${course.id}`}> <button className=' btn btn-danger form-control'>Know More</button></NavLink>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Courses
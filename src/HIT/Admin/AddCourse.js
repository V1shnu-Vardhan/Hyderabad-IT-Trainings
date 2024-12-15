import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const AddCourse = () => {
    const [course,setCourse] = useState({})
    const updateCourse = (e)=>{
        setCourse({...course,[e.target.name]:e.target.value})
    }
    const postCourse =(e)=>{
        e.preventDefault();
        console.log(course)
        axios.post(`http://localhost:4001/courses`, course)
        .then((res)=> toast("New Course Added"))
        .catch((err)=> console.log(err))
    }
  return (
    <div className=' container p-5'>
        <form onSubmit={postCourse}>
            <input type='text' name='course' placeholder=' Course Name' onChange={updateCourse} className=' form-control mb-3'/>
            <input type='text' name='imgRef' placeholder=' Course img Ref' onChange={updateCourse} className=' form-control mb-3'/>
            <input type='text' name='description' placeholder=' Course Description' onChange={updateCourse} className=' form-control mb-3'/>
            <input type='number' name='duration' placeholder=' Course Duration' onChange={updateCourse} className=' form-control mb-3'/>
            <input type='text' name='skills' placeholder='Course Skills' onChange={updateCourse} className=' form-control mb-3'/>
            <input type='submit' className=' btn btn-danger form-control'/>
        </form>

    </div>
  )
}

export default AddCourse
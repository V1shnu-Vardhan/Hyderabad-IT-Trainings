import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Batches from './Batches'
import Courses from './Courses'
import Contact from './Contact'
import AdminLogin from './Admin/AdminLogin'
import Dashboard from './Admin/Dashboard'
import Nopage from './Nopage'
import CourseDetails from './Admin/CourseDetails'
const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/batches' element={<Batches/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/courseDetails/:id' element={<CourseDetails/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/admin' element={<AdminLogin/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/*' element={<Nopage/>}/>
        </Routes>
    </div>
  )
}

export default Routing
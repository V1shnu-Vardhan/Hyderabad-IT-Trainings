import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Sale } from './Contact'
import { Sales } from './Contact'


function ErrorPage(){
  return(
   <div>
     <h1>Oops Not found</h1>
     <h2>404 Not found</h2>
   </div>
  )
}

export default function Routing() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='about/:name' element={<About/>}>
            </Route>
            <Route path='/contact' element={<Contact/>}>
               <Route path='sale' element={<Sale></Sale>}/>
               <Route path='sales' element={<Sales/>}/>


            </Route>
            <Route path='*' element={<ErrorPage></ErrorPage>}/>
        </Routes>

    </div>
  )
}

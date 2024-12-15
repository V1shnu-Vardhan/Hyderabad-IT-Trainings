import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Contact() {
  return (
    <div>
      <h2>This is  starting</h2>
      <Outlet></Outlet>


      <h1>This is Contact component</h1>

      <button> <Link to="Sale">Sale</Link></button>
      <button><Link to="sales">Sales</Link></button>


    </div>
  )
}

export function Sale(){
  <h1>This ekkt</h1>
}

export function Sales(){
  <h1>This is Sales Component</h1>
}

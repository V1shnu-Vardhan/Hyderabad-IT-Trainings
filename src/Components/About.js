import React from 'react'
import { useLocation, useParams, } from 'react-router-dom'


export default function About(){
  let {name} = useParams();
  let queryparams = useLocation();
  let queryparam = new URLSearchParams (queryparams.search);
  let categeory=queryparam.get('categeory')
  let post=queryparam.get('post')
  return (
    <div>
        <h1>This is About component </h1>
        <h2> About Name:{name}</h2>
        <h2>Cateogery:{categeory}</h2>
        <h2>Post:{post}</h2>
    </div>
  )
}

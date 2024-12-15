import { useState } from "react";
import React,{useEffect} from 'react'

export default function UseEffect() {
    let[counter,setCounter]=useState(100);
    let [timer,setTmer] = useState(0);
    useEffect(()=>{
        console.log("hello");
    },[counter])
  return (
    <div>
        <h2>timer:{timer}</h2>
        <h1>{console.log("world")}</h1>
        <button onClick={()=>{
            setTmer(timer+1)
        }}>Update timer</button>  <br></br><br></br>

        <h4>counter:{counter}</h4>
        <button onClick={()=>{
            setCounter(counter+1)
        }}>Update counter</button>


    </div>
  )
}

import React, { useState } from 'react'
import { useRef } from 'react'

export default function Useref1() {
    let ele = useRef(null)
    let x = useRef(10)
    const [y,sety] = useState(100)
    let z = 1000;
  return (
    <div>
        <h1 ref={ele}>This is heading tag</h1>
        <button onClick={()=>{console.log(ele)
            console.dir(ele.current)
            ele.current.innerHTML = "Changed"
        }}>Click</button>
        <h1>X value:{x.current}</h1>
        <h1>Z value:{z}</h1>
        <button onClick={()=>{
            x.current=x.current+10
            console.log(x.current)
            sety(y+100)
            z=z+1000;
        }}>increment</button>

    </div>
  )
}

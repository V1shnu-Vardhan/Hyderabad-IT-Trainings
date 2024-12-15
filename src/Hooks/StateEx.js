import React, { useEffect, useState } from 'react'

function StateEx() {
    const [count,setCount] = useState(0)
    const add = ()=>{
        setCount(count+1)
    }
    const sub = ()=>{
        setCount(count-1)
    }
    useEffect(()=>{
        document.title = 'you clicked {count} times'
    })
  return (
    <div className=' container p-5'>
        <h1>Count:{count}</h1>
        <button onClick={()=>add()}>Add</button> <br></br> <br></br>
        <button onClick={()=>sub()}>Sub</button>
    </div>
  )
}

export default StateEx
import React,{useState} from 'react'

export default function Binding() {
   let[num,updateNum]= useState(100);

  return (
    <div>
        <h1>{num}</h1>
        <button onClick={()=>{
            updateNum(200)
        }}>Click</button> <br></br><br></br>
        <input value={num} type='text' onChange={(e)=>{
           let temp =  e.target.value;
           updateNum(temp)

        }}/>
    </div>
  )
}

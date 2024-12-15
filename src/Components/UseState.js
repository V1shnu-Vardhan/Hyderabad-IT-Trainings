import React,{useState} from 'react'

export default function UseState() {
    let [counter,updateCounter] = useState(0)
    
  return (
    <div>
        <h1>Counter value:{counter}</h1>
        <button onClick={()=>{
            updateCounter(counter=counter+1)
        }}>updateCounter</button>
    </div>
  )

}

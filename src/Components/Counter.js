import React,{useState} from 'react'

export default function Counter() {
    let stock = 10;
    let [counter,setCounter] = useState(0)
  return (
    <div className='wrapper'>
        <button className='minus' disabled={counter===0} onClick={()=>{
            if(counter>0){
                setCounter(counter-1)
            }
        }}>-</button>
        <p>{counter}</p>
        <button className='plus' disabled={counter===stock} onClick={()=>{
            if(counter<stock){
                setCounter(counter+1)
            }
        }} >+</button>
        
    </div>
  )
}

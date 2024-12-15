import React,{useState} from 'react'

export default function VirtualDom() {
   let [count,setCount]= useState(0);
   
   function updateCount(){
    setCount(count+1)
   }

   let items = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={updateCount}>Increment</button>
        <ul>{

            items.map((item,index)=>{
                return(
                    <li> item:{item}</li>
                )
            })
            

            }

        </ul>
        
    </div>
  )
}

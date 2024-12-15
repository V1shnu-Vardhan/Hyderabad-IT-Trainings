import React, { useMemo, useState } from 'react'

const UseMemo1 = () => {
    const [counter,setCounter] = useState(1)

    const sum = useMemo(()=>{
        return num1+num2
    },[num1,num2])
   }

  return (
    <div className=' container p-5'>
       <h1> UseMemo1</h1>
       <h2>counter:{counter}</h2>
       <button onClick={()=>setCounter(counter+1)}>updateCounter</button>
       <h5>sum:{sum}</h5>



        </div>
  )

export default UseMemo1
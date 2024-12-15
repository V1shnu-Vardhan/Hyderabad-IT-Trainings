import React, { useCallback, useMemo, useState } from 'react'

const MemoEx = () => {
    const [count,setCount] = useState(0)
    const [number,setNumber] = useState(5)
    const result = useMemo(()=>{
        return Mul(number)
    },[number])
    const addNum = useCallback(()=>{
        setNumber(number+1)
    })
  return (
    <div className=' container p-5'>
        <h1>Count:{count}</h1>
        <button onClick={()=> setCount(count+1)}>Add</button>
        <h1>Result:{result}</h1>
        <button onClick={addNum}>Add</button>

    </div>
  )
}

const Mul =(num)=>{
    console.log("function is called")
    return num*num
}

export default MemoEx
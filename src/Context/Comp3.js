import React, { useContext } from 'react'
import { UserData } from './MainComp'

const Comp3 = () => {
    const [count,setCount] = useContext(UserData)
  return (
    <div className=' container p-5'>
        <h1>Comp3</h1>
        <h1>count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Add</button>

    </div>
  )
}

export default Comp3
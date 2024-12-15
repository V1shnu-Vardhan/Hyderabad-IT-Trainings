import React, { createContext, useState } from 'react'
import Comp1 from './Comp1'
export const UserData = createContext()

const MainComp = () => {
    const [count,setCount] = useState(0)
  return (
    <div className=' container p-5'>
        <UserData.Provider value={[count,setCount]}>
        <h1>MainComp</h1>
        <h1>count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Add</button>
        <Comp1/>
        </UserData.Provider>
    </div>
  )
}

export default MainComp
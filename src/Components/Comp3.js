import React, { useContext } from 'react'
import { context } from './Comp1'



const Comp3 = () => {
    let isAdmin = useContext(context)
  return (
    <div className=' container p-5'>
        This is Comp3
        <h1>isAdmin:{isAdmin}</h1>
    </div>
  )
}

export default Comp3
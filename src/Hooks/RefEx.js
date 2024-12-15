import React, { useRef } from 'react'

const RefEx = () => {
    const qtyRef = useRef()
    const addQty = ()=>{
        qtyRef.current.value++
        qtyRef.current.focus()
    }
  return (
    <div className=' container p-5'>
        <input type='text' placeholder=' no of items' ref={qtyRef}/>
        <button onClick={addQty}>+</button>
    </div>
  )
}

export default RefEx



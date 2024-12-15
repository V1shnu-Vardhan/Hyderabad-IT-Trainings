import React from 'react'

export default function EventHandling() {
    function display(num,e){
        alert(num + "Button clicked")
        console.dir(e.target)
    }
  return (
    <div>
        <button onClick={(e)=>{display(10,e)}}>Click</button>
    </div>
  )
}

import React from 'react'

export default function Background() {
  return (
    <div className='bg'>
        <h1>Background Colour Changer</h1>
        <input type='color' onClick={(e)=>{
             document.body.style.background = e.target.value

        }}/>
    </div>
  )
}

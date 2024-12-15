import React, { useRef } from 'react'

export default function Useref2() {
    let array = new Array(10).fill(null)
    let headings = useRef([])
    function changeStyle(e){
        for(let ele of headings){
            ele.classList.remove('primary')
        }
        e.target.classList.add('primary')
    }
  return (
    <div>
        {
            array.map((ele,i)=>{
                return(
                    <h1 key={i} ref={(e1)=> headings.current[i]= e1} onClick={()=>{
                        changeStyle()
                    }} className='primary./'>This is heading{i+1}</h1>
                )
            })
        }

    </div>
  )
}

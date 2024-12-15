import React, { useState } from 'react'

export default function ToDo() {

    let [todo,updateTodo]=useState(
        [
            {
                id:1,
                task:"Learn react"
            },
            {
                id:2,
                task:"Learn Angular"
            }
        ]
    )
  return (
    <div className='container w-50 mt-5'>
        <h3 className=' text-center'>Todo App using React</h3>
        <div className='input-group'>
            <input className=' form-control' type='text'/>
            <button className='btn btn-primary'>Add</button>
        </div>
        <ul className='list-group mt-4'>
            {
                todo.map((updateTodo)=>{
                    return(
                        <li className='list-group-item'>
                        <p>{updateTodo.task}</p>
                        <button className='btn'>X</button>
                    </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

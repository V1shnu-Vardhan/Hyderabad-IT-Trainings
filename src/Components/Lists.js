import React from 'react'

export default function Lists() {
    let langs = ["HTML","CSS","JS"]
  return (
    <div>
        <h1>Lists and keys in react</h1>
        {
            langs.map((ele,index)=> <li key={index}>{ele}</li>)
        }

    </div>
  )
}

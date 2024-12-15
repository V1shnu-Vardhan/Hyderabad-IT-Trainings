import React from 'react'

export default function Movie(props) {
  return (
    <div className='movie'>
        <figure>
            <img src={props.path} alt='hello'/>
        </figure>
        <figcaption>
            <h2>{props.title}</h2>
            <p>{props.cat}</p>
        </figcaption>
        </div>
  )
}

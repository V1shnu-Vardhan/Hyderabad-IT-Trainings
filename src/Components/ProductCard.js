import React from 'react'

export default function ProductCard({title,price,image}) {
  return (
    <div className='card'>
        <img src={image} alt='hello'/>
        <h1>{title}</h1>
        <p>{price}</p>

    </div>
  )
}

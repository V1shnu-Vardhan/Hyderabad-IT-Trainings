import React from 'react'

export default function Product(p) {
  return (
    <div>
        <h1>id:{p.id}</h1>
        <h1>mobile:{p.mobile}</h1>
        <p>price:{p.price}</p>
    </div>
  )
}

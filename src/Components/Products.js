import React from 'react'
import Product from './Product'


export default function Products() {
    let prod1 = {
        id:1,
        mobile:"iphone XR",
        price:38500
    }
  return (
    <div>
        <Product {...prod1}/>
    </div>
  )
}



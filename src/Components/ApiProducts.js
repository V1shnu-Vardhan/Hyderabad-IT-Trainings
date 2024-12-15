import React,{useEffect, useState} from 'react'
import ProductCard from './ProductCard';

export default function ApiProducts() {
    const[products,updateProducts]=useState([]);

    useEffect(()=>{
        getProducts()
    },[])

    async function getProducts(){
        let res = await fetch('https://fakestoreapi.com/products');
        let productlist = await res.json();
        updateProducts(productlist)
    }

    if(products.length ===0)
        {
            return <h1>FetchingData...</h1>
        }
  return (
    <div className='product-list'>
        {
            products.map((p)=>
                <ProductCard {...p} key={p.id}/>
            )
        }
    </div>
  )
}

import React, { useEffect, useMemo, useState } from 'react'


const UseMemo2 = () => {
    const [time,setTmer] = useState(new Date().toLocaleTimeString())
    const [text,setText] = useState('')
    const products =useState([
        {id:1,name:"iphoneXr",price:38500},
        {id:2,name:"iphone11",price:50000},
        {id:3,name:"oneplus11r",price:55500}
    ])

    const filteredproducts = useMemo(
        ()=>{
            console.log(products)
                
            
        },[products,text]
    )
    useEffect(
        ()=>{
            setInterval(
                ()=>{
                    setTmer(new Date().toLocaleTimeString())
                }
            )
        }
    )

  return (
    <div className=' container p-5'>
      <h1>  UseMemo2</h1>
      <div>{time}</div>
      <input type='text' value={"text"} onChange={(e)=>setText(e.target.value)}/>
      <table className=' table-bordered table-striped'>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Price</td>
            </tr>
        </thead>
        <tbody>
            {
                filteredproducts.map((p)=>{
                   return(
                    <tr >
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                    </tr>
                   )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default UseMemo2
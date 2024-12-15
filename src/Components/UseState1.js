import React,{useState} from 'react'

export default function UseState1() {
    let price = 38500;
    let [productname,updateName] = useState("iphoneXr")
  return (
    <div>
        <h1>Product:{productname}</h1>
        <p>price:{price}</p>
        <input id='pname'/>
        <button onClick={()=>{
            let p = document.getElementById("pname").value;
            updateName(p)
        }}>Update</button>

    </div>
  )
}

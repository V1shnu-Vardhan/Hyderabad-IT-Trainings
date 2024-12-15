import React from 'react'
import { connect } from 'react-redux'
import { buyMobile } from './MobileAction'

const MobileContainer = (props) => {
  return (
    <div className=' container p-5'>
        <h1>No.ofmobiles:{props.noOfMobiles}</h1>
        <p>{props.noOfMobiles >10 ? "Available": props.noOfMobiles <= 0 ? "out of stock" : "Limited stock"}</p>
        <button onClick={props.buyMobile} disabled={props.noOfMobiles === 0 ? true : false}>BuyNow</button>
        <h1>Hello</h1>
    </div>
  )
}
const mapStateToProps = (state)=>{
    return{
        noOfMobiles : state.noOfMobiles
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        buyMobile:()=>{
            dispatch(buyMobile())
        }
    }
}

export default connect(mapStateToProps)(mapDispatchToProps)(MobileContainer)



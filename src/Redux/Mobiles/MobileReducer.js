import { BUY_MOBILE } from "./MobileType"

// // initial state
const initialStock ={
    noOfMobiles:10
}
// // Reducer
export const mobileReducer = (state=initialStock,action)=>{
    switch(action.type){
        case BUY_MOBILE:
            return{
                noOfMobiles:state.noOfMobiles -1
            }
            default :
            return state
    }
}

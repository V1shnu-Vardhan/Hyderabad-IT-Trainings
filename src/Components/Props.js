import React, { Component } from "react";

// function Props(props)
// {
//     return(
//         <div>
//             <h1>name:{props.name}</h1>
//             <p>age:{props.age}</p>
//         </div>
//     )
// }

class Props extends Component{
    render(){
        return(
            <div>
                  <h1>name:{this.props.name}</h1>
                  <p>age:{this.props.age}</p>
            </div>

        )
    }
}

export default Props;
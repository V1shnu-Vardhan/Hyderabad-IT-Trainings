import React, { Component } from "react";

class BasicClass extends Component{
    render(){
        return(
            <div>
                <h1>Welcome to class component:-{this.props.name}</h1>
                <p>Designed and developed by Burrapadu Vishnu</p>
            </div>
        )
    }
}
export default BasicClass;
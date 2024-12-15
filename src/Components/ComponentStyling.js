import React from "react";

function ComponentStyling()
{
    let s1 = {
        background:'red',
        color:'white'
    }
    return(
        <div>
            <h1>This is heading1</h1>
            <p>This is paragraph1</p>
            <h2 style={s1}>This is heading2</h2>
            <p>This is paragraph2</p>
        </div>
    )
}


export default ComponentStyling;
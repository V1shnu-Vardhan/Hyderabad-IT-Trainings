import React from "react";


function JsxAttributes()
{
    return(
        <div>
            <h1 id='test'className='one'>welcome to jsx attributes and expressions</h1>
            <input type="checkbox" id='sub'/>
            <label htmlFor='sub'>Subscribe:</label> <br></br>
            {sum(3,4)}
        </div>
    )
}

function sum(n1,n2)
{
    return n1*n2

}


export default JsxAttributes;
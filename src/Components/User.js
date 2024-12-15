import React from "react";

function User(p)
{
    return(
        <div>
            <h1>Id:{p.id}</h1>
            <h1>Name:{p.name}</h1>
            <h2>Age:{p.age}</h2>
            <p>Place:{p.place}</p>
        </div>
    )
}

export default User;
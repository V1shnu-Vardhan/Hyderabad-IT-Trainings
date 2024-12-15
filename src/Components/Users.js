import React from "react";
import User from './compo'

function Users()
{
    let users = [
        22,24,27,28
    ]
    return(
        <div>
            users.map(
                (u)={
                    <User id={u}/>
                }
            )
        </div>
    )
}

export default Users;
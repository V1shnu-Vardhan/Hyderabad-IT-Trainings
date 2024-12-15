import React from 'react'

export default function ConditionalRendering() {
    let LoggedIn = false;
  return (
    <div>
        <ul className='styling'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            {
                LoggedIn ?( <li>Logout</li>) : (<li>Login</li>)
            }
        </ul>
    </div>
  )
}

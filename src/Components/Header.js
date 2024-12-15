import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='rstyle'>
        <ul className='link'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About/100">About-100</Link></li>
        <li><Link to="/About/200">About-200</Link></li>
        <li><Link to="/About/300">About-300</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><a href="/">Home</a></li>
        </ul>
    </div>
  )
}

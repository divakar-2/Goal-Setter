import React from 'react'
import {FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const header = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>GOAL SETTER</Link>
        </div>
        <ul>
            <li>
            <FaUser/>
            <Link to='/register'>Register</Link>
            </li>
            <li>
            <FaSignInAlt/>
            <Link to='/login'>Login</Link>
            </li>
        </ul>
    </header>
  )
}

export default header
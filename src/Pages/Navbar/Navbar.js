import React from 'react'
import {Link} from 'react-router-dom'
import {GiInjustice} from 'react-icons/gi'

import './navbar.css'

const Navbar = () => {
    
  return (
    <div className='navbar'>
        <div className="navbar--logo">
            <GiInjustice />
        </div>
        <ul className='navbar_links'>
            <Link to='/'><button className='btn--costum'>Welcome</button></Link>
            <Link to='/avocats'><button className='btn--costum'>Lawyers</button></Link>
            <Link to='/profile'><button className='btn--costum'>Profile</button></Link>
        </ul>
    </div>
  )
}

export default Navbar
import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <div className='logo'>
                <Link to='/'>HEALTHY SWITCHER</Link>
            </div>
              
            <div className='rightBar'>
                <Link to='/'>Home</Link>
            </div>
        </nav>
    </header>
  )
}

export default Header

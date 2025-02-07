import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav_container">
        <Link to="/">
          <img src="assets/Home_Icon.webp" alt="Home" />
        </Link>
        <Link to="/about">
          <img src="assets/About_Icon.webp" alt="About" />
        </Link>
        <Link to="/portfolio">
          <img src="assets/Portfolio_Icon.webp" alt="Portfolio" />
        </Link>
        <Link to="/contact">
          <img src="assets/Contact_Icon.webp" alt="Contact" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import './navbar.css'

// Import images directly
import homeIcon from '/assets/Home_Icon.webp'
import aboutIcon from '/assets/About_Icon.webp'
import portfolioIcon from '/assets/Portfolio_Icon.webp'
import contactIcon from '/assets/Contact_Icon.webp'

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className='navbar' key={location.pathname}>
      <div className="nav_container">
        <Link to="/">
          <img 
            src={homeIcon}
            alt="Home" 
            className={location.pathname === '/' ? 'active' : ''}
          />
        </Link>
        <Link to="/about">
          <img 
            src={aboutIcon}
            alt="About" 
            className={location.pathname === '/about' ? 'active' : ''}
          />
        </Link>
        <Link to="/portfolio">
          <img 
            src={portfolioIcon}
            alt="Portfolio" 
            className={location.pathname === '/portfolio' ? 'active' : ''}
          />
        </Link>
        <Link to="/contact">
          <img 
            src={contactIcon}
            alt="Contact" 
            className={location.pathname === '/contact' ? 'active' : ''}
          />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

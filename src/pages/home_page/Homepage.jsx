import React from 'react'
import './homepage.css'
import Home_nav from '../../components/home_navbar/Home_nav.jsx'
import Main_bg from '../../components/main_bg/Main_bg.jsx'

const Homepage = () => {
  return (
    <section className='homepage'>
      <Home_nav/>
      <div className="home_content">
        <h1 className='name'>I'm <span>REVANSHU</span></h1>
        <h1 className='profession'>DEVELOPER & DESIGNER</h1>
        <div className="buttons">
          <button className='about_button'>About Me</button>
          <button className='portfolio_button'>Portfolio</button>
        </div>
      </div>
      <video src="assets/character.webm" loop autoPlay muted></video>
      <Main_bg/>
    </section>
  )
}

export default Homepage

import React from 'react'
import './aboutpage.css'
import Navbar from '../../components/navbar/Navbar.jsx'
import Main_bg from '../../components/main_bg/Main_bg.jsx'


const Aboutpage = () => {
  return (
    <section className='aboutpage'>
      <Navbar/>
      <img src="assets/work_in_progress.webp" alt="about_bg" className='work_in_progress'/>
      <Main_bg/>
    </section>

  )
}

export default Aboutpage

import React from 'react';
import { Outlet } from 'react-router-dom';
import "./portfoliopage.css";
import Navbar from '../../components/navbar/Navbar.jsx';
import Main_bg from '../../components/main_bg/Main_bg.jsx';

const Portfoliopage = () => {
  return (
    <section className='portfoliopage'>
      <Navbar />
      <Outlet />
      {/* <Main_bg /> */}
      <button onClick={() => window.open('/all-projects', '_self')} className="all-projects">
        All Projects
        <img src="/assets/Forward.webp" alt="" />
      </button>
    </section>
  );
};

export default Portfoliopage;

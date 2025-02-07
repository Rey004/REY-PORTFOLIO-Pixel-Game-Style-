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
      <Main_bg />
    </section>
  );
};

export default Portfoliopage;

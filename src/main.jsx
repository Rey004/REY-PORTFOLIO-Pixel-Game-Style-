import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import Homepage from './pages/home_page/Homepage';
import Portfoliopage from './pages/portfolio_page/Portfoliopage.jsx';
import Aboutpage from './pages/about_page/Aboutpage.jsx';
import Contactpage from './pages/contact_page/Contactpage.jsx';
import Code_Vantage from './pages/portfolio_page/Project/Code_Vantage.jsx';
import Project2 from './pages/portfolio_page/Project/Project2.jsx';
import Project3 from './pages/portfolio_page/Project/Project3.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Homepage/>}/>
      <Route path='portfolio' element={<Portfoliopage/>}>
        <Route index element={<Navigate to="codevantage" replace />} />
        <Route path='codevantage' element={<Code_Vantage/>}/>
        <Route path='project2' element={<Project2/>}/>
        <Route path='project3' element={<Project3/>}/>
      </Route>
      <Route path='about' element={<Aboutpage/>}/>
      <Route path='contact' element={<Contactpage/>}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);

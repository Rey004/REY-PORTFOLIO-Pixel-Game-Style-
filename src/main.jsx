import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Homepage from './pages/home_page/Homepage'
import Portfoliopage from './pages/portfolio_page/Portfoliopage.jsx'
import Aboutpage from './pages/about_page/Aboutpage.jsx'
import Contactpage from './pages/contact_page/Contactpage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Homepage/>}/>
      <Route path='portfolio' element={<Portfoliopage/>}/>
      <Route path='about' element={<Aboutpage/>}/>
      <Route path='contact' element={<Contactpage/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

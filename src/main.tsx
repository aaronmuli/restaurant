import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Menu from './components/menu/menu.tsx'
import About from './components/about/about.tsx'
import Facility from './components/facility/facility.tsx'
import Cart from './components/cart/cart.tsx'
import Login from './components/login/login.tsx'
import Header from './components/header/header'
import Search from './components/search/search.tsx'
import { BrowserRouter, Route, Routes } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <StrictMode>
          <Header />
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/about' element={<About />} />
            <Route path='/facility' element={<Facility />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/search' element={<Search />} />
          </Routes>
          {/* <Footer /> */}
      </StrictMode>,
    </BrowserRouter>
)

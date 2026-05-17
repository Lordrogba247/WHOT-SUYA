import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Landing/Home'
import Menu from './Menu/Menu'
import Cart from './Cart/Cart'
import Policy from './Policy/Policy'
import Terms from './Terms/Terms'
import Footer from './Footer/Footer'

import './App.css'

function AnimatedRoutes({ cart, setCart }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Routes location={location}>
        <Route path="/" element={<Home setCart={setCart} />} />
        <Route path="/menu" element={
          <Menu cart={cart} setCart={setCart} />
        } />
        <Route path="/cart" element={
          <div key={location.pathname} className="page-transition">
            <Cart cart={cart} setCart={setCart} />
          </div>
        } />
        <Route path="/policy" element={<div key={location.pathname} className="page-transition"><Policy /></div>} />
        <Route path="/terms" element={<div key={location.pathname} className="page-transition"><Terms /></div>} />
      </Routes>
    </div>
  )
}

function App() {
  const [cart, setCart] = useState([])

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <AnimatedRoutes cart={cart} setCart={setCart} />
      <Footer />
    </BrowserRouter>
  )
}

export default App
import React from 'react'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
   <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
    </Routes>
    <Footer />
   </div>
  )
}

export default App

import React from 'react'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Women from './pages/women'
import Mens from './pages/Mens'
import Kids from './pages/Kids'
import Course from './pages/Course'
import Navbar2 from './assets/components/Navbar2'
import Coursedetails from './pages/Coursedetails'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:courseID" element={<Coursedetails />} />

        <Route path="/product" element={<Product />}>
          <Route path="women" element={<Women />} />
          <Route path="mens" element={<Mens />} />
          <Route path="kids" element={<Kids />} />
        </Route>

      </Routes>
      <Footer />
    </div>
  )
}

export default App

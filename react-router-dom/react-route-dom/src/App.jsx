import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Contact from './assets/pages/Contact'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App

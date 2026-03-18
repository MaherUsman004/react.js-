import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar2() {
   const navigate = useNavigate() ;
  return (
    <div className='bg-blue-600 text-white p-3 flex items-center space-x-4 '>
      <button className='hover:text-blue-400 transition-colors bg-gray-800 p-2 rounded active:scale-95' onClick={() => navigate('/')}>Home</button>
      <button className='hover:text-blue-400 transition-colors bg-gray-800 p-2 rounded active:scale-95' onClick={() => navigate(-1)}>Back</button>
      <button className='hover:text-blue-400 transition-colors bg-gray-800 p-2 rounded active:scale-95 '  onClick={() => navigate(+1)}>Next</button>
    </div>
  )
}

export default Navbar2

import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='bg-gray-800 text-white p-4 flex items-center justify-between'>
            <h2>DEV-CODE</h2>
            <div className='space-x-4'>
                <nav>
                    <ul className='flex space-x-4'>
                        <li><Link to="/" className='hover:text-blue-400 transition-colors'>Home</Link></li>
                        <li><Link to="/about" className='hover:text-blue-400 transition-colors'>About</Link></li>
                        <li><Link to="/course" className='hover:text-blue-400 transition-colors'>Courses</Link></li>
                        <li><Link to="/product" className='hover:text-blue-400 transition-colors'>Product</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar

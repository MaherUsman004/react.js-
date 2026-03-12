import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Product() {
  return (
    <div>
      <div className='flex justify-center gap-5 mt-5'>
        <Link to="women" className='font-medium'>Women's Collection</Link>
        <Link to="mens" className='font-medium'>Men's Collection</Link>
        <Link to="kids" className='font-medium'>Kids' Collection</Link>
      </div>
      <Outlet />
      
      {/* <h1 className='text-2xl font-bold text-center mt-10 underline'>Product Page</h1> */}
    </div>
  )
}

export default Product

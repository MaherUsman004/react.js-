import React from 'react'
import Navbar from './navbar'
import Pagecontent1 from './Pagecontent1'
function Section1(props) {
  return (
    <div className='w-full h-screen'>
        <Navbar/>
        <Pagecontent1 users={props.users}/>

    </div>
  )
}
 
export default Section1
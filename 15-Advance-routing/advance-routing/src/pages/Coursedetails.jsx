import React from 'react'
import { useParams } from 'react-router-dom'

function Coursedetails() {
    const params = useParams();
    console.log(params);
  return (
    <div>
       <h1 className='text-2xl font-bold text-center mt-10 underline'>{params.courseID}</h1>
    </div>
  )
}

export default Coursedetails

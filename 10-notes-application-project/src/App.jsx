import React, { useState } from 'react'

function App() {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

    // this function is apply when button is clicked 
  const submithandler = (e)=>{
    e.preventDefault();
    console.log(title , details)
    setTitle('')
    setDetails('')

  }
  return (
    <div className='bg-black lg:flex text-white h-screen '>
      <form onSubmit={(e)=>{submithandler(e)}} className='flex flex-col items-start lg:w-1/2 gap-4 p-10'>
               <h1 className='text-2xl font-bold'>Add Notes</h1>
            
            {/* enter notes input  */}
         <input
         type="text"
         placeholder='Enter your notes' 
         className='border-2 w-full px-5 font-medium outline-none py-2 rounded'
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value) 
         }}
         />
          {/* details for notes  */}
        <textarea type="text" 
        placeholder='Write details' 
        className='border-2 w-full px-5 py-2 font-medium h-32 outline-none rounded'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        />
        <button className='bg-white px-5 w-full py-2 font-medium text-black rounded outline-none'>Add Notes</button>
      </form>
      <div className=' lg:w-1/2 lg:border-l-2  p-9'>
      <h1 className='text-2xl font-bold'>Recent Notes</h1>
            <div className=" flex flex-wrap gap-7 mt-1.5 h-full overflow-auto">

      <div className="bg-white rounded-2xl h-50 w-40"></div>
      <div className="bg-white rounded-2xl h-50 w-40"></div>
      <div className="bg-white rounded-2xl h-50 w-40"></div>
      
            </div>

     

      </div>
    </div>
  )
}

export default App

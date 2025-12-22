import React, { useState } from 'react'

function App() {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([]);

    // this function is apply when button is clicked 
  const submithandler = (e)=>{
    e.preventDefault();

    // make a copytask variable to store all previous tasks 
    const copytask = [...task];
    copytask.push({title,details})
    setTask(copytask) 
    
    // console.log(title , details) 
    setTitle('')
    setDetails('')
  }

  const deletenote=(idx)=>{
     const copyTask = [...task]
     copyTask.splice(idx,1)
     setTask(copyTask) 
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

        <button className='bg-white px-5 active:scale-95 w-full py-2 font-medium text-black rounded outline-none'>
          Add Notes
          </button>

      </form>
      <div className=' lg:w-1/2 lg:border-l-2  p-9'>
      <h1 className='text-2xl font-bold'>Recent Notes</h1>
            <div className=" flex flex-wrap justify-start gap-7 mt-1.5 h-[90%] overflow-auto">

              {task.map(function(elem,idx){
                return <div key={idx} className=" bg-cover bg-[url('https://static.vecteezy.com/system/resources/thumbnails/068/772/549/small/watercolor-spiral-notepad-free-png.png')] flex flex-col justify-between item-start relative rounded-3xl h-50 px-4 py-7 text-black  w-40">
                 <div>
                   <h3 className='leading-snug font-bold'>{elem.title}</h3>
                  <p className='leading-tight font-semibold text-gray-700 wrap-break-word'>{elem.details}</p>
                 </div>

                 <button 
                 onClick={(idx)=>{
                  deletenote(idx)
                 }} 
                 className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold">Delete Note</button>

                </div> 
              })}

            </div>

     

      </div>
    </div>
  )
}

export default App

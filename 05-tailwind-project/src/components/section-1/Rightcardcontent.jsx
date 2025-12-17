import React from 'react'
import { ArrowRight } from 'lucide-react';


function Rightcardcontent(props) {
  return (
     <div className=" absolute left-0 top-0 h-full w-full p-4 flex flex-col justify-between">
            <h2 className='bg-white  text-xl font-medium h-8 w-8 flex justify-center items-center rounded-full'>{props.id+1}</h2>
            <div>
                <p className='font-normal mb-10 text-white leading-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus voluptate assumenda ducimus dolor quisquam!</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className=' text-white px-2 py-1 font-semibold rounded-2xl'>{props.tag}</button>
                
                <button style={{backgroundColor:props.color}} className=' text-white px-1 py-1 font-semibold rounded-2xl mt-2' > <ArrowRight size={20} strokeWidth={2}  /></button>
            </div>
            </div>
            
        </div>
  )
}

export default Rightcardcontent
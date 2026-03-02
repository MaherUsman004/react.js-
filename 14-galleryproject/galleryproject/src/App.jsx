import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {

  const [userData, setData] = useState([])
  const [page, setPage] = useState(1)
  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
    const data = await response.data;
    setData(data);
    // console.log(data);
  }

  useEffect(() => {
    getdata()
  }, [page]) ;

  let printUserData = <div className='h-screen flex items-center justify-center'><h3 className='bg-gray-800 text-white p-4'>loading...</h3></div>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return <div key={idx}>
        <a href={elem.url} target="_blank" >
          <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
        <img src={elem.download_url} alt={elem.author} className=' h-full w-full object-cover' />
      </div>
      <h3 className='text-center font-bold text-md'>{elem.author}</h3>
      </a>
      </div>
    })
  }
  return (
    <div className='h-screen p-4 bg-black overflow-auto text-white'>
      
      {/* Gallery grid container displaying fetched images */}
      <div className='flex flex-wrap gap-5'>{printUserData}</div>
      
      {/* Current page indicator */}
      <h1 className=' text-amber-400 text-center text-xl font-bold mt-4'>Page {page}</h1>
       

      {/* Pagination controls */}
      <div className='flex items-center justify-center mt-4 gap-1.5'>
        
        {/* Previous page button - disabled when on first page */}
        <button onClick={() => {
          if (page > 1) {
            setPage(page - 1)
          }
        }}
        className='bg-amber-400 cursor-pointer active:scale-95 text-sm rounded px-4 py-2 text-black font-semibold mt-4'>
        prev
        </button>
        
        {/* Next page button */}
        <button onClick={() => {
          setPage(page + 1)
        }}
         className='bg-amber-400 cursor-pointer active:scale-95 text-sm rounded px-4 py-2 text-black font-semibold mt-4 ml-2'>
        next
        </button>
      </div>

    </div>
  )
}

export default App

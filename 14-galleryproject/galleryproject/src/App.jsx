import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {

  const [userData, setData] = useState([])
  const getdata = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=20')
    const data = await response.data;
    setData(data);
    console.log(data);
  }

  useEffect(() => {
    getdata()
  }, []) ;

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

      <div className='flex flex-wrap gap-5'>{printUserData}</div>

    </div>
  )
}

export default App

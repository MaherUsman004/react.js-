import React, { useState } from 'react'
import axios from 'axios'

function App() {
      const [data, setdata] = useState([])
      const getdata = async () =>{
        const response = await axios.get('https://picsum.photos/v2/list')
        const data = await response.data;
        setdata(data)
      }
  return (
    <div>
      <button onClick={getdata}>Get data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>{elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App

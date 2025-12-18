import React from 'react'
import { useState } from 'react'

function App() {
  const [val, setval] = useState(0) 
  function increase(params) {
      return setval(val+1)
      
  }
  function decrease(params) {
      return setval(val-1)
  }

  function setdefault(){
    return setval(0) ;
  }


  return (
   <div className='card'>
     <h1>{val}</h1>
    <button onClick={increase}>Increase</button>
    <button onClick={setdefault}>setdefault</button>
    <button onClick={decrease}>Decrease</button>
   </div>
  )
}

export default App

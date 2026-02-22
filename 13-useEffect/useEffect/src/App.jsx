import React, { useEffect, useState } from 'react'

function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const achanging = ()=>{
    setA(a+1)
  }
  const bchanging = ()=>{
    setB(b-1)
  }
  useEffect(() => {
    console.log("value of a is changing")
  }, [a])
  
  
  return (
    <div>
      <h1>value of a is{a}</h1>
      <h1>value of b is{b}</h1>
      <button onClick={achanging}>Increase A</button>
       <button onDoubleClick={bchanging}>Decrease B</button>    
    </div>
  )
}

export default App

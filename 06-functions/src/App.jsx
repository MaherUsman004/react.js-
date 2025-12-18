import React from 'react'

function App() {
  const btnclicked =(val) =>{
    console.log(val)
  }
  return (
    <div>
       <input type='text' placeholder='Enter text' onChange={function (elem) {
        btnclicked(elem.target.value)
        
       }}></input>
    </div>
  )
}

export default App
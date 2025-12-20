import React from 'react'
import { useState } from 'react'

function App() {
  const [title, settitle] = useState('')
const submit =(e)=>{
  e.preventDefault()
  console.log("Submitted by", title)
   settitle('')

}
  return (
    <div>
      <form onSubmit={(e)=>{
        submit(e) ;
      }}>
        <input type="text"
         placeholder='Enter here'
          value={title}
          onChange={(e)=>{
            settitle(e.target.value) ;
          }}
           />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App

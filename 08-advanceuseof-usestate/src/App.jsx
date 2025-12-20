import React, { useState } from 'react'

function App() {
  const [val, setval] = useState({user:'ali' , age:10})
  const btnchange=()=>{
    
    setval({ user: 'usman', age: 25 })

    // const newval = {...val} ;
    // newval.user='usman';
    // newval.age=25 ;
    // setval(newval) ;

  }
  return (
    <div>
      <h1>The value of user is : {val.user} , {val.age}</h1>
      <button onClick={btnchange}>change val</button>
    </div>
  )
}

export default App

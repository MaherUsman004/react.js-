import React from 'react'

function App() {
  // localStorage.setItem('user','john')
  // const users = localStorage.getItem('user')
  // console.log(users)
  // localStorage.removeItem('user')
  // localStorage.clear()
  const users = {
    user:'john' ,
    age:18 ,
    city:'New York'
  } 
  // we cant set a object in localstorage  , always store in the form of strings 

 localStorage.setItem('user' , JSON.stringify(users))

    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user) ;
  return (
    <div>
      
    </div>
  )
}

export default App

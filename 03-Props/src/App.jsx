import React from 'react'
import Card from './components/Card.jsx'

function App() {
  return (
    <div className='parent'>
      <Card user='Ice-bear' bio='i am a Ice Bear live in cold areas' profilepic='https://img.freepik.com/free-photo/selective-focus-shot-polar-bear-sunset_181624-29226.jpg?semt=ais_hybrid&w=740&q=8' />
      <Card user='Grizzly-bear' bio='he grizzly bear (Ursus arctos horribilis), also known as the North American brown bear or simply grizzly, is a population or subspecies[4] of the brown bear inhabiting North America.' profilepic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXEwsQMEc4MEf3nAW-kYOfCPxpEI5Osw8vngwzcEKDF8i4PGKEdK3qPK5XSXjL0KrNNeoFCY4qcvV_R0lF6vms3WVhmgX0F_4xT-Td3RtOng&s=10' />
    </div>
  )
}

export default App

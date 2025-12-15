import React from 'react'

function Card(props) {
    console.log(props.user)
  return (
    <div className='card'>
      <img src={props.profilepic} alt="" />
      <h2>{props.user}</h2>
      <p>{props.bio}</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card

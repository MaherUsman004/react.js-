import React from 'react'
import Rightcardcontent from './Rightcardcontent';


function Rightcard(props) {
  return (
    <div className='h-full w-55 shrink-0  relative overflow-hidden rounded-2xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <Rightcardcontent color={props.color} id ={props.id} tag={props.tag}/>
    </div>
  )
}

export default Rightcard
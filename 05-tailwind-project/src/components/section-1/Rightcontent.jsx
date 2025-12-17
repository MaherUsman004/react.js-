import React from 'react'
import Rightcard from './Rightcard'

function Rightcontent(props) {
    console.log(props.users)
    
  return (
    <div id='right' className=' h-full w-2/3 p-2 flex gap-10 flex-nowrap overflow-x-auto ' >
    {props.users.map(function(elem ,indx) {
        return <Rightcard key={indx}  id={indx} img={elem.img} tag={elem.tag} color={elem.color} />
        
    })}
        
    </div>
  )
}

export default Rightcontent
import React from 'react'
import Leftcontet from './Leftcontet'
import Rightcontent from './Rightcontent'

function Pagecontent1(props) {
  return (
    <div className='py-10 px-16 flex items-center gap-8  h-[85vh]'>
        <Leftcontet/>
        <Rightcontent users={props.users}/>
    </div>
  )
}

export default Pagecontent1 
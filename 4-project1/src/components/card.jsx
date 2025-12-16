import React from 'react'
import {Bookmark} from 'lucide-react'


function Card(props) {
  return (
     <div className="card">


        <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <Bookmark color="white" size={20} /></button>
        </div>
        <div className="center">
          <h3>{props.company}<span>{props.date}</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}l</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
          <p>{props.location}</p>
          </div>
          <div> 
          <button>Apply Now</button>
          </div>
        </div>


      </div>
  )
}

export default Card
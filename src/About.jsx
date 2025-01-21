import React from 'react'
import Contact from './Contact'

function About(props) {    
  return (
  <>
    <div className='border border-2 border-info'>About</div>
    
    <div className="row m-auto">
        {props.user.map((data)=>{
        return (
            <div key={data._id} className="col-3">
                {data.name} = {data.photo}
            </div>)
        })}
    </div>
    <Contact user={props.user} />
    </>
  )
}

export default About
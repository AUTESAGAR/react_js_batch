import React from 'react'
import About from './About';

function Home(props) {
  return (
  <>
    <div className='border border-2 border-info'>
        <b>Home</b>
    </div>
    <div className="row m-auto">
        {props.user.map((data)=>{
        return (
            <div key={data._id} className="col-3">
                {data.name} = {data.photo}
            </div>)
        })}
    </div>
    <About user={props.user}/>
    </>
  )
}

export default Home
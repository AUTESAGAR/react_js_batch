import React from 'react'

function Contact(props) {    
  return (
    <>
        <div className='border border-2 border-info'>Contact</div>
        <div className="row m-auto">
            {props.user.map((data)=>{
            return (
                <div key={data._id} className="col-3">
                    {data.name} = {data.photo}
                </div>)
            })}
        </div>
    </>
  )
}

export default Contact
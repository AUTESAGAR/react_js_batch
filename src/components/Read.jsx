import React from 'react'

function Read(props) {
  const product = props.data;  
  return (
    <>
    <div className='row m-auto'>
      {product.map((data,i)=>{
        return (
          <div key={i} className='col-3 m-auto border border-info p-2 text-center'>
            <h1><img src={data.banner} alt="banner" height={150} /></h1>
            <h1>{data.name}</h1>
            <h1>{data.price}</h1>
            <h1>{data.color}</h1>
            <button className='btn btn-warning'>Add Cart</button>
            <button className='btn btn-success'>Buy Now</button>
          </div>        
        )
      })}                      
    </div>
    </>
  )
}

export default Read
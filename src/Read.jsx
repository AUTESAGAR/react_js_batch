import React from 'react'

function Read(props) {
  const product = props.data;
  console.log(product)
  return (
    <>
    <div className="container">
        <table className="table table-hover m-auto border border-info border-5">
            <tr>
                <th>Name</th>
                <th>Banner</th>
                <th>Price</th>
                <th>Color</th>
                <th colSpan={3}>Operation</th>
            </tr>
            <tr>
                <th>1</th>
                <th>1</th>
                <th>1</th>
                <th>1</th>
                <th><a href="">Edit</a></th>
                <th><a href="">Delete</a></th>
            </tr>
        </table>
    </div>
    
    </>
  )
}

export default Read
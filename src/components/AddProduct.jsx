import React from 'react'

function AddProduct() {
  return (
    <>
        <form method="post" encType='multipart/form-data'>
            <input type="text" name="name" id="" placeholder='Enter Your name' />
            <input type="text" name="price" id="" placeholder='Enter Your price' />
            <input type="text" name="color" id="" placeholder='Enter Your color' />
            <input type="file" name="banner" id="" placeholder='Enter Your banner' />
            <input type="submit" value="AddProduct" />
        </form>
    </>
  )
}

export default AddProduct
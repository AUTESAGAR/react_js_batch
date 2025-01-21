import React, { useEffect, useState } from 'react'
import Header from './SinglePageComponents/Header'
import Footer from './SinglePageComponents/Footer'
import Home from './Home'

function App(props) {
  const [data,setData] = useState([]);  
  // console.log(data);
  useEffect(()=>{
    fetch("http://localhost:1000/read")
    .then((data)=>{ return data.json()})
    .then((data)=>{setData(data)})
    .catch((error)=>{console.log(error)});
  },[])

  return (
    <>
      <Header />
          <Home user={data} />          
      <Footer />
    </>
  )
}

export default App
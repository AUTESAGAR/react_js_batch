import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './header'
import Read from './Read'
import Footer from './Footer'

function App(props) {
  const Navbar = {menu1 : "Home",menu2 : "About",menu3 : "Services",menu4 : "Contact"}
  
  const Products = [
    {name : "Oppo",price : 25000,color:"purple",banner:"https://m.media-amazon.com/images/I/81oKOk65TgL._AC_UY327_FMwebp_QL65_.jpg"},
    {name : "Samsung",price : 75000,color:"black",banner:"https://m.media-amazon.com/images/I/81oKOk65TgL._AC_UY327_FMwebp_QL65_.jpg"},
    {name : "Vivo",price : 50000,color:"gray",banner:"https://m.media-amazon.com/images/I/81oKOk65TgL._AC_UY327_FMwebp_QL65_.jpg"},
  ]
  
  return (
    <>
      <Header data = { Navbar } />      
      <Routes>
        <Route path='/' element={<Read data={Products} />}/>
        <Route path='/products' element={<Products />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
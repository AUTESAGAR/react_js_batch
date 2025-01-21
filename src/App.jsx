import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Read from './Read'
import Footer from './components/Footer'

function App(props) {
  const Navbar = {menu1 : "Home",menu2 : "About",menu3 : "Services",menu4 : "Contact"}
  
  const Products = [
    {name : "Oppo",price : 25000,colo:"purple"},
    {name : "Samsung",price : 75000,colo:"black"},
    {name : "Vivo",price : 50000,colo:"gray"},
  ]
    
  return (
    <>
      <Header data = { Navbar } />
      
      <Routes>
        <Route path='/' element={<Read data={Products} />}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App
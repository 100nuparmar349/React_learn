import React from 'react'
import NavBar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'

const Lecture1 = () => {
  return (
   <div>
    <NavBar/>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
    </Routes>
   </div>
  )
}

export default Lecture1

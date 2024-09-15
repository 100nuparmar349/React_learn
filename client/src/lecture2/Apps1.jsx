import React from 'react'
 import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom'
import Home1 from './Home1'
import Contact from './Contact'
import About from './About'

const App = () => {
  return (
    <div>
       <NavBar/>
      <Routes>
       <Route path='/' element={<Home1/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Contact' element={<Contact/>}/>
    
      </Routes>
       
     
   
    </div>
  )
}

export default App

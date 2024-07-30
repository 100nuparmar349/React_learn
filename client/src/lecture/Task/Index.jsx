import React from 'react'
import Login from './Login'
import Frontpage from './Frontpage'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'


const Index = () => {
  return (
   
   <div>
    <Frontpage/>
    <Routes>
       <Route path='/Login' element=
       {<Login/>}/>
       <Route path='/Signup' element={<Signup/>}/>
    </Routes>
   </div>
  )
}

export default Index

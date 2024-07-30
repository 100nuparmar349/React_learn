import React from 'react'

import Dummy from './Dummy'
import { Routes ,Route, useNavigate} from 'react-router-dom'
import HOme from './HOme';

const Appdummy = () => {
    let navigate=useNavigate();
    setTimeout(()=>{
navigate('/')

    },5000)
  return (
    <div>
       
        <Routes>
        <Route path='/' element={<HOme/>}/>
      <Route path='/:data' element={<Dummy/>}/>
     
    </Routes>
 
    </div>
  )
}

export default Appdummy

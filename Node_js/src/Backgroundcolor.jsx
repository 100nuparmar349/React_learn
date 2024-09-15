import React from 'react'
import './index.css'
import { useState } from 'react'
import { Routes ,Route, useNavigate} from 'react-router-dom'
import Homes from './Homes'
import Dummy from './Dummy'


const Backgroundcolor=()=>{
   let [color,setcolor]=useState('olive')

    return (
        <div className="container" style={{background:color}}>
        <Routes>
           <Route path='/' element={<Homes/>}/>
           <Route path="/:data" element={<Dummy/>}/>
        </Routes>
        </div>
    )
}

export default Backgroundcolor
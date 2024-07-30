import React from 'react'
import { useContext } from 'react'

import { counterContext } from '../context/context'
import Component from './Component'
const Button = () => {
    const value=useContext(counterContext)
  return (
    <div>
      <button className='bg-blue-700 text-white rounded-md w-11 p-1' onClick={()=>value.setcount((count)=>count+1)}><span><Component/></span></button>
    </div>
  )
}

export default Button

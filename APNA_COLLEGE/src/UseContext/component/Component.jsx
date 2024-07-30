import React ,{ useContext } from 'react'
import { counterContext } from '../context/context'



const Component = () => {
    const value=useContext(counterContext)
  return (
    <div>
      <p>{value.count}</p>
    </div>
  )
}

export default Component

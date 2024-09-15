import React from 'react'
import { useParams } from 'react-router-dom'

const Dummy = () => {
    let a=useParams();
    console.log(a.data)
  return (
    <div>
      <h1>Welcome to the Dummy Page</h1>
    </div>
  )
}

export default Dummy

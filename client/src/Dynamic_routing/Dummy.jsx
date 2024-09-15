import React from 'react'
import { useParams } from 'react-router-dom'

const Dummy = () => {
  
    let a=useParams();
    console.log(a,"Hii")
  return (
    <div>
      Hello
       {a.data}
    </div>
  )
}

export default Dummy

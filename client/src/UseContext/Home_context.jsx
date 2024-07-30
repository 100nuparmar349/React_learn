import React, { useContext } from 'react'
import { Context } from './context'



const Home_context = () => {
    let data=useContext(Context)
   
  return (
    <div>
        {data}
      
    </div>
  )
}

export default Home_context

import React, { useState } from 'react'

const Api = () => {
  
    let [time,Settime]=useState();
   setInterval(()=>{
    let curtime=new Date().toLocaleTimeString();
    Settime(curtime)
   })
   

   

    
  return (
    <div>
  {time}
    </div>
  )
}

export default Api

import React from 'react'
import { useState } from 'react';

const Homes = () => {
    let [time,settime]=useState();
    setInterval(()=>{
        let currtime=new Date().toLocaleTimeString();
       
       
        settime(currtime);
    })
  return (
    <div>
      <h1>Welcome to the Home page</h1>
      <h1>{time}</h1>

    </div>
  )
}

export default Homes

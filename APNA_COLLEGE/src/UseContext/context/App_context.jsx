import React, { Component, useState } from 'react'
import { counterContext } from './context';
import Navbar from '../component/Navbar';
// usecontext se uske andar  ke component or nested component me vo value mil jati hai .

const App_context = () => {
    let [count,setcount]=useState(0);
    function fun(){
        setcount(count++);
    }
  
  return (
    <div>
      < counterContext.Provider value={{count ,setcount}}>
      <Navbar/>
      
   
    <p>App {count}</p>
    <button onClick={fun} className='bg-blue-700 text-white rounded-md p-1'>Submit</button>
    </counterContext.Provider>
    </div>
  )
}

export default App_context

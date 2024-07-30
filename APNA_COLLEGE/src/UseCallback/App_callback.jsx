import React, { useCallback, useMemo, useState } from 'react'
import Navbar from './Navbar'
// javascript ke andar do function same nhi hote 
const App_callback = () => {
    let [count,setcount]=useState(0);
    let [adjective,setadjective]=useState("good")
    function fun(){
        setcount(count++);
    }

    // functio basically freeze ho gaya hai . usecall back function ko memoize karta hai .
    // const getadjective=useCallback(()=>{
    //     return "another"+count;
    // },[count]);
    const getadjective=useMemo(()=>{
        return "another"+count;
    },[count]);
  return (
    <div>
        <p>{count}
       
        <Navbar adjective={"Good"} getadjective={getadjective}/>

       
    
        </p>
        
      <button onClick={fun}>Click</button>
    </div>
  )
}

export default App_callback

import React from 'react'
import { useState } from 'react'

//funtion component based dynamically change nhi hote hai

function Counter(){

   let [count,setcounter]=useState(0);
   function add(){
      setcounter(count+1);
   }

   return(
    <div>
     <p> {count}</p>
     <button onClick={add}>Add</button>
     </div>
   )
}
export default Counter
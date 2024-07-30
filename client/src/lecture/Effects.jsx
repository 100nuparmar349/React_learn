import React, { useCallback, useEffect, useState } from 'react'


// jab dependencies me change hota hai to iska use kiya jata hai 
const Effects= () => {
    let [count,Setcount]=useState(0);
    function fun1(){
        Setcount(count++);
    }

   
    useEffect(()=>{
    //alert("Count is Changed");
   },[count])
  const fun=useCallback(()=>{return "another"},[count])
  console.log(fun())
  
  useEffect(()=>{
    //
    fetch('https://dummyjson.com/recipes').then((res)=>{
      return res.json()
  
    }).then((data)=>{
      console.log(data)
     
      console.log(data.recipes);
   
  
  
    })
  
  },[])
  


   
    
  return (
    <div>
      <p>{count}</p>
      
      <button onClick={fun1}  className='bg-blue-600 text-white p-2 m-3 rounded-lg'>Increase</button>
      
    </div>
  )
}

export default Effects

import React, { useEffect, useState } from 'react'
import './Front.css'
import ratingImg from './rating.png';


import Navbar from '../lecture/Navbar';
const Front = () => {
  let [data, setdata]=useState([]);
   useEffect(()=>{
    fetch('https://dummyjson.com/recipes').then((res)=>{
      return res.json();
    }).then((data)=>{
      setdata(data.recipes);
      console.log(data.recipes)
      
    })
   },[]);
   function fun(id){
    // value,index,array
   let newdata= data.filter((a)=>{
      return id!=a.id;
    })
    setdata(newdata)
   }
  return (
   
    <div className='flex flex-row flex-wrap justify-center items-center m-0 w-screen  '>
      
      {data.map((res)=>{
      return(
        <>
                 
          <div className='container w-64 m-3 p-2 '>
          <img src={res.image} className='h-40 w-full p-3' alt="" />
          <div className='p-1'>
            <div>
              <span> Item {res.id}  </span>
              <p className='font-semibold text-lg'>{res.name}</p>
              
              <div>
                 <span className=' font-medium '> <img  className='h-4 inline-block'  src={ratingImg}alt="Rating" /></span> {res.rating}    <p className='font-medium  mb-1 inline-block'> {res.cookTimeMinutes} Min</p></div>
              
              <p className='font-semibold '> <span className='font-medium  text-slate-600'>{res.cuisine}</span></p>
              <p>{res.ingredients}</p>
 
              <p className='text-green-700  text-lg font-bold'>{res.mealType}</p>
              <button className='bg-blue-800 p-2 text-white rounded font-medium ' onClick={()=>fun(res.id)}>Delete</button>

            </div>
          



        </div>
     
 
          </div>
       
        </>
      )

    })}
        
      </div>
  

  )
}

export default Front

import React, { useState } from 'react'

// onclick expects function  in this button directly give the reference
// <button onClick={()=> setcolor("red")} className=" px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>

const Color = () => {
    let [color,setcolor]=useState("olive");
  return (
    <div className="w-screen h-screen duration-200 border border-red-700" style={{backgroundColor:color}}>
       
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2">
              <button onClick={()=> setcolor("red")} className=" px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
              <button onClick={()=> setcolor("green")} className=" px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Green"}}>Green</button>

              <button onClick={()=> setcolor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>

              <button onClick={()=> setcolor("pink")} className="px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>

            </div>
           


        </div>


      
    </div>
  )
}

export default Color

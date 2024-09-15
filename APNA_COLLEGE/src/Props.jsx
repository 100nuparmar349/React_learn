import React from 'react'
// const Props=({a})=>
const Props=({name,last,Gmail})=>{

    return(
        <div className='bg-slate-700 text-white'>
{/* 
        <h1 >{a.name}</h1>
        <h2>{a.last}</h2>
        <h3>{a.Gmail}</h3> */}
        
        <h1 >{name}</h1>
        <h2>{last}</h2>
        <h3>{Gmail}</h3>

        </div>
    )
}

export default Props

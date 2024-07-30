import React from 'react'

const Props=({name,last,Gmail})=>{

    return(
        <div className='bg-slate-700 text-white'>

        <h1 >{name}</h1>
        <h2>{last}</h2>
        <h3>{Gmail}</h3>
        </div>
    )
}

export default Props

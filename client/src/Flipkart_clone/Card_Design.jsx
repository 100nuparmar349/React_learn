import React from 'react'

const Card_Design = ({data}) => {
  return (
    <div className='grid place-items-center border  box-content p-3 m-3 border-slate-800 '>
     <img className='w-32 h-40' src={data.src} alt="Sorry" />
     <div className='font-light'>{data.Product}</div>
     <div className='font-semibold'>From {data.Price}</div>
    </div>

  )
}

export default Card_Design

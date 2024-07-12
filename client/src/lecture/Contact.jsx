import React from 'react'

const Contact = () => {
  return (
    <div className='w-screen h-screen bg-blue-50 grid place-items-center '>
        <div className='max-w-96 w-full flex flex-col justify-center  '>
            <h1 className='text-black font-medium text-5xl leading-3 '>Contact Us</h1>
            <div className='m-10'>
                <input type='text' className='w-full p-2 border-none outline-none' placeholder='Enter your Name'/>
            </div>
        </div>
     
    </div>
  )
}

export default Contact

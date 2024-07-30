import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const Frontpage = () => {
  return (
    <div>
        <nav className='w-full p-3 flex justify-between bg-slate-400'>
          <a href="" className='font-bold text-base text-blue-900'>FRONTPAGE</a>
        <div className='flex w-1/2 justify-between ml-7'>
            <a href="">Home</a>
            <a>About</a>
            <a href="">Contact Us</a>
        </div>
        <div className=' '>
        <Link to='/Login' className='bg-pinkextra text-white p-1.5 m-3    font-medium   rounded-md'>Login</Link>
        <Link to='/Signup '  className='bg-purple-700  text-white p-1.5 font-medium   rounded-md'>Sign up</Link>

        </div>
       

        </nav>
      

    </div>
  )
}

export default Frontpage

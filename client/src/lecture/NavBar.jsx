import React from 'react'
import { memo } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  // {adjective, getadjective}
  // Memo are used render our element in one time 
  // Only jab  props me changes hote hai tabhi re render karta hai .



  return (

    <div className=' '>
      {/* i am a {adjective} Memo */}
    <nav className='flex justify-evenly bg-yellow-200 p-2 font-medium'>
      <Link to='/'>Home</Link>
      <Link to='/Contact'>Contact</Link>
      <Link to='/About'>About</Link>
      {/* <a href="" target='blank'>Home</a> */}
      {/* <a href="">About </a> */}
  {/* <a href="">Contact</a> */}

     
    </nav>
  </div>
  )
}

export default Navbar

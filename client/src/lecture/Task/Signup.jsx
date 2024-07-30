import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  let [input,Setinput]=useState({
    username:'',
    email:'',
    password:'',
  });
  let [data,SetData]=useState([]);


  function fun(e){
   
    let {name,value}=e.target
   
  
    
    Setinput({...input,[name]:value});
      // Setinput(e.target.value);
      console.log(input);
  }
  function done(e){
   
  

    const newdata=[...data,input];
    // console.log(newdata);
    SetData(newdata);

   
    localStorage.setItem('name',JSON.stringify(newdata));

    // let new1=JSON.parse(localStorage.getItem('name'))
    // console.log(new1.email);
    

  }

 


  return (
    <div>
       <div className='w-screen h-screen grid place-items-center bg-slate-500'>
        <div className='max-w-80 w-full bg-white flex justify-center  flex-col p-4 rounded-md'>
         
            <h1 className='font-semibold text-2xl text-center mt-4'>Signup Form</h1>
            <div class="social_icon flex items-center m-5">
            <a className='block p-1.5 w-full leading-8 text-white rounded bg-blue-600 m-1 font-medium ' href="#"><i class="fab fa-facebook-f m-3"></i><span className='text-sm'>Gmail</span></a>
            <a className='block p-1.5 w-full leading-8 text-white rounded bg-blue-600 m-1 font-medium'  href="#"><i class="fab fa-facebook-f m-3"></i><span className='text-sm'>Facebook</span></a>
        </div>
        <form action="#" className=''>
        <div class=" h-[50px]  w-full relative mt-4">
                <input onChange={fun} name='username' value={input.username} className='w-full h-full outline-none   text-xl pl-11 rounded-md border border-gray-500' type="text" placeholder="Enter your username " required />
                <div class="icon absolute  top-1/2 left-5"><i class="fas fa-user"></i></div>
            </div>
            <div class=" h-[50px]  w-full relative mt-4">
                <input onChange={fun} name='email' value={input.email} className='w-full h-full outline-none   text-xl pl-11 rounded-md border border-gray-500' type="text" placeholder="Email or Phone " required />
                <div class="icon absolute  top-1/2 left-5"><i class="fas fa-user"></i></div>
            </div>
            <div class="input_box   h-[50px] w-full relative mt-4">
                <input onChange={fun} name='password' value={input.password} className='w-full h-full  outline-none text-xl pl-11 rounded-md border border-gray-500' type="password" placeholder=" Password " required />
                <div class="icon absolute  top-1/4 left-5"><i class="fas fa-lock"></i></div>
            </div>
            
           
            
        </form>
        <div class="input_box button">
                <input onClick={done} className=' text-white text-[20px]  font-medium  bg-lightpurple w-full p-1 mt-2 rounded-md' type="submit" value="Signup" />
                     
            </div>

        </div>

      
    </div>
      
    </div>
  )
}

export default Signup

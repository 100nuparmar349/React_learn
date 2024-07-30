import React, { useState } from 'react'

//
fetch().then((res)=>{
  res.json();
}).then((data)=>{
  console.log(data);
})

const Login = () => {
  let [input,Setinput]=useState({
    email:'',
    password:'',
  });
  function fun(e){
   
    let {name,value}=e.target
   
  
    
    Setinput({...input,[name]:value});
      // Setinput(e.target.value);
      console.log(input);
  }



  function get(){
    console.log(input.email);
    console.log(input.password)
  console.log("Hello")
    
    let new1=JSON.parse(localStorage.getItem('name'))
    const user=new1.find(user=>user.email === input.email && user.password===input.password );
    if(user){
      console.log("Done")
    } 
    // console.log(new1.email)
    // console.log(new1.password)
    // if(new1.email===input.email.trim() && new1.password ===input.password.trim()) {
    //   console.log("DOne");
    // } 
  }

 
 


  return (
    <div>
       <div className='w-screen h-screen grid place-items-center bg-slate-500'>
        <div className='max-w-80 w-full bg-white flex justify-center  flex-col p-4 rounded-md'>
         
            <h1 className='font-semibold text-2xl text-center mt-4'>Login Form</h1>
            <div className="social_icon flex items-center m-5">
            <a className='block p-1.5 w-full leading-8 text-white rounded bg-blue-600 m-1 font-medium ' href="#"><i className="fab fa-facebook-f m-3"></i><span className='text-sm'>Gmail</span></a>
            <a className='block p-1.5 w-full leading-8 text-white rounded bg-blue-600 m-1 font-medium'  href="#"><i className="fab fa-facebook-f m-3"></i><span className='text-sm'>Facebook</span></a>
        </div>
        <form action="#" className=''>
            <div className=" h-[50px]  w-full relative mt-4">
                <input  name='email' onChange={fun} value={input.email}  className='w-full h-full outline-none   text-xl pl-11 rounded-md border border-gray-500' type="text" placeholder="Email or Phone " required />
                <div className="icon absolute  top-1/2 left-5"><i className="fas fa-user"></i></div>
            </div>
            <div className="input_box   h-[50px] w-full relative mt-4">
                <input  name='password' onChange={fun} value={input.password} className='w-full h-full  outline-none text-xl pl-11 rounded-md border border-gray-500' type="password" placeholder=" Password " required />
                <div className="icon absolute  top-1/4 left-5"><i className="fas fa-lock"></i></div>
            </div>
            <div className="option_div mt-4 p-1  flex justify-between">
                <div className="check_box">
                    <input type="checkbox" />
                    <span className='ml-1 text-sm'>Remember me</span>
                </div>

                <div className="forget_div">
                    <a className='text-base font-medium text-blue-500' href="#">Forgot Password</a>
                </div>
            </div>
           
            {/* <div className="sign_up w-full flex justify-center mt-2  text-base font-">
                Not member? <Link to='/Signup' className='text-blue-800' href="#">Signup Now</Link>
            </div> */}
        </form>
        <div className="input_box button">
                {/* <input    type="submit" value="Login" /> */}
                <button onClick={get} className=' text-white text-[20px]  font-medium  bg-lightpurple w-full p-1 mt-2 rounded-md'>Login</button>
                     
            </div>


        </div>

      
    </div>
      
    </div>
  )
}

export default Login

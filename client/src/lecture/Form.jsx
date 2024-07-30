import React, { useState } from 'react'


// ///


const Form = () => {
    let [input,Setinput]=useState({
      firstname:'',
      lastname:'',
      email:'',
      password:'',
    });
    let [data,SetData]=useState('');


    function fun1(e){
     
      let {name,value}=e.target
     
    
      
      Setinput({...input,[name]:value});
        // Setinput(e.target.value);
        console.log(input);
    }
    // function fun2(e){
    //   let {name,value}=e.target
    //  Setinput({...input,[name]:''});
    // }
     function done(){
    //    SetData([...data,input])
    localStorage.setItem('name',JSON.stringify(input))
    let new1=JSON.parse(localStorage.getItem('name'));
    // console.log(new1.firstname)
   

    SetData(new1.firstname);
   
    // SetData(new1)

     }
  
   
    

  return (
    <div className='w-screen h-screen grid place-items-center'>
        <fieldset>
            <legend>
                Form
                
            </legend>
       <h1>{data}</h1>
       {/* <p>{data}</p> */}
     
      <input type='text' name='firstname' value={input.firstname} onChange={fun1} placeholder='Enter your name'/>
      <input type='test' name='lastname' value={input.lastname} onChange={fun1} placeholder='Enter your lastname'/>
      <input type='email' name='email' value={input.email} onChange={fun1} placeholder='Enter your email'/>
      <input type='password' name='password' value={input.password} onChange={fun1} placeholder='Enter your password'/>
      <button onClick={done} className='bg-blue-600 p-1 text-white'>Submit</button>
      </fieldset>
    </div>
  )
}

export default Form

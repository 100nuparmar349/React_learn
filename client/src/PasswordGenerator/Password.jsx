import React, { useState ,useCallback, useEffect,useRef} from 'react'
// kisi ka reference lene ke liya 
const Password = () => {
  const [length,setlength]=useState(8);
  const [Number,setnumber]=useState(false);
   const [character,setcharacter]=useState(false)
  const [password,setpassword]=useState("");

  const passwordgenerator=useCallback(()=>{

    let pass="";
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(Number){
      str+="0123456789";
    }
    if(character){
      str+="!@#$%^-+=[]{}~";
    }
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char)

    }
    setpassword(pass);


  },[length,Number,character,setpassword]);

console.log(password);

  useEffect(()=>{
   passwordgenerator();
 
  },[length,Number,character,passwordgenerator]);

  const copyPasswordtoclipboad=useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password]);

const passwordref=useRef(null)

  return (
  
   
    <div className="w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
      
      <h1 className="text-4xl text-center">Password Generator</h1>

    <div className="flex shadow rounded-lg overflow-hidden my-2 p-5">
      <input type="text" className="outline-none w-full rounded py-1 px-3  " readOnly ref={passwordref} placeholder='password' value={password}/>
      <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-400" onClick={copyPasswordtoclipboad}>Copy </button>
     
    </div>
    <div className="flex text-sm gap-x-2">
      <div className='flex items-center gap-x-1 '>
      <input type="range"  min={6}  max={100} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}}  />
      <label htmlFor="">Length :{length}</label>

      </div>
      <div className='flex text-sm gap-x-2'>
        <input type="checkbox" id="numberinput" onChange={()=>{
          setnumber((prev)=>!prev);
        }}/>

        <label htmlFor="numberInput">Numbers</label>


      </div>
      <div className='flex items-center  gap-x-2'>
        <input type="checkbox" id="characterInput" onChange={()=>{
          setcharacter((prev)=>!prev);
        }}/>

        <label htmlFor="characterInput">Character</label>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={passwordgenerator}>Click</button>

        


      </div>


      
     
    </div>
    </div>



    
  )
}

export default Password

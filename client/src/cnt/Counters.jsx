import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './counter.css'

// UI update controll the react


function Counters() {

  // let counter=0;

let [count,setcounter]=useState(0)// '' {} use state ke andar kuch bhi dal sakte
let [data,Setdata]=useState([]);
let [city,Setcity]=useState("Bhopal");
// use state ke do cheeze milte hai. o bhi array ke format me.
//second element is a not a value .it's a function
// Hooka are not assigned in const keyword
useEffect(()=>{
  //
  fetch('https://dummyjson.com/recipes').then((res)=>{
    return res.json()

  }).then((data)=>{
    console.log(data)
   
    console.log(data.recipes);
  Setdata(data.recipes);


  })

},[])

function fun2(){
  Setcity("DElhi");
}


let [words,setwords]=useState("");

const addvalue=()=>{
  
  // setcounter(counter+1);
  // if(count<21){
   setcounter(count+1);
    // setcounter((counter)=>counter+1) 
    // setcounter((counter)=>counter+1)
  

  // }else{
  //   words="Gone only 20th value "
  //   setwords(words)
  // }

    
}

const removevalue=()=>{
  
  if(count>=0){
    setcounter(count-1)

  }else{
    words="Your are not going less than 1"
    setwords(words)
  }
 
}
function Reset(){
  count=0;
  setcounter(count);
}

let show=document.querySelector('#child');



function gettime(){
  let li=document.createElement('li');
  li.append(count);
  show.append(li);
}
  





  return (
    <>
   <div className="App"></div>
   {/* <h1>Chai or code</h1> */}
   <h2>Counter value : {count}</h2>
   <button onClick={addvalue}>Add value</button>
   <button onClick={fun2}>{city}</button>
   <p>
    {data.map((res)=>{
      return(
        <>
        <p>{res.id}</p>
        <p>{res.name}</p>
        </>
      )

    })}
   </p>
   {/* <button onClick={removevalue}>Remove value</button>

   <button onClick={Reset}>Reset</button>
   <button id='gettime' onClick={gettime}>Get Time</button> */}
   {/* <p>{words}</p>
   <p id="child">
   
   </p> */}
    </>
  )
}

export default Counters

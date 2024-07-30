import React, { useCallback, useState } from 'react'
import NavBar from './Navbar'

//

const Usecallback = () => {
    let [count,setcount]=useState(0);
    let [count2,setcount2]=useState(0)
    const [adjective,setadjective]=useState("Good");
    function fun1(){
        setcount(count++);
    }
    function fun2(){
        setcount2(count2++);
    }

    // use call back se function freeze ho jata hai.
    //Dependies array jab change hote hai useCallback run karta hai
const getadjective=useCallback(()=>{return "another"},[count2])

  return (
    <div>
<NavBar adjective={"good"} getadjectivel={getadjective}/>
<p>{count}</p>
<button onClick={fun1}>Increase</button>
<button onClick={fun2}>Increase 2 </button>
      
    </div>
  )
}

export default Usecallback

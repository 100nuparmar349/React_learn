import React from 'react'
import Card from './Card'

const App = () => {
    // let obj={
    //     username:"sonu",
    //     age:12,
    // }
    // let newarr=[2,2,454,5]
  return (
   <>
     <h1 className='bg-green-500 text-white  p-4 rounded-xl mb-4' >Tailwind Test</h1>
     <Card  username="Sunita" btntext="Click Me"/>
     <Card  username="Divya" btntext="Visit"/>   
   </>
  )
}

export default App

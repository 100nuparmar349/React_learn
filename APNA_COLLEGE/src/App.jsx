import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Props from './Props'


// 

function App() {
  const Details={
    Firstname:'sonu',
    Lastname:'Parmar',
    Gmail:'sonuparmar757598@gmail.com'
  }
  const [count, setCount] = useState(0)

  return (
    <>
     
        <div>
          <h1 className='bg-blue-500'>Apna College</h1>
       
         <Props name={Details.Firstname} last={Details.Lastname}  Gmail={Details.Gmail}/>
        </div>
    </>
  )
}

export default App

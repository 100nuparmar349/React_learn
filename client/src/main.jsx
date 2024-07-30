import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { Context } from './UseContext/context'

// Import our custom CSS


// Import all of Bootstrap's JS

// import Apps from './Apps.jsx'
import './index.css'
// import Spotify from './Clone/Spotify'

import Lecture1 from './lecture/Lecture1'
import Form from './lecture/Form'
import Color from './backgroundProject/Color'
import Usecallback from './lecture/Usecallback'
import UseEffect from './lecture/Effects'
import Effects from './lecture/Effects'
import ConvertCurrency from './ChaiorCode/Convert_USD/ConvertCurrency'
import Index from './lecture/Task/Index'
import Front from './Show_data/Front'

import Apppr from './Props/Apppr'

import App_context from './UseContext/App_context'
import To from './Todolist/To'
import Appdummy from './Dynamic_routing/Appdummy'





//not run import Virtual from './another/virtual'

// createroot ek doom create karta hai.ye main dom or khud ke dom ko compare karke only unhi
// cheezo ko change karta hai jo chage hui hai


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <BrowserRouter>
  <Lecture1/>
  </BrowserRouter> */}
    {/* <BrowserRouter>
  <Index/>
  </BrowserRouter> */}
  
  {/* <Spotify/> */}
  {/* <Cascading/> */}
  {/* <Form/> */}
  {/* <ConvertCurrency/> */}
  {/* <Apppr data='Hello sonu parmar'/> */}
  {/* <Context.Provider value='HELLO'>
    <App_context/>

    
    </Context.Provider> */}
    {/* <To/> */}
  
   
    <BrowserRouter>
    <Appdummy/>
    
    
    
    </BrowserRouter>
    
  </React.StrictMode>
)



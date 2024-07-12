import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
// import Apps from './Apps.jsx'
import './index.css'
import Spotify from './Clone/Spotify'

// import Lecture1 from './lecture/Lecture1'



// import Button from './Button/Button'
// import Cascading from './Tailwind/Cascading'
// import Password from './PasswordGenerator/Password'
// import ConvertCurrency from './Convert_USD/ConvertCurrency'


// import Counters from './cnt/Counters'
// import Color from './backgroundProject/Color'

// import Counters from './cnt/Counters'
// import Api from './Api/Api'

// import App from './images/App'
// import App from './props/App'


//not run import Virtual from './another/virtual'
// import App from './components/Apps'
// import App from './another/virtual';
// createroot ek doom create karta hai.ye main dom or khud ke dom ko compare karke only unhi
// cheezo ko change karta hai jo chage hui hai


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <BrowserRouter>
  <Lecture1/>
  </BrowserRouter> */}
  <Spotify/>
  </React.StrictMode>
)



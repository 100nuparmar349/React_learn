# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# useParams()
- with  the help of  useParams() . we easily access the search bar  data to dynamically type.


# Route Path

- First install the router command with the help of 
# npm install react-router-dom

 - <Routes>
        <Route path='/' element={<HOme/>}/>
      <Route path='/:data' element={<Dummy/>}/>
     
  </Routes>

  # import {BrowserRouter} from 'react-router-dom'
<!-- 
 let navigate=useNavigate();
    setTimeout(()=>{
navigate('/')

    },5000) -->
- it is use for come our main page again after 5 second.
- Routes are help for redirect the page. Routes is  provide file  path.



# Image use in react 
- # import cycleImage from './cycle.png';
- img src={cycleImage}


# Time
- let curtime=new Date().toLocaleTimeString();
- use for take current time
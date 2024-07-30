import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import App_context from './UseContext/context/App_context.jsx'
import App_Memo from './UseMemo/App_Memo.jsx'
import App_callback from './UseCallback/App_callback.jsx'


// Component basically return ui 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App_callback />
  </React.StrictMode>,
)

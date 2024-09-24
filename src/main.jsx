import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/Store.js'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  

  <BrowserRouter>

    <Provider  store={store}>        {/* //for slice */}
    
     <App />
     <Toaster/>
 
    </Provider>
   
  </BrowserRouter>

   
  
)

import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Cart from './pages/Cart.jsx'
import Home from './pages/Home'


function App() {
  // const [count, setCount] = useState(0)

  return (
    < div >
     <div className='bg-slate-900'>  <Navbar/> </div>

     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/cart" element={ <Cart/>} />

     </Routes>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FoodItem from './compounts/FoodItem'
import Header from './compounts/Header'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Cart from './compounts/Cart'
import SearchBar from './compounts/SearchBar'
import Landing from './compounts/Landing'
import Sucess from './compounts/Sucess'

function App() {
  const [count, setCount] = useState(0)
  const [successVisible, setSuccessVisible] = useState(false);

  const showSuccess = () => {
    setSuccessVisible(true);
    setTimeout(() => {
      setSuccessVisible(false);
    }, 3000);
  };
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<FoodItem  onAddToCart={showSuccess}/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/search' element={<SearchBar/>}></Route>
            <Route path='/landing' element={<Landing/>}></Route>
          </Routes>
      </BrowserRouter>
      {successVisible && (
        <div className="success-notification">
          <Sucess/>
        </div>
      )}
    </>
  )
}

export default App

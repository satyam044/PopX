import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/home'
import Login from './Pages/login'
import Signup from './Pages/signup'
import Profile from './Pages/profile'

const App = () => {
  return (
    <div className='w-full h-dvh bg-[#f7f8f9] flex justify-center items-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
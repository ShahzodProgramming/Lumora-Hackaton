import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

const Approutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/sign' element={<SignUpPage/>}/>
        </Routes>
    </div>
  )
}

export default Approutes
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

const Approutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<LoginPage/>}/>
        </Routes>
    </div>
  )
}

export default Approutes
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserRoute from './Modules/User/URoutes/UserRoute'
import AdminRoute from './Modules/Admin/ARoutes/AdminRoute'
import Login from './Modules/User/UComponents/Login'
import Register from './Modules/User/UComponents/Register'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<UserRoute/>}/>
          <Route path='/admin/*' element={<AdminRoute/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

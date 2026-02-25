import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AHome from '../AComponents/AHome'
import Sidebar from '../AComponents/Sidebar'
import Manageuser from '../AComponents/Manageuser'


export default function AdminRoute() {
  return (
    <div>
        <Sidebar />
        <Routes>
            <Route path='/ahome' element={<AHome/>} />
            <Route path='/manageuser' element={<Manageuser/>} />
        </Routes>
    </div>
  )
}

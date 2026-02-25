import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AHome from '../AComponents/AHome'
import Sidebar from '../AComponents/Sidebar'


export default function AdminRoute() {
  return (
    <div>
        <Sidebar />
        <Routes>
            <Route path='/ahome' element={<AHome/>} />
        </Routes>
    </div>
  )
}

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UHome from '../UComponents/UHome'
import Topbar from '../UComponents/Topbar'

export default function UserRoute() {
  return (
    <div>
        <Topbar/>
        <Routes>
            <Route path='/uhome' element={<UHome/>} />
        </Routes>
    </div>
  )
}

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UHome from '../UComponents/UHome'
import Topbar from '../UComponents/Topbar'
import AboutPage from '../UComponents/AboutPage'
import HomePage from '../UComponents/HomePage'

export default function UserRoute() {
  return (
    <div>
        <Topbar/>
        <Routes>
            <Route path='/uhome' element={<UHome/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/homepage' element={<HomePage/>} />
        </Routes>
    </div>
  )
}

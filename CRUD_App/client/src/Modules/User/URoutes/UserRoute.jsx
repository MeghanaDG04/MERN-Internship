import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
//import UHome from '../UComponents/UHome'
import Topbar from '../UComponents/Topbar'
import AboutPage from '../UComponents/AboutPage'
import HomePage from '../UComponents/HomePage'
import Login from '../UComponents/Login'
import Register from '../UComponents/Register'



function AppContent(){
  const location = useLocation()
  const hideTopBar = ["/login", "/register"]
  return (
    <div>
      {!hideTopBar.includes(location.pathname) && <Topbar/>}
      <Routes>
          {/* <Route path='/uhome' element={<UHome/>} /> */}
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/homepage' element={<HomePage/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/viewsingleproduct' element={<ViewSingleProduct/>}/>
      </Routes>
    </div>
  )
}

export default function UserRoute() {
  return (
    <div>
        <AppContent/>
    </div>
  )
}

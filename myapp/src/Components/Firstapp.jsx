import React from 'react'
import './style.css'

export default function FirstApp() {
    const mystyle={
        color:"red",
        textAlign:"center",
        border:"2px solid black"
    }
  return (
    <div>
        <h1>My First App</h1>
        <h3 style={{color:"blue"}}>Inline CSS</h3>

        <h3 style={mystyle}>Internal CSS</h3>
        <h4 className='myclass'>External CSS</h4>

        {/* <img src={img1} alt="My Image" height={200} width={200}/> */}

    </div>
  )
}
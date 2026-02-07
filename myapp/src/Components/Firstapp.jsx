import React from 'react'

export default function FirstApp() {
    const mystyle={
        color:"red",
        textAlign:"center",
        border:"2px solid black"
    }
  return (
    <div>
        <h1>My First App</h1>
        <h4 style={{color:"blue"}}>Inline CSS</h4>

        <h4 style={mystyle}>Internal CSS</h4>
    </div>
  )
}

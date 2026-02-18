import React from 'react'
import { useState } from 'react'

export default function HookUsestate() {
    //syntax of usestate
    //const [state, setState] = useState()
    let fav = "red"

    const handlechange = () => {
        fav = "black"
        console.log(fav);
    }

    //using useState
    const[color, setColor] = useState("Green")

    const handlecolor = () => {
        setColor("Blue")
    }   

    //multi state handling
    // const[company, setCompany] = useState("Codelabs")
    // const[place, setPlace] = useState("Mangalore")
    // const[year, setYear] = useState(2024)

    const[place, setPlace] = useState({
        name: "Murdeshwar",
        Taluq: "Bhatkal",
        Famous: "Temple"
        
    })
  return (
    <div>
        <h3>Favourite Color: {fav}</h3>
        <button onClick={handlechange}>Change Color</button>

        <h4>Using useState</h4>
        <h3>Favourite Color: {color}</h3>
        <button onClick={handlecolor}>Change Color</button>

        <h4>Multi State Handling</h4>
        <h3>Place Name: {place.name}</h3>
        <h3>Taluq: {place.Taluq}</h3>
        <h3>Famous For: {place.Famous}</h3>
    </div>
  )
}

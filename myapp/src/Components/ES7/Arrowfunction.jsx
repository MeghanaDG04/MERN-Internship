import React from 'react'
import {Button} from '@mui/material'

export default function Arrowfunction() {
    //normal function
    function Normalfun(){
        return (<h3>Normal Function</h3>)
    }

    //Arrow function
    const Arrowfun = () => {
        return (
            <>
            <h3>Arrow Function</h3>
            <h4>Arrow function in React</h4>
            </>
        )
    }

    //Arrow function with single st
    const Singlearrow = () => <h3>Single Arrow Function</h3>

    //Event handling in arrow function
    const Handleclick = () => alert("Button Clicked!!")   

    const Hadlegreet =(name)=> {
        return(
            alert("Hello" + " " +name)
        )
    }


    return (
    <div>
        <Normalfun/>
        <Arrowfun/>
        <Singlearrow/>  
        <Button variant="contained" onClick={Handleclick}> Click</Button>
        <Button variant="outlined" onClick={() => console.log("Greetings!!")}>Greet</Button>
        <Button onClick={()=>Hadlegreet("User")}>Pass Argument</Button>

    </div>
  )
}

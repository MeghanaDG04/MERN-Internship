import React, { use } from 'react'
import { useState, useEffect } from 'react'

export default function HookUseEffect() {
    //Syntax: useEffect(callback, dependencies)
    // useEffect() is a hook that allows you to perform side effects in function components. 
    // It takes two arguments: a callback function and an optional array of dependencies. 
    // The callback function is executed after the component renders, and it can be used to perform tasks such as fetching data, updating the DOM, or setting up event listeners. 
    // The dependencies array allows you to specify when the effect should be re-run, based on changes to specific values.
    
    const [count, setCount] = useState(0)

    useEffect(() => {
       // setTimeout(() => {
            setCount((numcount)=> numcount + 1)
        //}, 2000);
    }, [])

  return (
    <div>
        <h3> I have rendered {count} times</h3>
    </div>
  )
}

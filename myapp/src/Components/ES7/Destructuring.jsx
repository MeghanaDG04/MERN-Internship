import React from 'react'

export default function () {
    //with array
    const number=[1,2,3,4,5,6]
    const[,,,,,g] = number
    const num4 = number[5]

    //object
    const person = {
        1: "megha",
        2: "suman",
        3: "sneha"
    };

    const { 1: first, 2: second, 3: third } = person;


  return (
    <div>
        {g}
        {second}
    </div>
  )
}

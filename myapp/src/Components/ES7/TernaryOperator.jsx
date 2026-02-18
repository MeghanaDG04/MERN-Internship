import { colors } from '@mui/material'
import React from 'react'

export default function TernaryOperator() {
    const score = 88
  return (
    <div style={score>=80 ? {background:'green',color:'white'} : score>=70 ? {background:'blue',color:'white'} : score>=60 ? {background:'orange',color:'white'} : {background:'red',color:'white'}}>
        {score >= 80 ? <h2>Distinction</h2> :
        score >= 70 ? <h2>First Class</h2> :
        score >= 60 ? <h2>Second Class</h2> :
        <h2>Fail</h2>}
    </div>
  )
}

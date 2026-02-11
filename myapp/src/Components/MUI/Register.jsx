import React from 'react'
import Typography from '@mui/material/Typography';
import {Button, Paper, TextField} from '@mui/material';

export default function Register() {
  return (
    <div>
        <Paper elevation={10} style={{width : 500, margin : "10px auto", padding : 20}}>
          <Typography variant='h4' style={{textAlign:'center'}}>REGISTER PAGE</Typography>
          <TextField label="Name"  type="text" variant="outlined" fullWidth style={{marginBottom: 10}}/> 
          <TextField label="Email" type="email" variant="outlined" fullWidth style={{marginBottom: 10}}/> 
          <TextField label="Password" type="password" variant="outlined" fullWidth style={{marginBottom: 10}}/> 
          <TextField label="Phone" type="number" variant="outlined" fullWidth style={{marginBottom: 10}}/> 
          <TextField label="Address" multiline rows={5} variant="outlined" fullWidth style={{marginBottom: 10}}/>
          <Button variant='contained' color='secondary'>REGISTER</Button>
        </Paper>
    </div>
  )
}

import { Box, Button, TextField, Typography, Paper, Divider } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Bookingform() {

  const { productId } = useParams()

  const [booking, setBooking] = useState({
    fname:'',
    email:'',
    phone:'',
    address:'',
    quantity:''
  })

  const handleChange = (e) => {
    setBooking({...booking, [e.target.name]: e.target.value})
  }

  const handleSubmit = async () => {
    try {

      const res = await axios.post("http://localhost:7000/booking/createbooking", {
        fullname: booking.fname,
        email: booking.email,
        phone: booking.phone,
        address: booking.address,
        quantity: booking.quantity,
        totalAmount: 0
      })

      alert(res.data.message)
      console.log(res.data.booking);

    } catch (error) {
      console.log(error)
      alert("Booking failed")
    }
  }

  return (

    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #eef2f3, #ffffff)",
        p:3
      }}
    >

      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 500,
          p: 4,
          borderRadius: 3
        }}
      >

        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 600, mb: 1 }}
        >
          Book Now
        </Typography>

        <Typography
          variant="body2"
          align="center"
          sx={{ color: "text.secondary", mb: 3 }}
        >
          Fill the details below to complete your booking
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Box sx={{ display:"flex", flexDirection:"column", gap:2.5 }}>

          <TextField
            label="Full Name"
            name="fname"
            fullWidth
            onChange={handleChange}
          />

          <TextField
            label="Email Address"
            name="email"
            fullWidth
            onChange={handleChange}
          />

          <TextField
            type="number"
            label="Phone Number"
            name="phone"
            fullWidth
            onChange={handleChange}
          />

          <TextField
            label="Delivery Address"
            name="address"
            multiline
            rows={3}
            fullWidth
            onChange={handleChange}
          />

          <TextField
            type="number"
            label="Quantity"
            name="quantity"
            fullWidth
            onChange={handleChange}
          />

          <Button
            variant="contained"
            color="success"
            size="large"
            fullWidth
            sx={{
              mt:1,
              py:1.4,
              fontSize:16,
              fontWeight:600,
              borderRadius:2,
              textTransform:"none"
            }}
            onClick={handleSubmit}
          >
            Confirm Booking
          </Button>

        </Box>

      </Paper>

    </Box>
  )
}
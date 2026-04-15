import { Box, Button, TextField, Typography, Paper, IconButton, InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonOutline from '@mui/icons-material/PersonOutline';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import PhoneOutlined from '@mui/icons-material/PhoneOutlined';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useEffect } from 'react';

export default function Bookingform() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [booking, setBooking] = useState({
    fullname:'',
    email:'',
    phone:'',
    address:'',
    quantity:'',
    totalamount:''
  })
  
  const [price, setPrice] = useState(0)
  const handleChange = (e) => {
    setBooking({...booking, [e.target.name]: e.target.value})
    //console.log(object)({...booking, [e.target.name]: e.target.value})
    if(e.target.name === "quantity"){
      const quantity = e.target.value
      const total = quantity * price
      setBooking(prev => ({...prev, totalamount: total}))
    }else{
      setBooking({...booking, [e.target.name]: e.target.value})
      //console.log(object)({...booking, [e.target.name]: e.target.value})
    }
  }

  useEffect(()=>{
    axios.get(`http://localhost:7000/product/getsingleproduct/${id}`)
    .then((res) => {
      console.log("Product Details", res.data.pdata.price)
      setPrice(res.data.pdata.price)
      // const price = res.data.pdata.price
      // setBooking(prev => ({...prev, totalamount: price}))
    })
    .catch((error) => {
      console.log(error)
    })
  },[id])

  const Token = localStorage.getItem("Token")

  const handleSubmit = async () => {
  try {

    const res = await axios.post("http://localhost:7000/booking/createbooking",
      { ...booking, productID: id }, 
      { headers: { "auth-token": Token } }
    )

    alert(res.data.message)
    console.log(res.data.booking)

  } catch (error) {
    console.log(error)
    alert("Booking failed")
  }
}

  const fieldStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#667eea",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": { color: "#667eea" },
  };

  return (

    <Box
      sx={{
        height: "130vh",
        display: "flex",
        background: "linear-gradient(135deg,#667eea,#764ba2)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Paper
        elevation={4}
        sx={{
          width: "600px",
          p: 4,
          borderRadius: 4,
          position: "relative"
        }}
      >

        <IconButton
          onClick={() => navigate(-1)}
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            color: "#667eea"
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Typography
          variant="h5"
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

        <Box sx={{ display:"flex", flexDirection:"column", gap:2 }}>

          <TextField
            label="Full Name"
            name="fullname"
            fullWidth
            onChange={handleChange}
            sx={fieldStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutline />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Email Address"
            name="email"
            fullWidth
            onChange={handleChange}
            sx={fieldStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            type="number"
            label="Phone Number"
            name="phone"
            fullWidth
            onChange={handleChange}
            sx={fieldStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneOutlined />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Delivery Address"
            name="address"
            multiline
            rows={3}
            fullWidth
            onChange={handleChange}
            sx={fieldStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeOutlined />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            type="number"
            label="Quantity"
            name="quantity"
            fullWidth
            onChange={handleChange}
            sx={fieldStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ShoppingCartOutlined />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            type="number"
            label="Price"
            name="price"
            fullWidth
            onChange={handleChange}
            sx={fieldStyle}
            InputProps={{
              readOnly: true,
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupeeIcon />
                </InputAdornment>
              ),
            }}
            value={price}

          />

          <TextField
            type="number"
            label="Total Amount"
            name="totalamount"
            fullWidth
            onChange={handleChange}
            sx={fieldStyle}
            InputProps={{
              readOnly: true,
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupeeIcon />
                </InputAdornment>
              ),
            }}
            value={booking.totalamount}

          />

          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              mt: 1,
              py: 1.4,
              fontSize: 16,
              fontWeight: 600,
              borderRadius: 2,
              textTransform: "none",
              background: "linear-gradient(135deg,#667eea,#764ba2)",
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
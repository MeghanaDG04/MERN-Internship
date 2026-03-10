import React, { useState, useEffect } from "react";
import {Typography, Paper, TextField, Button, Checkbox, FormControlLabel, Box} from "@mui/material";
import img1 from "./img1.jpg";
import img3 from "./img3.jpg";
import axios from "axios"


export default function Register() {
  const [formdata, setFormdata] = useState({ name: "", email: "", password: "", phone: "", address: "", });

  const images = [img1, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleregister = () => {
    console.log("Form data :", formdata)
    axios.post('http://localhost:7000/user/registeruser',formdata)
    .then((res)=>{
      console.log("Registered User: ", res.data.udata);
      alert("Registered Successfully..!!") 
    })
    .catch((error)=>{
      console.log(error);
    })
    
    //window.location.href = '/homepage';
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", backgroundColor: "#f2f2f2", alignItems: "center", justifyContent: "center", }} >
      <Paper elevation={6} sx={{ width: "1100px", height: "700px", display: "flex", borderRadius: 3, overflow: "hidden", }} >
        
        {/* LEFT IMAGE SLIDER */}
        <Box sx={{ flex: 1, position: "relative" }}>
          <img
            src={images[currentIndex]}
            alt="slide"
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.5s ease-in-out", }}
          />
        </Box>

        {/* RIGHT FORM */}
        <Box sx={{ flex: 1, padding: 6, display: "flex", flexDirection: "column", justifyContent: "center", }} >
          <Typography variant="h4" mb={3} fontWeight={600} textAlign="center" >
            Registration
          </Typography>

          <TextField label="Name" name="name" fullWidth margin="normal" onChange={handleChange} />
          <TextField label="Email" name="email" fullWidth margin="normal" onChange={handleChange} />
          <TextField label="Password" name="password" type="password" fullWidth margin="normal" onChange={handleChange} />
          <TextField label="Phone Number" name="phone" fullWidth margin="normal" onChange={handleChange} />
          <TextField label="Address" name="address" fullWidth margin="normal" onChange={handleChange} />

          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="body2">
                I agree to the{" "}
                <span style={{ color: "#1976d2" }}>
                  terms and conditions
                </span>
              </Typography>
            }
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              py: 1.2,
              backgroundColor: "#1c1c1c",
              "&:hover": { backgroundColor: "#000" },
            }}
            onClick={handleregister}
          >
            Sign up
          </Button>

          <Typography variant="body2" textAlign="center" sx={{ mt: 3 }}>
            Already have an account?{" "}
            <span
              style={{
                color: "#1976d2",
                cursor: "pointer",
                fontWeight: 500,
              }}
              onClick={() => window.location.href = '/login'}
            >
              Login
            </span>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
import React, { useState, useEffect } from "react";
import {
  Typography,
  Paper,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Avatar,
  InputAdornment,
} from "@mui/material";

import PersonAddOutlined from "@mui/icons-material/PersonAddOutlined";
import PersonOutline from "@mui/icons-material/PersonOutline";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import LockOutlined from "@mui/icons-material/LockOutlined";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import ShoppingBag from "@mui/icons-material/ShoppingBag";

import img1 from "./img1.jpg";
import img3 from "./img3.jpg";
import axios from "axios";

export default function Register() {

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const images = [img1, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleregister = async () => {

    setErrorMessage("");

    try {

      const res = await axios.post(
        "http://localhost:7000/user/registeruser",
        formdata
      );

      console.log("Registered User:", res.data);

      alert("Registered Successfully!");

      setFormdata({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
      });

    } catch (error) {

      console.log(error);

      if (error.response && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Something went wrong");
      }
    }
  };

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
        height: "100vh",
        display: "flex",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >

      <Paper
        elevation={0}
        sx={{
          width: "1000px",
          height: "680px",
          display: "flex",
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0 25px 80px rgba(0,0,0,0.3)",
        }}
      >

        {/* LEFT IMAGE */}
        <Box sx={{ flex: 1, position: "relative" }}>
          <img
            src={images[currentIndex]}
            alt="slide"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(195deg, rgba(26,26,46,0.8), rgba(15,52,96,0.7))",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

            <Avatar
              sx={{
                mb: 2,
                width: 64,
                height: 64,
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              }}
            >
              <ShoppingBag sx={{ fontSize: 32 }} />
            </Avatar>

            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ShopSphere
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.7)",
                mt: 1,
                textAlign: "center",
                px: 4,
              }}
            >
              Join us and explore a world of amazing products
            </Typography>
          </Box>
        </Box>

        {/* RIGHT FORM */}
        <Box
          sx={{
            flex: 1,
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "rgba(255,255,255,0.97)",
          }}
        >

          <Avatar
            sx={{
              mx: "auto",
              mb: 1.5,
              width: 52,
              height: 52,
              background:
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          >
            <PersonAddOutlined />
          </Avatar>

          <Typography variant="h4" textAlign="center" mb={2}>
            Create Account
          </Typography>

          {/* ERROR MESSAGE */}
          {errorMessage && (
            <Typography
              color="error"
              textAlign="center"
              mb={1}
              fontSize="14px"
            >
              {errorMessage}
            </Typography>
          )}

          <TextField
            label="Full Name"
            name="name"
            value={formdata.name}
            onChange={handleChange}
            fullWidth
            margin="dense"
            size="small"
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
            label="Email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            fullWidth
            margin="dense"
            size="small"
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
            label="Password"
            name="password"
            type="password"
            value={formdata.password}
            onChange={handleChange}
            fullWidth
            margin="dense"
            size="small"
            sx={fieldStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Phone"
            name="phone"
            value={formdata.phone}
            onChange={handleChange}
            fullWidth
            margin="dense"
            size="small"
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
            label="Address"
            name="address"
            value={formdata.address}
            onChange={handleChange}
            fullWidth
            margin="dense"
            size="small"
            sx={fieldStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeOutlined />
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              py: 1.3,
              background:
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: 3,
              fontWeight: 700,
              textTransform: "none",
            }}
            onClick={handleregister}
          >
            Create Account
          </Button>

        </Box>
      </Paper>
    </Box>
  );
}
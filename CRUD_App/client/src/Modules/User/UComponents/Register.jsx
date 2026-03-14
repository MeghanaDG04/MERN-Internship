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

  const images = [img1, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

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
    console.log("Form data :", formdata);
    axios
      .post("http://localhost:7000/user/registeruser", formdata)
      .then((res) => {
        console.log("Registered User: ", res.data.udata);
        alert("Registered Successfully..!!");
      })
      .catch((error) => {
        console.log(error);
      });
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
        {/* LEFT IMAGE SLIDER */}
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
          {/* Dark overlay */}
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
          {/* Dot indicators */}
          <Box
            sx={{
              position: "absolute",
              bottom: 20,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: 1,
              zIndex: 2,
            }}
          >
            {images.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: currentIndex === index ? 24 : 8,
                  height: 8,
                  borderRadius: currentIndex === index ? 4 : "50%",
                  background:
                    currentIndex === index
                      ? "linear-gradient(135deg, #667eea, #764ba2)"
                      : "rgba(255,255,255,0.4)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
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
            <PersonAddOutlined fontSize="large" />
          </Avatar>

          <Typography
            variant="h4"
            mb={0.5}
            fontWeight={700}
            textAlign="center"
          >
            Create Account
          </Typography>

          <Typography
            variant="body2"
            textAlign="center"
            color="text.secondary"
            mb={2}
          >
            Join ShopSphere today
          </Typography>

          <TextField
            label="Full Name"
            name="name"
            fullWidth
            margin="dense"
            size="small"
            onChange={handleChange}
            sx={fieldStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutline sx={{ color: "#667eea", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Email"
            name="email"
            fullWidth
            margin="dense"
            size="small"
            onChange={handleChange}
            sx={fieldStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined sx={{ color: "#667eea", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="dense"
            size="small"
            onChange={handleChange}
            sx={fieldStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined sx={{ color: "#667eea", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Phone Number"
            name="phone"
            fullWidth
            margin="dense"
            size="small"
            onChange={handleChange}
            sx={fieldStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneOutlined sx={{ color: "#667eea", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Address"
            name="address"
            fullWidth
            margin="dense"
            size="small"
            onChange={handleChange}
            sx={fieldStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeOutlined sx={{ color: "#667eea", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                size="small"
                sx={{ "&.Mui-checked": { color: "#667eea" } }}
              />
            }
            label={
              <Typography variant="body2">
                I agree to the{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 600,
                  }}
                >
                  terms and conditions
                </span>
              </Typography>
            }
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 1,
              py: 1.3,
              background:
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: 3,
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "none",
              "&:hover": {
                background:
                  "linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)",
                boxShadow: "0 4px 15px rgba(102,126,234,0.4)",
              },
            }}
            onClick={handleregister}
          >
            Create Account
          </Button>

          <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
            Already have an account?{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                cursor: "pointer",
                fontWeight: 600,
              }}
              onClick={() => (window.location.href = "/login")}
            >
              Sign In
            </span>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

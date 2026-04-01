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
  CircularProgress,
} from "@mui/material";
import LockOutlined from "@mui/icons-material/LockOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import axios from "axios";

import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

export default function Login() {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const images = [img1, img2, img3];
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

  const handleLogin = async () => {
    if (!formdata.email || !formdata.password) {
      alert("Please fill all fields");
      return;
    }

    console.log(formdata);


    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:7000/user/loginuser",
        {
          email: formdata.email,
          password: formdata.password,
        }
      );

      console.log(res);

      alert(res.data.message);
      //localStorage.setItem("loggedUser", JSON.stringify(res.data.udata));
      localStorage.setItem("Token", res.data.token);
      window.location.href = "/homepage";
    } catch (err) {
      alert(err.response?.data?.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const fieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#667eea" },
    },
    "& .MuiInputLabel-root.Mui-focused": { color: "#667eea" },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 2, sm: 3 },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 1000,
          minHeight: { xs: "auto", md: 580 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0 25px 80px rgba(0,0,0,0.3)",
        }}
      >
        {/* LEFT FORM */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 3, sm: 5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "rgba(255,255,255,0.97)",
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              mb: 2,
              width: 56,
              height: 56,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          >
            <LockOutlined />
          </Avatar>

          <Typography variant="h4" textAlign="center" fontWeight={700}>
            Welcome Back
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
            mb={3}
          >
            Sign in to your ShopSphere account
          </Typography>

          <TextField
            label="Email"
            name="email"
            fullWidth
            margin="normal"
            onChange={handleChange}
            sx={fieldSx}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined sx={{ color: "#667eea" }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            onChange={handleChange}
            sx={fieldSx}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined sx={{ color: "#667eea" }} />
                </InputAdornment>
              ),
            }}
          />

          <FormControlLabel
            control={<Checkbox sx={{ "&.Mui-checked": { color: "#667eea" } }} />}
            label="Remember me"
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: 3,
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)",
                boxShadow: "0 4px 15px rgba(102,126,234,0.4)",
              },
            }}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Sign In"}
          </Button>

          <Typography variant="body2" textAlign="center" sx={{ mt: 3 }}>
            Don't have an account?{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                cursor: "pointer",
                fontWeight: 600,
              }}
              onClick={() => (window.location.href = "/register")}
            >
              Sign Up
            </span>
          </Typography>
        </Box>

        {/* RIGHT IMAGE SLIDER */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            display: { xs: "none", md: "block" },
            minHeight: 400,
          }}
        >
          <img
            src={images[currentIndex]}
            alt="slide"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              inset: 0,
            }}
          />
          {/* Dark overlay with branding */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(195deg, rgba(26,26,46,0.85), rgba(15,52,96,0.75))",
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
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
              sx={{ color: "rgba(255,255,255,0.7)", mt: 1, textAlign: "center", px: 4 }}
            >
              Your one-stop destination for everything you love
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
      </Paper>
    </Box>
  );
}

import React, { useState, useEffect } from "react";
import {
  Typography,
  Paper,
  TextField,
  Button,
  Box,
  Avatar,
  InputAdornment,
  IconButton
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import PersonAddOutlined from "@mui/icons-material/PersonAddOutlined";
import PersonOutline from "@mui/icons-material/PersonOutline";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import axios from "axios";

export default function MyProfile() {

  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [userid, setUserid] = useState("");

  const token = localStorage.getItem("Token");

console.log("Token",token);

  const viewprofile = async () => {
    try {
      const response = await fetch(
        "http://localhost:7000/user/getprofile",
        {
          method: "GET",
          headers: {
            "auth-token": token,
          },
        }
      );

      const details = await response.json();

      if (details.udata) {
        setFormdata({
          name: details.udata.name,
          email: details.udata.email,
          phone: details.udata.phone,
          address: details.udata.address,
        });

        setUserid(details.udata._id);
      }

    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    viewprofile();
  }, []);

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const updateProfile = async () => {
  try {
    const response = await fetch(
      "http://localhost:7000/user/updateprofile",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify(formdata),
      }
    );

    const data = await response.json(); // parse response

    console.log("Updated User:", data.udetails);

    alert(data.message);

  } catch (error) {
    console.error("Update Error:", error);
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
        background: "linear-gradient(135deg,#667eea,#764ba2)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          width: "600px",
          p: 4,
          borderRadius: 4,
          position: "relative"
        }}
      >

        {/* Back Button */}
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

        <Avatar
          sx={{
            mx: "auto",
            mb: 2,
            width: 52,
            height: 52,
            background: "linear-gradient(135deg,#667eea,#764ba2)",
          }}
        >
          <PersonAddOutlined />
        </Avatar>

        <Typography variant="h5" align="center" mb={3} fontWeight={700}>
          My Profile
        </Typography>

        <TextField
          label="Full Name"
          name="name"
          value={formdata.name}
          onChange={handleChange}
          fullWidth
          margin="dense"
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
          label="Phone"
          name="phone"
          value={formdata.phone}
          onChange={handleChange}
          fullWidth
          margin="dense"
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
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            background: "linear-gradient(135deg,#667eea,#764ba2)",
          }}
          onClick={updateProfile}
        >
          Update Profile
        </Button>
      </Paper>
    </Box>
  );
}
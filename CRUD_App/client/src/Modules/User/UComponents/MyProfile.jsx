import React, { useState, useEffect } from "react";
import {
  Typography,
  Paper,
  TextField,
  Button,
  Box,
  Avatar,
  InputAdornment,
} from "@mui/material";

import PersonAddOutlined from "@mui/icons-material/PersonAddOutlined";
import PersonOutline from "@mui/icons-material/PersonOutline";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import HomeOutlined from "@mui/icons-material/HomeOutlined";

import axios from "axios";

export default function MyProfile() {

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  //const [userid, setUserid] = useState("");

  const token = localStorage.getItem("Token");
  console.log("TOKEN:", token);

 const viewprofile = async () => {
  try {
    const response = await fetch(
      "http://localhost:7000/user/getprofile",
      {
        method: "GET",
        headers: { "auth-token": token },
      }
    );

    const details = await response.json();
    console.log(details.udata);

    if (details.udata) {
      setFormdata(details.udata);
    }

  } catch (error) {
    console.error("Error fetching profile data:", error);
  }
};

  useEffect(() => {
    viewprofile();
  },[]);

  // GET PROFILE DATA

//   useEffect(() => {
//     axios
//       .get("http://localhost:7000/user/getprofile", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         const user = res.data.user;

//         setFormdata({
//           name: user.name,
//           email: user.email,
//           phone: user.phone,
//           address: user.address,
//         });

//         setUserid(user._id);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

  // HANDLE CHANGE
//   const handleChange = (e) => {
//     setFormdata({
//       ...formdata,
//       [e.target.name]: e.target.value,
//     });
//   };

  // UPDATE PROFILE
//   const updateProfile = () => {
//     axios
//       .put(`http://localhost:7000/user/updateuser/${userid}`, formdata)
//       .then((res) => {
//         alert("Profile Updated Successfully");
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

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
        }}
      >
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
         // onChange={handleChange}
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
         // onChange={handleChange}
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
         // onChange={handleChange}
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
         // onChange={handleChange}
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
         // onClick={updateProfile}
        >
          Update Profile
        </Button>
      </Paper>
    </Box>
  );
}
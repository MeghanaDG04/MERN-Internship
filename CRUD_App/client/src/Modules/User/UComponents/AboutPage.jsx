import React from "react";
import { Box, Typography, Container, Grid, Paper, Button } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TimelineIcon from "@mui/icons-material/Timeline";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InsightsIcon from "@mui/icons-material/Insights";

export default function About() {
  return (
    <Box sx={{ overflowX: "hidden" }}>

      {/* 🔥 HERO SECTION */}
        <Box
        sx={{
            position: "relative",
            minHeight: "60vh",
            overflow: "hidden",
            background: "linear-gradient(-45deg, #0f2027, #1e3c72, #2a5298, #203a43)",
            backgroundSize: "400% 400%",
            animation: "gradientMove 12s ease infinite",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
        }}
        >

        {/* Floating Circles */}
        <Box className="circle circle1" />
        <Box className="circle circle2" />
        <Box className="circle circle3" />

        <Box sx={{ position: "relative", zIndex: 2 }}>
            <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
                letterSpacing: 2,
                textShadow: "0 0 20px rgba(255,255,255,0.4)"
            }}
            >
            Streakly
            </Typography>

            <Typography variant="h5" mt={2}>
            Build Small Habits. Create Big Results.
            </Typography>
        </Box>

        {/* Animations */}
        <style>
            {`
            @keyframes gradientMove {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }

            .circle {
                position: absolute;
                border-radius: 50%;
                background: rgba(255,255,255,0.08);
                animation: float 8s infinite ease-in-out;
            }

            .circle1 {
                width: 200px;
                height: 200px;
                top: 10%;
                left: 15%;
            }

            .circle2 {
                width: 300px;
                height: 300px;
                bottom: 15%;
                right: 10%;
                animation-delay: 2s;
            }

            .circle3 {
                width: 150px;
                height: 150px;
                top: 50%;
                left: 70%;
                animation-delay: 4s;
            }

            @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-30px); }
                100% { transform: translateY(0px); }
            }
            `}
        </style>
        </Box>

      {/* 📌 ABOUT SECTION */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight={600} textAlign="center" mb={3}>
          What is Streakly?
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          maxWidth="700px"
          mx="auto"
        >
          Streakly is a mini habit streak tracking app designed to help you stay
          consistent with small daily goals. Whether it's reading, coding,
          exercising, or drinking water — Streakly keeps you accountable and
          motivated every single day.
        </Typography>
      </Container>

      {/* 🚀 FEATURES SECTION */}
      <Container sx={{ pb: 10 }}>
        <Grid container spacing={4}>
          {[
            {
              icon: <WhatshotIcon fontSize="large" sx={{ color: "#2196f3" }} />,
              title: "Daily Streak Tracking",
              desc: "Track your daily habits and never break your streak."
            },
            {
              icon: <TimelineIcon fontSize="large" sx={{ color: "#1e88e5" }} />,
              title: "Progress Analytics",
              desc: "Visual insights to measure your consistency."
            },
            {
              icon: <EmojiEventsIcon fontSize="large" sx={{ color: "#42a5f5" }} />,
              title: "Achievement Badges",
              desc: "Earn rewards as you build stronger habits."
            },
            {
              icon: <InsightsIcon fontSize="large" sx={{ color: "#64b5f6" }} />,
              title: "Smart Insights",
              desc: "Understand your patterns and improve daily."
            }
          ].map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={6}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  textAlign: "center",
                  background: "rgba(33,150,243,0.08)",
                  backdropFilter: "blur(10px)",
                  transition: "0.4s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 15px 30px rgba(33,150,243,0.3)"
                  },
                }}
              >
                {item.icon}
                <Typography variant="h6" mt={2} fontWeight={600}>
                  {item.title}
                </Typography>
                <Typography variant="body2" mt={1} color="text.secondary">
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 💡 MOTIVATION SECTION */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1e3c72, #2a5298)",
          color: "white",
          py: 8,
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h4" fontWeight={600}>
          “Consistency beats motivation.”
        </Typography>
        <Typography variant="body1" mt={2} sx={{ opacity: 0.8 }}>
          Small actions repeated daily create powerful results over time.
        </Typography>
      </Box>

      {/* 🚀 CALL TO ACTION */}
      <Box sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h5" fontWeight={600}>
          Ready to start your streak?
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            px: 5,
            py: 1.5,
            background: "linear-gradient(135deg, #2196f3, #1e88e5)",
            boxShadow: "0 5px 20px rgba(33,150,243,0.4)",
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 8px 25px rgba(33,150,243,0.6)",
            },
          }}  onClick={() => window.location.href = '/register'}
        >
          Get Started 
        </Button>
      </Box>

      {/* Gradient Animation Keyframes */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

    </Box>
  );
}
import React from "react";
import { Box, Typography, Container, Grid, Paper, Button, Avatar } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PaymentsIcon from "@mui/icons-material/Payments";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import StarIcon from "@mui/icons-material/Star";
import GroupsIcon from "@mui/icons-material/Groups";
import InventoryIcon from "@mui/icons-material/Inventory";

export default function About() {
  return (
    <Box sx={{ overflowX: "hidden", background: "#f0f2f5" }}>

      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          minHeight: "60vh",
          overflow: "hidden",
          background: "linear-gradient(195deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* Floating Circles */}
        <Box
          sx={{
            position: "absolute",
            width: 200,
            height: 200,
            top: "10%",
            left: "15%",
            borderRadius: "50%",
            background: "rgba(102,126,234,0.1)",
            animation: "float 8s infinite ease-in-out",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 300,
            height: 300,
            bottom: "15%",
            right: "10%",
            borderRadius: "50%",
            background: "rgba(118,75,162,0.1)",
            animation: "float 8s infinite ease-in-out 2s",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 150,
            height: 150,
            top: "50%",
            left: "70%",
            borderRadius: "50%",
            background: "rgba(102,126,234,0.08)",
            animation: "float 8s infinite ease-in-out 4s",
          }}
        />

        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Avatar
            sx={{
              mx: "auto",
              mb: 3,
              width: 80,
              height: 80,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          >
            <ShoppingBag sx={{ fontSize: 40 }} />
          </Avatar>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: 2,
            }}
          >
            ShopSphere
          </Typography>

          <Typography variant="h5" mt={2} sx={{ color: "rgba(255,255,255,0.7)" }}>
            Your Universe of Smart Shopping
          </Typography>
        </Box>

        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-30px); }
              100% { transform: translateY(0px); }
            }
          `}
        </style>
      </Box>

      {/* STATS SECTION */}
      <Container sx={{ mt: -5, position: "relative", zIndex: 2, mb: 6 }}>
        <Grid container spacing={3}>
          {[
            { icon: <GroupsIcon sx={{ fontSize: 36 }} />, value: "50K+", label: "Happy Customers", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
            { icon: <InventoryIcon sx={{ fontSize: 36 }} />, value: "10K+", label: "Products Listed", gradient: "linear-gradient(135deg, #43A047 0%, #66BB6A 100%)" },
            { icon: <StarIcon sx={{ fontSize: 36 }} />, value: "4.8★", label: "Average Rating", gradient: "linear-gradient(135deg, #FB8C00 0%, #FFA726 100%)" },
            { icon: <LocalShippingIcon sx={{ fontSize: 36 }} />, value: "99%", label: "On-Time Delivery", gradient: "linear-gradient(135deg, #1A73E8 0%, #49a3f1 100%)" },
          ].map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  background: stat.gradient,
                  color: "#fff",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Box sx={{ position: "absolute", top: -10, right: -10, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.15)" }} />
                {stat.icon}
                <Typography variant="h4" fontWeight={700} mt={1}>{stat.value}</Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>{stat.label}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ABOUT SECTION */}
      <Container sx={{ py: 6 }}>
        <Paper
          elevation={0}
          sx={{
            p: 5,
            borderRadius: 3,
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(102,126,234,0.1)",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight={700} mb={2}>
            What is ShopSphere?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            maxWidth="700px"
            mx="auto"
            lineHeight={1.8}
          >
            ShopSphere is a modern e-commerce platform designed to bring you
            the best products at unbeatable prices. From electronics to fashion,
            home essentials to gadgets — ShopSphere makes online shopping
            seamless, secure, and delightful. We connect you with trusted
            sellers and ensure every purchase is backed by quality assurance.
          </Typography>
        </Paper>
      </Container>

      {/* FEATURES SECTION */}
      <Container sx={{ pb: 8 }}>
        <Typography variant="h4" fontWeight={700} textAlign="center" mb={4}>
          Why Choose ShopSphere?
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              icon: <LocalShippingIcon fontSize="large" />,
              title: "Fast & Free Delivery",
              desc: "Get your orders delivered quickly with free shipping on eligible items."
            },
            {
              icon: <SecurityIcon fontSize="large" />,
              title: "Secure Shopping",
              desc: "Your data and transactions are protected with enterprise-grade security."
            },
            {
              icon: <SupportAgentIcon fontSize="large" />,
              title: "24/7 Support",
              desc: "Our dedicated team is always ready to help you with any queries."
            },
            {
              icon: <PaymentsIcon fontSize="large" />,
              title: "Easy Payments",
              desc: "Multiple payment options including UPI, cards, and cash on delivery."
            }
          ].map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  textAlign: "center",
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(102,126,234,0.1)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 15px 40px rgba(102,126,234,0.15)",
                    borderColor: "rgba(102,126,234,0.3)",
                  },
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
                  {item.icon}
                </Avatar>
                <Typography variant="h6" fontWeight={600}>
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

      {/* QUOTE SECTION */}
      <Box
        sx={{
          background: "linear-gradient(195deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          color: "white",
          py: 8,
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          "Shopping made simple, smart & delightful."
        </Typography>
        <Typography variant="body1" mt={2} sx={{ color: "rgba(255,255,255,0.6)" }}>
          Discover products you love at prices you'll adore.
        </Typography>
      </Box>

      {/* CALL TO ACTION */}
      <Box sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h5" fontWeight={700}>
          Ready to start shopping?
        </Typography>
        <Typography variant="body1" color="text.secondary" mt={1}>
          Create your free account and explore thousands of products
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            px: 5,
            py: 1.5,
            borderRadius: 3,
            fontWeight: 700,
            fontSize: "1rem",
            textTransform: "none",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            boxShadow: "0 5px 20px rgba(102,126,234,0.4)",
            transition: "all 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 8px 30px rgba(102,126,234,0.5)",
              background: "linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)",
            },
          }}
          onClick={() => window.location.href = '/register'}
        >
          Get Started Now
        </Button>
      </Box>
    </Box>
  );
}

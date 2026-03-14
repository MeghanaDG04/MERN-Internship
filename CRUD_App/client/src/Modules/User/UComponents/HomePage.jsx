import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  TextField,
  InputAdornment,
  Chip,
  Button,
  Container,
  Paper,
  Rating,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import Inventory2Outlined from "@mui/icons-material/Inventory2Outlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import axios from "axios";
import img4 from './img4.jpg';

export default function UserHomeProducts() {

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const defaultImage = img4;

  const fetchProducts = () => {
    axios
      .get("http://localhost:7000/product/getproducts")
      .then((res) => {
        setProducts(res.data.pdata);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const highlights = [
    { icon: <LocalShippingIcon />, title: "Free Shipping", desc: "On orders over ₹499" },
    { icon: <VerifiedIcon />, title: "100% Authentic", desc: "Verified products only" },
    { icon: <LocalOfferIcon />, title: "Best Deals", desc: "Up to 70% off daily" },
    { icon: <TrendingUpIcon />, title: "Trending", desc: "Top picks for you" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", background: "#f0f2f5" }}>
      {/* Hero Banner */}
      <Box
        sx={{
          background: "linear-gradient(195deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          py: 8,
          px: 4,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(102,126,234,0.15)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -40,
            left: -40,
            width: 150,
            height: 150,
            borderRadius: "50%",
            background: "rgba(118,75,162,0.15)",
          }}
        />
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            position: "relative",
            zIndex: 1,
          }}
        >
          Discover Amazing Products
        </Typography>
        <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.7)", mt: 1, position: "relative", zIndex: 1 }}>
          Shop the best deals on ShopSphere
        </Typography>
      </Box>

      {/* Highlights Strip */}
      <Container maxWidth="xl" sx={{ mt: -3, position: "relative", zIndex: 2 }}>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            borderRadius: 3,
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(102,126,234,0.15)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          }}
        >
          <Grid container spacing={2}>
            {highlights.map((item, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 2,
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "#fff",
                      display: "flex",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="body2" fontWeight={600}>{item.title}</Typography>
                    <Typography variant="caption" color="text.secondary">{item.desc}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Search Bar & Product Count */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3, flexWrap: "wrap" }}>
          <TextField
            placeholder="Search products or categories..."
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              flexGrow: 1,
              minWidth: 220,
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                background: "#fff",
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#667eea",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#667eea",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#667eea" }} />
                </InputAdornment>
              ),
            }}
          />
          <Chip
            label={`${filteredProducts.length} Products Found`}
            sx={{
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "#fff",
              fontWeight: 600,
            }}
          />
        </Box>

        <Typography variant="h5" fontWeight={700} mb={3}>
          All Products
        </Typography>

        <Grid container spacing={3}>

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product._id} sx={{ display: "flex" }}>

                <Card
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    overflow: "hidden",
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 12px 40px rgba(102,126,234,0.15)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="220"
                      image={product.image || defaultImage}
                      alt={product.name}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "50%",
                        background: "linear-gradient(to top, rgba(26,26,46,0.6), transparent)",
                      }}
                    />
                    <Chip
                      label={product.category}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        background: "linear-gradient(135deg, #667eea, #764ba2)",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "0.7rem",
                      }}
                    />
                  </Box>

                  <CardContent sx={{ p: 2.5, flexGrow: 1, display: "flex", flexDirection: "column" }}>

                    <Typography variant="subtitle1" fontWeight={600} noWrap>
                      {product.name}
                    </Typography>

                    <Rating value={4} size="small" readOnly sx={{ mt: 0.5 }} />

                    <Typography variant="h6" fontWeight={700} sx={{ color: "#667eea", mt: 0.5 }}>
                      ₹{product.price}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mt: 0.5,
                        flexGrow: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {product.description}
                    </Typography>

                    <Button
                      variant="contained"
                      startIcon={<ShoppingCartOutlined />}
                      fullWidth
                      sx={{
                        mt: 2,
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        textTransform: "none",
                        fontWeight: 600,
                        borderRadius: 2,
                        py: 1,
                        "&:hover": {
                          background: "linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)",
                          boxShadow: "0 4px 15px rgba(102,126,234,0.4)",
                        },
                      }}
                    >
                      Add to Cart
                    </Button>

                  </CardContent>
                </Card>

              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  textAlign: "center",
                  py: 8,
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <Inventory2Outlined sx={{ fontSize: 64, color: "rgba(102,126,234,0.4)", mb: 2 }} />
                <Typography variant="h5" fontWeight={600} color="text.secondary">
                  No Products Available
                </Typography>
                <Typography variant="body1" color="text.disabled" mt={1}>
                  Check back later for new arrivals!
                </Typography>
              </Paper>
            </Grid>
          )}

        </Grid>
      </Container>
    </Box>
  );
}

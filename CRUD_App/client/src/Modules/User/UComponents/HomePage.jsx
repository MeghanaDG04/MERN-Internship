import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import Inventory2Outlined from "@mui/icons-material/Inventory2Outlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";

import axios from "axios";
import img4 from "./img4.jpg";

export default function UserHomeProducts() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigate = useNavigate();
  const defaultImage = img4;

  // FETCH PRODUCTS
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:7000/product/getproducts");
      setProducts(res.data.pdata || []);
    } catch (err) {
      console.log(err);
    }
  };

  // FETCH CATEGORY
  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:7000/category/getCategory");
      setCategories(res.data.cdata || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  // FILTER
  const filteredProducts = products.filter((p) => {
    const name = p?.name?.toLowerCase() || "";
    const catName = p?.category?.category?.toLowerCase() || "";
    const search = searchTerm.toLowerCase();

    return (
      (name.includes(search) || catName.includes(search)) &&
      (selectedCategory === "All" || p?.category?._id === selectedCategory)
    );
  });

  const highlights = [
    { icon: <LocalShippingIcon />, title: "Free Shipping", desc: "On orders over ₹499" },
    { icon: <VerifiedIcon />, title: "100% Authentic", desc: "Verified products only" },
    { icon: <LocalOfferIcon />, title: "Best Deals", desc: "Up to 70% off daily" },
    { icon: <TrendingUpIcon />, title: "Trending", desc: "Top picks for you" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", background: "#eef2f7" }}>

      {/* HERO */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1e293b, #0f172a)",
          py: 8,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Discover Amazing Products
        </Typography>

        <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.7)", mt: 1 }}>
          Find the best products curated just for you
        </Typography>
      </Box>

      {/* HIGHLIGHTS */}
      <Container maxWidth="xl" sx={{ mt: -4 }}>
        <Paper sx={{ p: 3, borderRadius: 4 }}>
          <Grid container spacing={2}>
            {highlights.map((item, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {item.icon}
                  <Box>
                    <Typography fontWeight={600}>{item.title}</Typography>
                    <Typography variant="caption">{item.desc}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>

      <Container maxWidth="xl" sx={{ py: 5 }}>

        {/* SEARCH */}
        <Paper sx={{ p: 2, borderRadius: 4, mb: 3 }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              fullWidth
              placeholder="Search products or categories..."
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ background: "#fff", borderRadius: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Chip label={`${filteredProducts.length} Items`} color="primary" />
          </Box>
        </Paper>

        {/* CATEGORY */}
        <FormControl fullWidth sx={{ mb: 4 }}>
          <InputLabel>Filter by Category</InputLabel>
          <Select
            label="Filter by Category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            sx={{ background: "#fff", borderRadius: 2 }}
          >
            <MenuItem value="All">All</MenuItem>
            {categories.map((cat) => (
              <MenuItem key={cat._id} value={cat._id}>
                {cat.category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Typography variant="h5" fontWeight={700} mb={3}>
          Products
        </Typography>

        {/* PRODUCT GRID */}
        <Grid container spacing={3}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
                <Card
                  onClick={() => navigate(`/viewsingleproduct/${product._id}`)}
                  sx={{
                    cursor: "pointer",
                    borderRadius: 4,
                    overflow: "hidden",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="220"
                      image={
                        product.productimage
                          ? `http://localhost:7000/image/${product.productimage}`
                          : defaultImage
                      }
                      alt={product.name}
                      sx={{
                        objectFit: "cover",
                        transition: "0.3s",
                        "&:hover": { transform: "scale(1.05)" }
                      }}
                    />

                    {/* Discount badge */}
                    <Chip
                      label="20% OFF"
                      color="success"
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        fontWeight: 600
                      }}
                    />
                  </Box>

                  <CardContent>
                    <Chip
                      label={product.category?.category || "General"}
                      size="small"
                      sx={{ mb: 1 }}
                    />

                    <Typography fontWeight={600} noWrap>
                      {product.name}
                    </Typography>

                    <Typography variant="h6" color="primary">
                      ₹{product.price}
                    </Typography>

                    <Typography variant="caption" color="green">
                      {product.quantity > 0 ? "In Stock" : "Out of Stock"}
                    </Typography>

                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<ShoppingCartOutlined />}
                      sx={{
                        mt: 2,
                        borderRadius: 3,
                        textTransform: "none",
                        background: "linear-gradient(135deg, #667eea, #764ba2)"
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
              <Paper sx={{ textAlign: "center", py: 6 }}>
                <Inventory2Outlined sx={{ fontSize: 60 }} />
                <Typography variant="h5">No Products Found</Typography>
              </Paper>
            </Grid>
          )}
        </Grid>

      </Container>
    </Box>
  );
}
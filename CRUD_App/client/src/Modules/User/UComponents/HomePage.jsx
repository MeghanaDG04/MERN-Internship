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
  const [categories, setCategories] = useState([]);   // ✅ array
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const defaultImage = img4;

  // ---------------- FETCH PRODUCTS ----------------
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:7000/product/getproducts");
      setProducts(res.data.pdata || []);
    } catch (err) {
      console.log(err);
    }
  };

  // ---------------- FETCH CATEGORY ----------------
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


  
  // ---------------- FILTER LOGIC ----------------
  const filteredProducts = products.filter((p) => {

    const name = p?.name?.toLowerCase() || "";
    const catName = p?.category?.category?.toLowerCase() || "";
    const search = searchTerm.toLowerCase();

    const searchMatch =
      name.includes(search) || catName.includes(search);

    const categoryMatch =
      selectedCategory === "All" ||
      p?.category?._id === selectedCategory;

    return searchMatch && categoryMatch;
  });

  const highlights = [
    { icon: <LocalShippingIcon />, title: "Free Shipping", desc: "On orders over ₹499" },
    { icon: <VerifiedIcon />, title: "100% Authentic", desc: "Verified products only" },
    { icon: <LocalOfferIcon />, title: "Best Deals", desc: "Up to 70% off daily" },
    { icon: <TrendingUpIcon />, title: "Trending", desc: "Top picks for you" },
  ];

  //const filterProducts = selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory);

  return (
    <Box sx={{ minHeight: "100vh", background: "#f0f2f5" }}>

      {/* HERO */}
      <Box
        sx={{
          background: "linear-gradient(195deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          py: 8,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Discover Amazing Products
        </Typography>

        <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.7)", mt: 1 }}>
          Shop the best deals on ShopSphere
        </Typography>
      </Box>

      {/* HIGHLIGHTS */}
      <Container maxWidth="xl" sx={{ mt: -3 }}>
        <Paper sx={{ p: 2, borderRadius: 3 }}>
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

      <Container maxWidth="xl" sx={{ py: 4 }}>

        {/* SEARCH */}
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <TextField
            fullWidth
            placeholder="Search products or categories..."
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Chip label={`${filteredProducts.length} Products`} color="primary" />
        </Box>

        {/* CATEGORY DROPDOWN */}
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
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
          All Products
        </Typography>

        {/* PRODUCT GRID */}
        <Grid container spacing={3} alignItems="stretch">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product._id} sx={{ display: "flex" }}>
                <Card
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    height: "100%",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={
                      product.productimage
                        ? `http://localhost:7000/image/${product.productimage}`
                        : defaultImage
                    }
                    alt={product.name}
                  />

                  <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <Chip
                      label={product.category?.category || "General"}
                      size="small"
                      sx={{ mb: 1, width: "fit-content" }}
                    />

                    <Typography fontWeight={600} noWrap>
                      {product.name}
                    </Typography>

                    <Typography variant="h6" color="primary">
                      ₹{product.price}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        mb: 2,
                      }}
                    >
                      {product.description}
                    </Typography>

                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<ShoppingCartOutlined />}
                      sx={{ mt: "auto" }}
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
                <Typography variant="h5">No Products Available</Typography>
              </Paper>
            </Grid>
          )}
        </Grid>

      </Container>
    </Box>
  );
}
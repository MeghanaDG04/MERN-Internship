import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card,CardMedia,CardContent,CardActions, Typography, IconButton,Grid, Button} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export default function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card sx={{ maxWidth: 345 }}>
            
            {/* Product Image */}
            <CardMedia
              component="img"
              height="200"
              image={product.thumbnail}
              alt={product.title}
            />

            {/* Product Content */}
            <CardContent>
              <Typography variant="h6">
                {product.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {product.description.slice(0, 60)}...
              </Typography>

              <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                ₹ {product.price}
              </Typography>
            </CardContent>

            {/* Actions */}
            <CardActions>
              <IconButton>
                <FavoriteIcon />
              </IconButton>

              <IconButton>
                <ShareIcon />
              </IconButton>

            </CardActions>

          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
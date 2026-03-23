const express = require('express');
const { addProduct, getProducts, editProduct, deleteProduct} = require('../Controller/ProductController');

const route = express.Router()
const upload = require("../Middleware/ImageUpload");

route.post("/addproduct", upload.single('productimage'), addProduct)

//route.post('/addproduct', addProduct)
route.get('/getproducts', getProducts)
route.put('/editproduct/:id', editProduct)
route.delete('/deleteproduct/:id', deleteProduct)

module.exports = route
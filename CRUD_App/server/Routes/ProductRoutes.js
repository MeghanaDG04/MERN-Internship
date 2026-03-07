const express = require('express');
const { addProduct, getProducts } = require('../Controller/ProductController');

const route = express.Router()

route.post('/addproduct', addProduct)
route.get('/getproducts', getProducts)

module.exports = route
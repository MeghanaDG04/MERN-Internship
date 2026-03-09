const express = require('express');
const { addProduct, getProducts, editProduct, deleteProduct  } = require('../Controller/ProductController');

const route = express.Router()

route.post('/addproduct', addProduct)
route.get('/getproducts', getProducts)
route.put('/editproduct/:id', editProduct)
route.delete('/deleteproduct/:id', deleteProduct)


module.exports = route
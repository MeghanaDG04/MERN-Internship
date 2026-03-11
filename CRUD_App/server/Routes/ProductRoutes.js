const express = require('express');
const { addProduct, getProducts, editProduct, deleteProduct,addCategory, getCategories, updateCategory, deleteCategory } = require('../Controller/ProductController');

const route = express.Router()

route.post('/addproduct', addProduct)
route.get('/getproducts', getProducts)
route.put('/editproduct/:id', editProduct)
route.delete('/deleteproduct/:id', deleteProduct)

// route.post("/addcategory", addCategory)
// route.get('/getCategory', getCategories)
// route.put("/updatecategory", updateCategory)
// route.delete("/deletecategory", deleteCategory)

module.exports = route
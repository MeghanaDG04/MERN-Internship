const express = require('express');
const {addCategory, getCategories, updateCategory, deleteCategory, getCategoryById } = require('../Controller/CategoryController');

const route = express.Router()

route.post("/addcategory", addCategory)
route.get('/getCategory', getCategories)
route.put("/updatecategory", updateCategory)
route.delete("/deletecategory/:name", deleteCategory)
route.get("/getcategorybyid/:id", getCategoryById)

module.exports = route

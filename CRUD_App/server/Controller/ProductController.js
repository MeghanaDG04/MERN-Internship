const productTable = require('../Models/ProductModel');

const addProduct = async (req,res)=>{
    try {
        const {name,description,price,quantity,category} = req.body 
        const productDetails = new productTable({name,description,price,quantity,category})
        await productDetails.save()
        res.status(201).json({message: "Product added successfully", pdata: productDetails})
    } catch (error) {
        console.error("Error adding product:", error)
        res.status(500).json({message: "Server error", error})
    }
}

const getProducts = async (req,res)=>{
    try {
        const products = await productTable.find()
        res.status(200).json({message: "Products retrieved successfully", pdata: products})
    } catch (error) {
        console.error("Error retrieving products:", error)
        res.status(500).json({message: "Server error", error})
    }
}

module.exports = { addProduct, getProducts }
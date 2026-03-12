const categoryTable = require('../Models/CategoryModel')

//ADD CATEGORY
const addCategory = async (req,res)=>{
    try{
        const {category} = req.body
        const existing = await productTable.findOne({category})
        if(existing){
            return res.status(400).json({ message:"Category already exists"})}
        const newCategory = new productTable({
            category
        })
        await newCategory.save()
        res.status(201).json({ message:"Category added successfully", cdata:newCategory })
    }catch(error){
        console.error("Error adding category:",error)
        res.status(500).json({message:"Server error",error})
    }
}

// GET UNIQUE CATEGORIES
const getCategories = async (req,res)=>{
    try{
        const products = await productTable.find()
        const categories = [...new Set(products.map(p => p.category))]
        res.status(200).json({ message:"Categories fetched successfully", cdata:categories })
    }catch(error){
        console.error("Error fetching categories:", error)
        res.status(500).json({message:"Server error", error})
    }
}


// UPDATE CATEGORY (update all products with that category)
const updateCategory = async (req,res)=>{
    try{
        const {oldCategory,newCategory} = req.body
        await productTable.updateMany({category:oldCategory}, {$set:{category:newCategory}} )
        res.status(200).json({ message:"Category updated successfully" })
    }catch(error){
        console.error("Error updating category:", error)
        res.status(500).json({message:"Server error", error})
    }
}


// DELETE CATEGORY (delete all products of that category)
const deleteCategory = async (req,res)=>{
    try{
        const {name} = req.params
        await productTable.deleteMany({category:name})
        res.status(200).json({ message:"Category deleted successfully" })
    }catch(error){
        console.error("Error deleting category:", error)
        res.status(500).json({message:"Server error", error})
    }
}

module.exports = {addCategory, getCategories, updateCategory, deleteCategory}
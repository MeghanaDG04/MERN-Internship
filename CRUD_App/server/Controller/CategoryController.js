const categoryTable = require('../Models/CategoryModel')

//ADD CATEGORY
const addCategory = async (req,res)=>{
    try{
        const {category, description} = req.body
        const existing = await categoryTable.findOne({category})
        if(existing){ return res.status(400).json({ message:"Category already exists"}) }
        const newCategory = new categoryTable({ category, description })
        await newCategory.save()
        res.status(201).json({ message:"Category added successfully", cdata:newCategory })
    }catch(error){
        res.status(500).json({message:"Server error"})
    }
}

// GET CATEGORIES
const getCategories = async (req,res)=>{
    try{
        const data = await categoryTable.find()
        res.status(200).json({ message:"Fetched", cdata:data})
    }catch(error){
        console.log(error)
        res.status(500).json({message:"Server error"})
    }
}


// UPDATE CATEGORY (update all products with that category)
const updateCategory = async (req,res)=>{
    try{
        const {oldCategory, newCategory, description} = req.body
        await categoryTable.updateMany(
            {category: oldCategory},
            { $set:{ category: newCategory, description: description }})
        res.status(200).json({message:"Category updated"})
    }catch(error){
        console.log(error)
        res.status(500).json({message:"Server error"})
    }
}


// DELETE CATEGORY (delete all products of that category)
const deleteCategory = async (req,res)=>{
    try{
        const {name} = req.params
        await categoryTable.deleteMany({category:name})
        res.status(200).json({ message:"Category deleted successfully" })
    }catch(error){
        console.error("Error deleting category:", error)
        res.status(500).json({message:"Server error", error})
    }
}

//Get Unique Category
const getCategoryById = async(req,res) =>{
    try {
        const cid = req.params.id
        console.log(cid);
        const singlecategory = await categoryTable.findById(cid)
        res.status(200).json({ message:"Category Fetched" })
    } catch (error) {
        console.error("Error deleting category:", error)
        res.status(500).json({message:"Server error", error})
    }
}

module.exports = {addCategory, getCategories, updateCategory, deleteCategory, getCategoryById}
const usertable = require("../Models/UserModel")

const registerUser = async (req,res)=>{
    try {
        const {name,email,password,phone,address} = req.body
        const userdetails = new usertable({name,email,password,phone,address})
        await userdetails.save()
        res.status(201).json({message: "User registered successfully", udata: userdetails})
    } catch (error) {
        console.error("Error registering user:", error)
        res.status(500).json({message: "Server error", error})
    }
}

module.exports = registerUser

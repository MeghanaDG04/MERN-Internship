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

// LOGIN USER
const loginUser = async (req,res)=>{
    try {
        const {email, password} = req.body
        // Find user by email OR name
        const user = await usertable.findOne({
            $or: [ { email: email }, { name: email } ] })
        if(!user){
            return res.status(401).json({message:"User not found"})
        }
        if(user.password !== password){
            return res.status(401).json({message:"Wrong password"})
        }
        res.status(200).json({
            message:"Login successful",
            udata:user
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Server error"})
    }
}


const getUsers = async (req,res)=>{
    try {
        const getAllUsers = await usertable.find()
        res.status(200).json({message: "Users fetched successfully", alluser: getAllUsers})
    } catch (error) {
        console.error("Error fetching users:", error)
        res.status(500).json({message: "Server error", error})
    }
}

const getUserById = async (req,res)=>{
    try {
        const uid = req.params.id
        const getUserById = await usertable.findById(uid)
        res.status(200).json({message: "User Fetched Successflly", byid: getUserById})
      } catch (error) {
        console.error("Error fetching users:", error)
        res.status(500).json({message: "Server error", error})
    }
} 

const deleteUser = async(req, res)=>{
    try{
        const duid = req.params.id
        const deleteUserById = await usertable.findByIdAndDelete(duid)
        console.log(deleteUserById)
        res.status(200).json({message:"User Deleted Successfully", dubyid : deleteUserById})
    }catch(error){
        console.error("Error fetching users:", error)
        res.status(500).json({message: "Server error", error})
    }
}

const updateUser = async(req, res)=>{
    try{
        const {id} = req.params
        const body = req.body
        const updatedUser = await usertable.findByIdAndUpdate(id,req.body, {new:true})
        console.log(updatedUser)
        res.status(201).json({message:"User Updates Successfully", userupdate : updatedUser})
    }catch(error){
        console.error("Error updating users:", error)
        res.status(500).json({message: "Server error", error})
    }
}
    
module.exports = { registerUser, loginUser ,getUsers, getUserById, deleteUser, updateUser }

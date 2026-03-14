const express = require('express')
const {registerUser, loginUser, getUsers, getUserById, deleteUser, updateUser} = require('../Controller/UserController')

const route = express.Router()

route.post('/registeruser', registerUser)
route.post("/loginuser", loginUser)
route.get('/getusers', getUsers)
route.get('/getuserbyid/:id', getUserById)
route.delete('/deleteuserbyid/:id', deleteUser)
route.put('/updateuser/:id', updateUser)


module.exports = route
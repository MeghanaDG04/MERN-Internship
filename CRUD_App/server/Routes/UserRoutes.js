const express = require('express')
const registerUser = require('../Controller/UserController')

const route = express.Router()

route.post('/registeruser', registerUser)

module.exports = route
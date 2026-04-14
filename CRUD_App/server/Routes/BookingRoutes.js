const express = require('express');
const { createBooking } = require('../Controller/BookingController');
const auth = require('../Middleware/Auth')


const route = express.Router()

route.post("/createbooking", auth, createBooking)

module.exports = route
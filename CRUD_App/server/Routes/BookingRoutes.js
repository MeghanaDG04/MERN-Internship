const express = require('express');
const { createBooking } = require('../Controller/BookingController');

const route = express.Router()

route.post("/createbooking", createBooking)

module.exports = route
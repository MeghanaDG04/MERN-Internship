const BookingTable = require('../Models/BookingModel');

const createBooking = async (req, res) => {
    try {
        console.log("Request body:", req.body);
        const { fullname, email, phone, address,  quantity } = req.body;
        
        const newBooking = new BookingTable({
            fullname,
            email,
            phone,
            address,
            quantity,
        });
        const savebooking = await newBooking.save();
        res.status(201).json({ message: "Booking created successfully", booking: savebooking });
        console.log("Booking created:", savebooking);
    } catch (error) {
        console.log("Booking error:", error);
        res.status(500).json({ message: "Error creating booking", error: error.message });
    }
};

module.exports = {createBooking,}
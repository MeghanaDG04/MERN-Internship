const BookingTable = require('../Models/BookingModel');

const createBooking = async (req, res) => {
    try {
        const { fullname, email, phone, address, quantity, productID } = req.body;
        const uid = req.userid; 

        const newBooking = new BookingTable({
            fullname,
            email,
            phone,
            address,
            quantity,
            userId: uid,
            productID
        });
        const savebooking = await newBooking.save();
        res.status(201).json({ message: "Booking created successfully", booking: savebooking });

    } catch (error) {
        console.log("Booking error:", error);
        res.status(500).json({ message: "Error creating booking" });
    }
};

module.exports = { createBooking };
const mongoose = require('mongoose');

const CONNECTION_URI = 'mongodb://localhost:27017/mern_internship'; 
// mongodb://localhost:27017 = connection link
// mern_internship = database name

const dbconnection = async () => {
    try {
        await mongoose.connect(CONNECTION_URI)
        console.log('Database connected successfully')
    } catch (error) {
        console.error('Error connecting to MongoDB:', error)    
    }
}

module.exports = dbconnection;  
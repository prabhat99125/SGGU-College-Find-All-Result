const mongoose = require('mongoose');
require("dotenv").config();
// Connect to MongoDB
const db = mongoose.createConnection(process.env.studetntry);

db.on('connected', () => {
    console.log("Seat No DB connected");
});

db.on('error', (err) => {
    console.error('Database connection error:', err);
});

// Define the Schema
const schema = new mongoose.Schema({
    DbSeatNO: Number, // Corrected field name to match the data
    DbSPDID: Number,
    TRYCOUNT: Number
});

// Create the Model using the connection
module.exports = db.model("SETNoSPDId", schema);



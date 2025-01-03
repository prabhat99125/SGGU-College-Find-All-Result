const mongoose = require('mongoose');
require("dotenv").config()
// Connect to MongoDB
const db = mongoose.createConnection(process.env.db,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db.on('connected', () => {
    console.log("DB connected");
});

db.on('error', (err) => {
    console.error('Database connection error:', err);
});

// Define the Schema
const studentSchema = new mongoose.Schema({
    studentName: String,
    enrollmentNo: Number,
    spdId: Number,
    seatNo: Number,
    sem4: Array,
});

// Create the Model on the connection instance
const Student = db.model("college", studentSchema);

// Function to update or create the record
const saveOrUpdateStudent = async (studentData) => {
    try {
        const result = await Student.findOneAndUpdate(
            { spdId: studentData.spdId }, // Query: Search by spdId
            studentData,                  // Update: Set the fields from the input data
            { upsert: true, new: true }   // Options: Create if not exists, return updated document
        );
        // console.log(result.studentName);
    } catch (error) {
        console.error('Error saving or updating student record:', error);
    }
};

module.exports = saveOrUpdateStudent;
